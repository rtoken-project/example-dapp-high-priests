import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { navigate } from "gatsby"

import { priestList } from "../../data"
import FollowersList from "./FollowersList"
import GranteeList from "./GranteeList"
import Profile from "./Profile"
import DappyHandler from "./DappyHandler"

const VISIBILITY_THRESHOLD = 10
const API_URL = "https://api.rdai.money"

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  @media only screen and (max-device-width: 700px) {
    width: 100%;
  }
  h2 {
    font-size: 56px;
    line-height: 1;
    color: white;
    font-family: "roobert_bold", sans-serif;
  }
`

const RightSide = styled.div`
  display: flex;
  width: 30%;
  margin-left: 5%;
  @media only screen and (max-device-width: 700px) {
    width: 100%;
    margin: 5%;
  }
`

const FollowersTextContainer = styled.div`
  display: flex;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
  }
`
const Grantees = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
  }
`
const H2 = styled.h2`
  font-family: "roobert_semibold", sans-serif;
  font-size: 24px !important;
  color: white;
  margin-top: 32px;
`

const Followers = styled.div`
  margin-top: 40px;
  border-radius: 12px;
  width: 100%;
  font-family: "roobert_medium", sans-serif;
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  p {
    margin-bottom: 0;
  }
`

const Flock = () => {
  const [state, setState] = useState({
    loadedHighPriest: { projects: [], avatar: "andrew.png", firstName: "" },
    hatID: 0,
    totalDAI: 0,
    compoundRate: 0,
  })

  const loadDetails = async () => {
    if (typeof window !== "undefined") {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const hatID = urlParams.get("hatID")
      const whiteListedHats = priestList.map(priest => priest.hatID.toString())
      if (!whiteListedHats.includes(hatID)) navigate("/404/")
      const priest = priestList.find(element => {
        return element.hatID.toString() === hatID.toString()
      })

      // load all users
      const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
      const { data } = await axios.get(url)
      // Get funding stats
      let totalDAI = 0
      if (typeof data !== "undefined") {
        totalDAI = data.accounts.reduce((a, b) => a + Number(b.balance), 0)
      }

      let compoundRate = 0
      const COMPOUND_URL =
        "https://api.compound.finance/api/v2/ctoken?addresses[]="
      const daiCompoundAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
      const res = await axios.get(`${COMPOUND_URL}${daiCompoundAddress}`)
      compoundRate = res.data.cToken[0].supply_rate.value
      setState({
        ...state,
        compoundRate,
        totalDAI,
        hatID,
        loadedHighPriest: priest,
      })
    }
  }

  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div>
      <Grid>
        <LeftSide>
          <Profile
            avatar={state.loadedHighPriest.avatar}
            firstName={state.loadedHighPriest.firstName}
            lasttName={state.loadedHighPriest.lastName}
            totalDAI={state.totalDAI}
            compoundRate={state.compoundRate}
          />
          <H2>Recipients</H2>
          <Grantees>
            <GranteeList
              projects={state.loadedHighPriest.projects}
              totalDAI={state.totalDAI}
              compoundRate={state.compoundRate}
            />
          </Grantees>
          <Followers>
            <H2>
              <FollowersTextContainer>
                {state.loadedHighPriest.firstName === "" ? (
                  <SkeletonTheme
                    color="rgb(31, 34, 64)"
                    highlightColor="#493E74"
                  >
                    <Skeleton width={100} height={30} />
                  </SkeletonTheme>
                ) : (
                  `${state.loadedHighPriest.firstName}'s `
                )}
                flock
              </FollowersTextContainer>
            </H2>
            <FollowersList
              hatID={state.hatID}
              visibilityThreshold={VISIBILITY_THRESHOLD}
            />
          </Followers>
        </LeftSide>

        <RightSide>
          <DappyHandler
            firstName={state.loadedHighPriest.firstName}
            hatID={state.hatID}
          />
        </RightSide>
      </Grid>
    </div>
  )
}

export default Flock
