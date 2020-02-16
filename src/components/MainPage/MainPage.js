import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { priestList, projectList } from "../../data"
import "../fonts.css"
const API_URL = "https://api.rdai.money"
import axios from "axios"

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
  max-width: 550px;
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
`

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`

const Card = styled.div`
  margin: 10px;
  width: 310px;
  background: white;
  border-radius: 1em;
  box-shadow: 0px 0px 15px #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  background: ${props => props.backgroundColor};
`

const SmallCard = styled.div`
  margin: 10px;
  width: 228px;
  background: white;
  border-radius: 1em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  background: #1f2240;
`

const CardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  font-family: "roobert_medium", sans-serif;
  text-align: left;
  margin: 14px 0 0 0;
`

const SmallCardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 80%;
  font-family: "roobert_medium", sans-serif;
  text-align: left;
`

const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const CardDetail = styled.div`
  padding: 12px 0px;
  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 16px;
    opacity: 1;
    margin-bottom: 3px;
    text-align: left;
  }

  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 16px;
    opacity: 0.7;
    margin-bottom: 8px;
    text-align: left;
  }
`
const StatList = styled.div`
  padding: 8px 0px;
  margin-top: 2px;
`
const LogoList = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 0.8em;
  margin-left: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 40px;
  vertical-align: middle;

  img {
    width: 38px;
    margin-right: 8px;
    vertical-align: middle;
  }
`

const SmallCardDetail = styled.div`
  padding-right: 15px;
  font-family: "roobert_medium", sans-serif !important;

  &:last-child {
    padding-right: 0;
  }

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 14px;
    opacity: 1;
    margin-bottom: 0;
    text-align: left;
  }

  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 8px;
    text-align: left;
  }
`

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  border-radius: 100%;
  background-size: cover;
`

const SmallAvatar = styled.div`
  width: 60px;
  height: 60px;
  margin: 0;
  border-radius: 100%;
  margin-bottom: 20px;
  background-size: cover;
`

const ProjectList = styled.div`
  font-size: 0.7em;
  text-align: left;
  padding: 1.8em 0;
`

const TextLink = styled(Link)`
  text-decoration: none;
  color: #ad90ff;
  font-weight: 800;
  font-size: 0.8em;
  text-align: left;
`
const Button = styled(Link)`
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
  text-decoration: none;
  color: #000;
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
const CardInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
`

const MainPage = () => {
  //const [context, setContext] = useContext(Context)

  const [state, setState] = useState({
    topPriests: [],
    lowerPriests: [],
    localPriestList: [],
    isLeaderboard: false,
  })

  const loadDetails = async () => {
    // check URL for priest hat ID
    try {
      if (typeof window !== "undefined") {
        // load stuff
        const hats = priestList.map(item => item.hatID)
        const localPriestList = [...priestList]
        hats.forEach(async (hatID, i) => {
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

        const topPriests = localPriestList.filter(
          item => item.hatID === 72 || item.hatID === 73 || item.hatID === 79
        )
        topPriests[0].backgroundColor =
          "linear-gradient(198.2deg, #FFD765 1.54%, #F7C444 89.85%)"
        topPriests[1].backgroundColor =
          "linear-gradient(198.2deg, #E65676 1.54%, #DB4967 89.85%)"
        topPriests[2].backgroundColor =
          "linear-gradient(198.2deg, #7E58F5 1.54%, #6A36F4 89.85%)"

        const lowerPriests = localPriestList.filter(
          item => item.hatID !== 72 && item.hatID !== 73 && item.hatID !== 79
        )

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

  function setLeaderboard(value) {
    console.log(state.localPriestList)
    const { localPriestList } = state
    if (value) {
      localPriestList.sort(
        (a, b) => b.totalDAI + b.followerCount - a.totalDAI - a.followerCount
      )
    } else {
      localPriestList.sort((a, b) => a.hatID - b.hatID)
    }
    console.log(localPriestList)
    const topPriests = localPriestList.slice(0, 3)

    console.log("topPriests: ", topPriests)
    topPriests[0].backgroundColor =
      "linear-gradient(198.2deg, #FFD765 1.54%, #F7C444 89.85%)"
    topPriests[1].backgroundColor =
      "linear-gradient(198.2deg, #E65676 1.54%, #DB4967 89.85%)"
    topPriests[2].backgroundColor =
      "linear-gradient(198.2deg, #7E58F5 1.54%, #6A36F4 89.85%)"

    const lowerPriests = localPriestList.slice(3, 9)

    setState({
      ...state,
      topPriests,
      lowerPriests,
      isLeaderboard: value,
    })
  }

  const CardDetailsView = ({ item }) => {
    console.log(" Item in CardDetailsView is: ", item)
    if (state.isLeaderboard) {
      return (
        <StatList>
          <CardDetail>
            <h4>Followers</h4>
            <h3> {item.followerCount} </h3>
          </CardDetail>
          <CardDetail>
            <h4>Active DAI</h4>
            <h3>{item.totalDAI.toFixed(2)} </h3>
          </CardDetail>
        </StatList>
      )
    }
    const { projects } = item
    console.log("projectList: ", projectList)
    console.log("projects: ", projects)
    console.log("projectList[item[0]]", projectList[projects[0]])
    return (
      <LogoList>
        <li>
          <img src={require(`../../images/logos/${projects[0]}.png`)} />{" "}
          {projectList[projects[0]].name}{" "}
        </li>
        <li>
          <img src={require(`../../images/logos/${projects[1]}.png`)} />{" "}
          {projectList[projects[1]].name}{" "}
        </li>
        <li>
          <img src={require(`../../images/logos/${projects[2]}.png`)} />{" "}
          {projectList[projects[2]].name}{" "}
        </li>
      </LogoList>
    )
  }
  const SmallCardDetailsView = ({ item }) => {
    if (state.isLeaderboard) {
      return (
        <CardDetails>
          <SmallCardDetail>
            <h4>Followers</h4>
            <h3> {item.followerCount} </h3>
          </SmallCardDetail>
          <SmallCardDetail>
            <h4>Active DAI</h4>
            <h3>{item.totalDAI.toFixed(2)} </h3>
          </SmallCardDetail>
        </CardDetails>
      )
    }
    const { projects } = item
    return (
      <ProjectList>
        <span>
          {projectList[projects[0]].name} {"  "}
          {projectList[projects[1]].name}
          {"  "}
          {projectList[projects[2]].name}
        </span>
      </ProjectList>
    )
  }
  const cardMap = state.topPriests.map(item => {
    return (
      <Card backgroundColor={item.backgroundColor}>
        <CardInfo>
          <Avatar
            style={{
              backgroundImage: `url(${require(`../../images/${item.avatar}`)})`,
            }}
          />
          <CardTitle>{item.name}</CardTitle>
          <CardDetailsView item={item}></CardDetailsView>
        </CardInfo>
        <Button to={`/flock/?hatID=${item.hatID}`}>Join the flock</Button>
      </Card>
    )
  })

  const smallCardMap = state.lowerPriests.map(item => {
    return (
      <SmallCard>
        <CardInfo>
          <SmallAvatar
            style={{
              backgroundImage: `url(${require("../../images/" + item.avatar)})`,
            }}
          />
          <SmallCardTitle>{item.name}</SmallCardTitle>
          <SmallCardDetailsView item={item}></SmallCardDetailsView>
          <TextLink to={`/flock/?hatID=${item.hatID}`}>Join the flock</TextLink>
        </CardInfo>
      </SmallCard>
    )
  })

  return (
    <Container>
      <H1>Donate towards causes these people support</H1>
      <P>
        Donate your generated DAI interest towards projects chosen by community
        leaders.
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
