import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { projectList } from "../../data"

const Container = styled.div`
  margin: 40px 10px;
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
  transition: all 0.3s cubic-bezier(0.64, 0.22, 0.16, 0.78);
  text-shadow: 0px 2px 2px rgba(18, 20, 39, 0.16);
  @media only screen and (max-device-width: 700px) {
    width: 100%;
    margin: 0;
  }
  &:nth-of-type(1) {
    transition: all 0.3s ease;
    margin: ${({ isLeaderboard }) => {
      if (!isLeaderboard) return "40px 10px"
      return "60px 10px 10px 10px"
    }};
  }
  &:nth-of-type(2) {
    transition: all 0.3s ease;

    margin: ${({ isLeaderboard }) => {
      if (!isLeaderboard) return "40px 10px"
      return "10px 10px 60px 10px"
    }};
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
const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  border-radius: 100%;
  background-size: cover;
`
const Position = styled.div`
  font-size: 32px;
  margin-top: 20px;
  margin-right: 5px;
  color: white;
  font-family: "roobert_medium", sans-serif;
  transition: all 0.3s ease;
  opacity: ${({ show }) => (!show ? 0 : 1)};
  position: relative;

  div {
    position: absolute;
    display: none;
    top: -50%;
    right: 0%;
    transform: translate(50% 50%);
    width: 200px;
    height: 200px;
  }

  &:hover div {
    display: ${({ showMeme }) => (showMeme ? "block" : "none")};
  }

  div span {
    position: relative;
    bottom: 50px;
    font-size: 18px;
    text-shadow: 1px 1px black;
    font-weight: 600;
  }
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
const TwitterLink = styled.a`
  text-decoration: none;
  color: white;
`

const CardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  font-family: "roobert_medium", sans-serif;
  text-align: left;
  margin: 14px 0 0 0;
`

const CardDetail = styled.div`
  padding: 12px 0px;
  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 22px;
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
  font-size: 18px;
  margin-left: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 40px;
  vertical-align: middle;

  h5 {
    font-size: 13px;
    opacity: 0.8;
    margin-bottom: 12px;
    margin-top: 16px;
    text-shadow: none;
  }

  li {
    font-family: "roobert_medium", sans-serif !important;
  }

  img {
    width: 38px;
    margin-right: 8px;
    vertical-align: middle;
  }
`
const SmallCard = ({ details, isLeaderboard, index }) => {
  const getDetails = item => {
    if (isLeaderboard) {
      return (
        <StatList>
          <CardDetail>
            <h4>Coffers</h4>
            <h3>
              {typeof item.totalDAI === "number" && item.totalDAI.toFixed(0)}{" "}
              DAI
            </h3>
          </CardDetail>
          <CardDetail>
            <h4>Followers</h4>
            <h3> {item.followerCount} </h3>
          </CardDetail>
        </StatList>
      )
    }
    const { projects } = item
    return (
      <div>
        <LogoList>
          <h5>Evangelizing for</h5>
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
      </div>
    )
  }

  return (
    <Container
      backgroundColor={details.backgroundColor}
      isLeaderboard={isLeaderboard}
    >
      <CardInfo>
        <AvatarContainer>
          <Avatar
            style={{
              backgroundImage: `url(${require(`../../images/${details.avatar}`)})`,
            }}
          />
          <Position show={isLeaderboard} showMeme={index === 1}>
            #{index || 3}
            <div>
              <img src={require(`../../images/vitalik.gif`)} />
              <span>Vitalik is impress</span>
            </div>
          </Position>
        </AvatarContainer>
        <CardTitle>
          <TwitterLink
            href={`https://twitter.com/${details.twitter}`}
            target="_blank"
          >
            {details.name}
          </TwitterLink>
        </CardTitle>
        {getDetails(details)}
      </CardInfo>
      <Button to={`/flock/?hatID=${details.hatID}`}>Join the flock</Button>
    </Container>
  )
}
export default SmallCard
