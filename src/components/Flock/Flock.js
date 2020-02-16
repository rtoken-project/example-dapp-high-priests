import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Tribute from "tribute-utils"
import Loadable from "react-loadable"
import RTokenAnalytics from "rtoken-analytics"
var CryptoJS = require("crypto-js")
import { navigate } from "gatsby"
import { Context } from "../context"

import hat from '../../images/hat.svg';



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



const Avatar = styled.div`
  width: 100px;
  margin-right: 20px;
  height: 100px;
  border-radius:100%;
  background-size: cover;
  background-color: red;
`

const DappyWidget = styled.div`
  width: 310px;
  margin-left: auto;
  height: 400px;
  background: linear-gradient(198.2deg, #FFD765 1.54%, #F7C444 89.85%);
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

const H5 = styled.h5 `
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
 background-color: #1F2240;
 border-radius: 12px;
 height: 175px;


  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 24px;
    color: white;
    max-width: 60%;
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
  background-color: #0E0F20;
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

  const [state, setState] = useState({})

  const loadDetails = async () => {
    // load stuff
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
          <Profile>

            <div>
              <Avatar></Avatar>
              <h2>Kevin <br/>Owocki</h2>
            </div>

            <div>
              <Stats>
                <h5>Active DAI</h5>
                <ActiveDAI>
                  <h3>$210.22</h3>
                  <h4>/ $0.001</h4>
                </ActiveDAI>
              </Stats>
            </div>     
          </Profile>


          <H5>Supporting three projects</H5>

          <Grantees>
            <Grantee>
              <h4>Tornado Cash</h4>
              <AquiredDai>
                <p>Aquired DAI</p>
                <h5>$21.22 DAI</h5>
              </AquiredDai>
            </Grantee>
            <Grantee>
              <h4>Tornado Cash</h4>
              <AquiredDai>
                <p>Aquired DAI</p>
                <h5>$21.22 DAI</h5>
              </AquiredDai>
            </Grantee>
            <Grantee>
              <h4>Tornado Cash</h4>
              <AquiredDai>
                <p>Aquired DAI</p>
                <h5>$21.22 DAI</h5>
              </AquiredDai>
            </Grantee>
          </Grantees>

          <Followers>
            <p>Join the flock to see who's following</p>
          </Followers>
          

        </LeftSide>

        <RightSide>

          <DappyWidget>
            <img src={hat} />
            <h3>Join Kevin's flock</h3>
            <p>Support Kevin’s selected causes with interest your DAI generates.</p>
            <Button>Activate $40 DAI to Enter</Button>

            
          
        
          </DappyWidget>


        </RightSide>


      </Grid>
      <BackgroundColor></BackgroundColor>
    </div>


  )
  
}

export default Flock
