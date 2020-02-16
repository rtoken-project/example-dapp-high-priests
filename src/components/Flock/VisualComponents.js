import React, { useContext, useEffect, useState } from "react"
import hat from "../../images/hat.svg"
import styled from "styled-components"

export const InitialContainer = styled.div`
  width: 310px;
  margin-left: auto;
  height: 400px;
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

export const InitialNonFollower = ({ onSubmit, firstName, amountDAI }) => {
  return (
    <InitialContainer>
      <img src={hat} />
      <h3>Join {firstName}'s flock</h3>
      <p>
        Support {firstName}’s selected causes with interest your DAI generates.
      </p>
      <Button onClick={() => onSubmit(amountDAI)}>
        Activate 40 DAI to Enter
      </Button>
    </InitialContainer>
  )
}
