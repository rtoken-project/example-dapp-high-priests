import React, { useContext, useEffect, useState } from "react"
import hat from "../../images/hat.svg"
import styled from "styled-components"
import { Link } from "gatsby"

export const InitialContainer = styled.div`
  width: 313px;
  margin-left: auto;
  height: 404px;
  background: linear-gradient(198.2deg, #ffd765 1.54%, #f7c444 89.85%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
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
const FollowerButton = styled.div`
  margin: 25px 10px 0px 10px;
  font-family: "roobert_bold", sans-serif;
  display: block;
  font-size: 16px;
  background-color: #ffd663;
  color: #000000;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
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

const StopButton = styled(Link)`
  font-family: "roobert", sans-serif;
  font-size: 16px;
  height: 54px;
  color: white;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const FollowerContainer = styled(InitialContainer)`
  background: #1f2240;
  width: 313px;
  margin-left: auto;
  height: 404px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  h3 {
    margin-top: 40px;
    font-family: "roobert_medium", sans-serif;
    font-size: 32px;
    color: white;
  }
  h4 {
    margin: 0px;
    font-family: "roobert_medium", sans-serif;
    font-size: 32px;
    color: white;
  }

  p {
    font-family: "roobert", sans-serif;
    font-size: 16px;
    color: white;
    margin: 0px;
  }
`

export const InitialNonFollower = ({ onSubmit, firstName, amountDAI }) => {
  return (
    <InitialContainer>
      <img src={hat} />
      <h3>Join {firstName}'s flock</h3>
      <p>
        Make a spendless offering to {firstName}'s recipients using the interest
        your DAI generates
      </p>
      <Button onClick={() => onSubmit(amountDAI)}>
        Activate 40 DAI to join
      </Button>
    </InitialContainer>
  )
}
export const InitialFollower = ({
  onSubmit,
  onSubmitStop,
  amountGenerated,
  amountActive,
  amountDAI,
}) => {
  return (
    <FollowerContainer>
      <h3>You are in the flock</h3>
      <p>Your offering</p>
      <h4>{Number(amountActive).toFixed(0)} DAI</h4>
      <FollowerButton onClick={() => onSubmit(amountDAI)}>
        Activate {amountDAI} more DAI
      </FollowerButton>
      <StopButton to="/stop">Stop Donating</StopButton>
    </FollowerContainer>
  )
}
