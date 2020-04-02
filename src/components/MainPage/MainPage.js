import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

import SmallCard from "./SmallCard"
import LargeCard from "./LargeCard"

import { priestList } from "../../data"
import "../fonts.css"

const API_URL = "https://api.rdai.money"
const FEATURED_PRIESTS = [75, 131, 79]

const H1 = styled.h1`
  font-family: "roobert_bold", sans-serif;
  letter-spacing: -0.2px;
  line-height: 1;
  font-size: 64px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: white;

  @media (max-width: 500px) {
    font-size: 36px;
    padding-top: 40px;
  }
`

const P = styled.p`
  font-family: "roobert_medium", sans-serif;
  font-size: 22px;
  max-width: 600px;
  margin: 15px auto 15px;
  line-height: 1.3;
  opacity: 0.7;
  color: white;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const Container = styled.section`
  text-align: center;
  position: relative;
  z-index: 999;

  @media (max-width: 500px) {
    padding-bottom: 60px;
  }
`

const StarterContainer = styled.div`
  min-height: 367px;
`
const Tabs = styled.div`
  width: 100%;
  max-width: 980px;
  margin: auto;
  display: flex;
  justify-content: space-between
  font-weight: 800px;
  color: white;
  h3 {
    margin-top:0;
    margin-bottom: 8px;
  }
  h5 {
    margin-bottom: 10px;
  }
`

const RightTab = styled.div`
  margin-left: auto;
  margin-bottom: 15px;
  padding-bottom: 0px;
  cursor: pointer;
  text-align: right;

  h5 {
    text-align: right;
  }
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid yellow;
  `}
`
const LeftTab = styled.div`
  margin-right: auto;
  margin-bottom: 15px;
  padding-bottom: 0px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid yellow;
  `}
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
  }
`

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`

const MainPage = () => {
  // const [context, setContext] = useContext(Context)

  const [state, setState] = useState({
    topPriests: [],
    lowerPriests: [],
    localPriestList: [],
    isLeaderboard: false,
  })

  const getTopPriests = (priests, rankByFeatured) => {
    let topPriests = priests
    if (rankByFeatured) {
      topPriests = priests.filter(
        item =>
          item.hatID === FEATURED_PRIESTS[0] ||
          item.hatID === FEATURED_PRIESTS[1] ||
          item.hatID === FEATURED_PRIESTS[2]
      )
    } else {
      topPriests = [priests[2], priests[0], priests[1]]
    }
    topPriests[0].backgroundColor =
      "linear-gradient(198.2deg, #FFD765 1.54%, #F7C444 89.85%)"
    topPriests[1].backgroundColor =
      "linear-gradient(198.2deg, #E65676 1.54%, #DB4967 89.85%)"
    topPriests[2].backgroundColor =
      "linear-gradient(198.2deg, #7E58F5 1.54%, #6A36F4 89.85%)"
    return topPriests
  }

  const getLowerPriests = (priests, topPriests) => {
    return priests.filter(item => {
      return (
        item.hatID !== topPriests[0].hatID &&
        item.hatID !== topPriests[1].hatID &&
        item.hatID !== topPriests[2].hatID
      )
    })
  }

  const loadDetails = async () => {
    // check URL for priest hat ID
    try {
      if (typeof window !== "undefined") {
        // load stuff
        const hats = priestList.map(item => item.hatID)
        const localPriestList = [...priestList]
        localPriestList.sort((a, b) => a.hatID - b.hatID)
        hats.forEach(async hatID => {
          const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
          const { data } = await axios.get(url)
          let totalDAI = 0
          let followerCount = 0
          if (typeof data !== "undefined") {
            totalDAI = data.accounts.reduce((a, b) => a + Number(b.balance), 0)
            followerCount = data.accounts.reduce(a => a + 1, 0)
          }
          localPriestList.find(item => item.hatID === hatID).totalDAI = totalDAI
          localPriestList.find(
            item => item.hatID === hatID
          ).followerCount = followerCount
        })
        const topPriests = getTopPriests(localPriestList, true)
        const lowerPriests = getLowerPriests(localPriestList, topPriests)
        setState({
          ...state,
          localPriestList,
          topPriests,
          lowerPriests,
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

  function setLeaderboard(sortByAmount) {
    const { localPriestList } = state
    let topPriests = getTopPriests(localPriestList, true)
    if (sortByAmount) {
      localPriestList.sort(
        (a, b) => b.totalDAI + b.followerCount - a.totalDAI - a.followerCount
      )
      topPriests = getTopPriests(localPriestList, false)
    } else {
      localPriestList.sort((a, b) => a.hatID - b.hatID)
    }
    const lowerPriests = getLowerPriests(localPriestList, topPriests)
    setState({
      ...state,
      topPriests,
      lowerPriests,
      isLeaderboard: sortByAmount,
    })
  }

  const cardMap = state.topPriests.map((item, index) => (
    <LargeCard
      key={("large-card", item, index)}
      index={index}
      details={item}
      isLeaderboard={state.isLeaderboard}
    />
  ))

  const smallCardMap = state.lowerPriests.map(item => (
    <SmallCard
      key={("small-card", item.name)}
      details={item}
      isLeaderboard={state.isLeaderboard}
    />
  ))

  return (
    <Container>
      <H1>Support Web3 with spendless social giving</H1>
      <P>
        Donate your generated DAI interest to sustain open source projects
        chosen by Ethereum community luminaries.
        <br />
        Stop donating at any time.
      </P>
      <StarterContainer>
        <Tabs>
          <LeftTab
            active={!state.isLeaderboard}
            onClick={() => setLeaderboard(false)}
          >
            <h5>High Priests</h5>
            <h3>Profiles</h3>
          </LeftTab>
          <RightTab
            active={state.isLeaderboard}
            onClick={() => setLeaderboard(true)}
          >
            <h5>Largest Coffers</h5>
            <h3>Leaderboard</h3>
          </RightTab>
        </Tabs>
        <CardContainer>{cardMap}</CardContainer>
        <SmallCardContainer>{smallCardMap}</SmallCardContainer>
      </StarterContainer>
    </Container>
  )
}

export default MainPage
