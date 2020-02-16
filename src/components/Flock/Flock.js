import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Tribute from "tribute-utils"
import RTokenAnalytics from "rtoken-analytics"
import { navigate } from "gatsby"
import { Context } from "../context"
import { priestList, projectList } from "../../data"
import Avatar from "../common/Avatar"
import axios from "axios"
const API_URL = "https://api.rdai.money"
import hat from "../../images/hat.svg"
import ethers from "ethers"
import DappyModule from "./DappyModule"
import Web3Utils from "./Web3/Web3Utils"
import Loader from "./Loader"

const BackgroundColor = styled.div`
  background-color: #121427;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
`
const Grid = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  h2 {
    font-size: 56px;
    line-height: 1;
    color: white;
    font-family: "roobert_bold", sans-serif;
  }
`
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "roobert_semibold", sans-serif;
  font-size: 24px !important;
  color: white;
  margin-top: 32px;
`

const RightSide = styled.div`
  display: flex;
  width: 30%;
  margin-left: 5%;
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }
`

const ActiveDAI = styled.div`
  color: white;
  flex-direction: column !important;

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 32px;
    color: white;
    margin-bottom: 0;
  }

  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 18px;
    margin-bottom: 0;
    opacity: 0.6;
    margin-top: 8px;
  }
`

const Stats = styled.div`
  display: flex;
  flex-direction: column !important;
  align-self: right;

  h5 {
    font-family: "roobert_medium", sans-serif;
    color: white;
    opacity: 0.6;
    margin-bottom: 12px;
    font-size: 18px;
  }
`

const Grantees = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const H5 = styled.h5`
  font-family: "roobert_medium", sans-serif;
  color: white;
  opacity: 0.6;
  margin-top: 60px;
`

const H2 = styled.h2`
  font-family: "roobert_semibold", sans-serif;
  font-size: 24px !important;
  color: white;
  margin-top: 32px;
`

const LI = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Grantee = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  background-color: #1f2240;
  border-radius: 12px;
  height: 200px;

  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 24px;
    color: white;
  }
  img {
    position: relative;
    right: 25px;
    top: 25px;
    z-index: 999;
    width: 50px;
    height: 50px;
  }
`

const AquiredDai = styled.div`
  p {
    font-size: 12px;
    font-family: "roobert_medium", sans-serif;
    color: white;
    opacity: 0.6;
    margin-bottom: 4px;
  }

  h5 {
    font-size: 14px;
    font-family: "roobert_medium", sans-serif;
    color: white;
    opacity: 1;
    margin-bottom: 0;
  }
`

const FollowersEmpty = styled.div`
  margin-top: 80px;
  border-radius: 12px;
  width: 100%;
  font-family: "roobert_medium", sans-serif;
  font-size: 18px;
  color: white;
  display: flex;
  height: 230px;
  background-color: #0e0f20;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  p {
    margin-bottom: 0;
  }
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
  const [context, setContext] = useContext(Context)

  const [state, setState] = useState({
    loadedHighPriest: { projects: [], avatar: "andrew.png", firstName: "" },
    hatID: 72,
    totalDAI: 0,
    isFollower: false,
    sortedFollowers: [],
    compoundRate: 0,
  })

  const loadDetails = async () => {
    try {
      const web3Utils = new Web3Utils()
      if (web3Utils.isWeb3EnabledBrowser()) {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const hatID = urlParams.get("hatID")
        const priest = priestList.find(element => {
          return element.hatID.toString() === hatID.toString()
        })
        // load stuff
        const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
        const { data } = await axios.get(url)
        let totalDAI = 0
        if (typeof data !== "undefined") {
          totalDAI = data.accounts.reduce((a, b) => a + Number(b.balance), 0)
        }
        const sortedFollowers = data.accounts.sort((a, b) => {
          return b.balance - a.balance
        })
        let isFollower = false
        let amountActive = 0
        const {
          hasWallet,
          walletAddress,
          network,
          error,
        } = await web3Utils.unlockWallet()
        if (error || !hasWallet) {
          return
        }
        const { data: data2 } = await axios.get(
          `${API_URL}/v1/getHatIDByAddress?owner=${walletAddress}`
        )
        const { hatID: userHatID } = data2
        isFollower = userHatID === hatID
        const user = sortedFollowers.find(
          element => element.id.toLowerCase() === walletAddress.toLowerCase()
        )
        if (user && user.balance) amountActive = user.balance
        let compoundRate = 0
        const COMPOUND_URL =
          "https://api.compound.finance/api/v2/ctoken?addresses[]="
        const daiCompoundAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
        const res = await axios.get(`${COMPOUND_URL}${daiCompoundAddress}`)
        compoundRate = res.data.cToken[0].supply_rate.value
        setState({
          ...state,
          hatID,
          totalDAI,
          sortedFollowers,
          isFollower,
          amountActive,
          compoundRate,
          loadedHighPriest: priest,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [])

  const granteeList = state.loadedHighPriest.projects.map(id => {
    return (
      <Grantee key={id.name}>
        <h4>{projectList.find(item => item.id === id).name}</h4>
        <AquiredDai>
          <p>Coffers allocating</p>
          <h5>
            {((state.totalDAI * 0.95 * state.compoundRate) / 3).toFixed(2)} DAI
            per year
          </h5>
        </AquiredDai>
      </Grantee>
    )
  })
  const sortedFollowerList = state.sortedFollowers.map(item => {
    return (
      <LI key={item.id}>
        <h4>{item.id}</h4>
        <p>{Number(item.balance).toFixed(2)} DAI</p>
      </LI>
    )
  })
  const FollowersList = () => {
    if (state.isFollower) {
      return <ol>{sortedFollowerList}</ol>
    }
    return (
      <FollowersEmpty>
        <p>Join the flock to see who's following</p>
      </FollowersEmpty>
    )
  }

  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [])

  if (state.sortedFollowers.length === 0) {
    return (
      <LoaderContainer>
        <p>Please Unlock Your Wallet</p>
        <Loader />
        <BackgroundColor></BackgroundColor>
      </LoaderContainer>
    )
  }
  return (
    <div>
      <Grid>
        <LeftSide>
          <Profile>
            <div>
              <Avatar image={state.loadedHighPriest.avatar} />
              <h2>
                {state.loadedHighPriest.firstName} <br />
                {state.loadedHighPriest.lastName}
              </h2>
            </div>

            <div>
              <Stats>
                <h5>Coffers</h5>
                <ActiveDAI>
                  <h3>{state.totalDAI.toFixed(0)} DAI</h3>
                  <h4>
                    {(state.totalDAI * state.compoundRate).toFixed(2)} DAI per
                    year
                  </h4>
                </ActiveDAI>
              </Stats>
            </div>
          </Profile>

          <H2>Recipients</H2>
          <Grantees>{granteeList}</Grantees>
          <Followers>
            <H2>Followers</H2>
            <FollowersList></FollowersList>
          </Followers>
        </LeftSide>

        <RightSide>
          <DappyModule
            firstName={state.loadedHighPriest.firstName}
            isFollower={state.isFollower}
            hatID={state.hatID}
            amountActive={state.amountActive}
          />
        </RightSide>
      </Grid>
      <BackgroundColor></BackgroundColor>
    </div>
  )
}

export default Flock
