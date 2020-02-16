import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Tribute from "tribute-utils"
import Loadable from "react-loadable"
import RTokenAnalytics from "rtoken-analytics"
let CryptoJS = require("crypto-js")
import { navigate } from "gatsby"
import { Context } from "../context"
import { priestList, projectList } from "../../data"
import Avatar from "../common/Avatar"
import axios from "axios"
const API_URL = "https://api.rdai.money"
import hat from "../../images/hat.svg"
import ethers from "ethers"

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else if (props.pastDelay) {
    return <div></div>
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time...{" "}
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else {
    return null
  }
}

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
  width: 60%;
  margin-right: 5%;

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
const DappyWidget = styled.div`
  width: 310px;
  margin-left: auto;
  height: 400px;
  background: linear-gradient(198.2deg, #ffd765 1.54%, #f7c444 89.85%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;

  img {
    margin-top: 20px;
  }

  h3 {
    margin-top: 40px;
    font-family: "roobert_medium", sans-serif;
    font-size: 32px;
    color: white;
  }

  p {
    font-family: "roobert_medium", sans-serif;
    font-size: 18px;
    color: black;
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

const Grantee = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  background-color: #1f2240;
  border-radius: 12px;
  height: 175px;

  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 24px;
    color: white;
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

const Followers = styled.div`
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

const Button = styled.div`
  font-family: "roobert_bold", sans-serif;
  width: 100%;
  display: block;
  font-size: 16px;
  background-color: red;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: white;
  transition: all 0.2s ease;

  box-shadow: 0px 12px 25px -10px rgba(18, 20, 39, 0.4);

  :hover {
    cursor: pointer;
    transform: translateY(-3px);
    transition: all 0.2s ease;
    box-shadow: 0px 12px 30px -10px rgba(18, 20, 39, 0.7);
  }

  :active {
    cursor: pointer;
    transform: scale(0.98);
    transition: all 0.2s ease;
    box-shadow: 0px 12px 30px -10px rgba(18, 20, 39, 0.7);
  }
`

const Flock = () => {
  const [context, setContext] = useContext(Context)

  const [state, setState] = useState({
    loadedHighPriest: { projects: [], avatar: "andrew.png" },
    hatID: 72,
    totalDAI: 0,
    isFollower: true,
    sortedFollowers: [],
  })

  const compoundRate = 0.075
  const loadDetails = async () => {
    // check URL for priest hat ID
    try {
      if (typeof window !== "undefined") {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const hatID = urlParams.get("hatID")
        const priest = priestList.find(element => {
          return element.hatID.toString() === hatID.toString()
        })
        // load stuff
        const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
        console.log(url)
        const { data } = await axios.get(url)
        let totalDAI = 0
        if (typeof data !== "undefined") {
          totalDAI = data.accounts.reduce((a, b) => a + Number(b.balance), 0)
        }
        const sortedFollowers = data.accounts.sort((a, b) => {
          return b.balance - a.balance
        })

        setState({
          ...state,
          hatID,
          totalDAI,
          sortedFollowers,
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
      <Grantee>
        <h4>{projectList.find(item => item.id === id).name}</h4>
        <AquiredDai>
          <p>Coffer allocation</p>
          <h5>
            {((state.totalDAI * 0.95 * compoundRate) / 3).toFixed(2)} DAI a year
          </h5>
        </AquiredDai>
      </Grantee>
    )
  })
  const sortedFollowerList = state.sortedFollowers.map(item => {
    return (
      <li>
        {item.balance} + {item.id} + Resolve to ENS
      </li>
    )
  })
  const FollowersList = () => {
    if (state.isFollower) {
      return <ol>{sortedFollowerList}</ol>
    }
    return <p>Join the flock to see who's following</p>
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
                <h5>DAI coffer</h5>
                <ActiveDAI>
                  <h3>{state.totalDAI.toFixed(0)} DAI</h3>
                  <h4>
                    {(state.totalDAI * compoundRate).toFixed(2)} DAI a year
                  </h4>
                </ActiveDAI>
              </Stats>
            </div>
          </Profile>

          <Grantees>{granteeList}</Grantees>
          <Followers>
            <FollowersList></FollowersList>
          </Followers>
        </LeftSide>

        <RightSide>
          <DappyWidget>
            <img src={hat} />
            <h3>Join Kevin's flock</h3>
            <p>
              Support Kevin’s selected causes with interest your DAI generates.
            </p>
            <Button>Activate 40 DAI to Enter</Button>
          </DappyWidget>
        </RightSide>
      </Grid>
      <BackgroundColor></BackgroundColor>
    </div>
  )
}

export default Flock
