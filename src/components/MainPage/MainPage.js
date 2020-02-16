import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import vitalik from '../../images/vitalik.png';

import "../fonts.css"

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

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`



const Card = styled.div`
  margin: 1em;
  width: 310px;
  background: white;
  border-radius: 1em;
  box-shadow: 0px 0px 15px #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  background: ${props => props.backgroundColor };
`

const SmallCard = styled.div`
  margin: 1em;
  width: 230px;
  background: white;
  border-radius: 1em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  background: #1F2240;
`


const CardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 50%;
  font-family: "roobert_medium", sans-serif;
  text-align: left;
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

  padding-right: 30px;

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 16px;
    opacity: 1;
    margin-bottom: 0;
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


const SmallCardDetail = styled.div`

  padding-right: 15px;

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
  border-radius:100%;
  background-size: cover;
`

const SmallAvatar = styled.div`
  width: 60px;
  height: 60px;
  margin: 0;
  border-radius:100%;
  margin-bottom: 20px;
  background-size: cover;
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

const CardInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
  color: white;
`

const PriestList = [
  {
    name: "Kevin Owocki",
    avatar: "kevin.png",
    followers: "18",
    activeDAI: "200.21 / 0.001",
    backgroundColor: "linear-gradient(198.2deg, #FFD765 1.54%, #F7C444 89.85%)",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Meta Cartel",
    avatar: "metacartel.png",
    followers: "21",
    activeDAI: "50.22 / 0.002",
    backgroundColor: "linear-gradient(198.2deg, #E65676 1.54%, #DB4967 89.85%)",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Kevin Owocki",
    avatar: "andrew.png",
    followers: "21",
    activeDAI: "10.91 / 0.001",
    backgroundColor: "linear-gradient(198.2deg, #7E58F5 1.54%, #6A36F4 89.85%)",
    projects: ["rdai", "tornado", "moloch"]
  }
]

const PriestListOutside = [
  {
    name: "Kevin Owocki",
    avatar: "kevin.png",
    followers: "18",
    activeDAI: "200.21 / 0.001",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Meta Cartel",
    avatar: "metacartel.png",
    followers: "21",
    activeDAI: "50.22 / 0.002",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Kevin Owocki",
    avatar: "andrew.png",
    followers: "21",
    activeDAI: "10.91 / 0.001",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Kevin Owocki",
    avatar: "andrew.png",
    followers: "21",
    activeDAI: "10.91 / 0.001",
    projects: ["rdai", "tornado", "moloch"]
  }
]

const cardMap = PriestList.map(item => {
  return(
    <Card backgroundColor={ item.backgroundColor }>
      <CardInfo>
        <Avatar
          style={{ backgroundImage: `url(${require("../../images/" + item.avatar)})` }}
        />
        <CardTitle>{ item.name }</CardTitle>
        <CardDetails>
          <CardDetail>
            <h4>Followers</h4>
            <h3> { item.followers } </h3>
          </CardDetail>
          <CardDetail>
            <h4>Active DAI</h4>
            <h3>{ item.activeDAI } </h3>
          </CardDetail>
        </CardDetails>
      </CardInfo>
      <Button>Join the club</Button>
    </Card>
  )
})


const smallCardMap = PriestListOutside.map(item => {
  return(
    <SmallCard>
      <CardInfo>
        <SmallAvatar
          style={{ backgroundImage: `url(${require("../../images/" + item.avatar)})` }}
        />
        <SmallCardTitle>{ item.name }</SmallCardTitle>
        <CardDetails>
          <SmallCardDetail>
            <h4>Followers</h4>
            <h3> { item.followers } </h3>
          </SmallCardDetail>
          <SmallCardDetail>
            <h4>Active DAI</h4>
            <h3>{ item.activeDAI } </h3>
          </SmallCardDetail>
        </CardDetails>
      </CardInfo>
    </SmallCard>
  )
})

const MainPage = () => {
  const updateStats = async () => {
    // do stuff
  }

  useEffect(() => {
    updateStats()
  }, [])

  return (
    <Container>
      <H1>Donate towards causes these people support</H1>
      <P>
        Donate your generated DAI interest towards projects chosen by community leaders.
        Stop donating at any time.
      </P>
      <StarterContainer>
        <CardContainer>
          { cardMap }
        </CardContainer>
        <SmallCardContainer>
          { smallCardMap }
        </SmallCardContainer>
      </StarterContainer>
    </Container>
  )
}

export default MainPage
