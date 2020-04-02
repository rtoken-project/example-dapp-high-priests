import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { projectList } from "../../data"

const Container = styled.div`
  margin: 10px;
  width: 228px;
  background: white;
  border-radius: 1em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  min-height: 300px;
  background: #1f2240;
  @media only screen and (max-device-width: 700px) {
    width: 100%;
  }
`
const SmallCardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 80%;
  font-family: "roobert_medium", sans-serif;
  text-align: left;
`

const CardInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
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
  font-size: 18px;
  text-align: left;
  padding: 1.8em 0;
  font-family: "roobert_medium", sans-serif;

  h5 {
    font-size: 13px;
    opacity: 0.8;
    margin-bottom: 12px;
    margin-top: 0px;
    text-shadow: none;
  }
`
const TextLink = styled(Link)`
  text-decoration: none;
  color: #ad90ff;
  font-weight: 800;
  font-size: 0.8em;
  font-family: "roobert_bold", sans-serif;
  text-align: left;
`

const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const SmallCardDetail = styled.div`
  padding-right: 15px;
  font-family: "roobert_medium", sans-serif !important;
  margin: 15px 0;
  &:last-child {
    padding-right: 0;
  }

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 18px;
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

const SmallCard = ({ details, isLeaderboard }) => {
  const getDetails = item => {
    if (isLeaderboard) {
      return (
        <CardDetails>
          <SmallCardDetail>
            <h4>Coffers</h4>
            <h3>
              {typeof item.totalDAI === "number" && item.totalDAI.toFixed(0)}{" "}
              DAI
            </h3>
          </SmallCardDetail>
          <SmallCardDetail>
            <h4>Followers</h4>
            <h3> {item.followerCount} </h3>
          </SmallCardDetail>
        </CardDetails>
      )
    }
    const { projects } = item
    return (
      <ProjectList>
        <h5>Evangelizing for</h5>
        <span>
          {projectList[projects[0]].name}
          <br />
          {projectList[projects[1]].name}
          <br />
          {projectList[projects[2]].name}
        </span>
      </ProjectList>
    )
  }

  return (
    <Container>
      <CardInfo>
        <SmallAvatar
          style={{
            backgroundImage: `url(${require(`../../images/${details.avatar}`)})`,
          }}
        />
        <SmallCardTitle>{details.name}</SmallCardTitle>
        {getDetails(details)}
        <TextLink to={`/flock/?hatID=${details.hatID}`}>
          Join the flock
        </TextLink>
      </CardInfo>
    </Container>
  )
}
export default SmallCard
