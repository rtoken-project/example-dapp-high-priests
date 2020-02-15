import React, { PropTypes, useState } from "react"
import styled from "styled-components"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import "../../fonts.css"

const EmojiContainer = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  padding-top: 5px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;
  margin-right: 10px;
  overflow: hidden;
`

const PowerUp = styled.div`
  width: 100%;
  display: flex;
  background-color: red;
  margin-bottom: 20px;
  border-radius: 100px;
  padding: 10px;
  position: relative;

  h3 {
    font-size: 22px;
    margin: 6px 0 0 0;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 18px;
      padding-top: 4px;
    }
  }

  h5 {
    font-size: 14px;
    position: relative;
    margin: 6px 25px 0 0;
    padding: 0;
    opacity: 0.9;
    display: inline-flex;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  h5:nth-child(3)::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 3px;
    position: absolute;
    left: -15px;
    top: 4px;
    display: block;
    background-color: black;
    opacity: 0.2;
  }

  button {
    font-family: "roobert_medium";
    font-size: 18px;
    font-weight: 700;
    color: white;
    max-height: 60px;
    border: 0;
    border-radius: 50px;
    align-self: center;
    margin-left: auto;
    padding: 10px 16px 8px 16px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    transition: all 0.2s ease;

    @media (max-width: 500px) {
      font-size: 14px;
      width: 140px;
    }

    &.loading {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 7px;
    }

    &:hover {
      stroke: 0;
      outline: 0;
      transform: translateY(-2px);
      transition: transform 0.2s ease;
      cursor: pointer;
    }

    &:active {
      stroke: 0;
      outline: 0;
      transform: scale(0.98);
      transition: transform 0.2s ease;
    }

    &:focus {
      outline: 0;
    }
  }
`

const SkeletonContainer = styled.div`
  margin: -3px 5px 0px 2px;
  width: 23px;
`

const DisabledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  opacity: 0.5;
  border-radius: 100px;
  padding: 10px;
  left: 0px;
  top: 0px;
  margin-bottom: 20px;
  z-index: 10;
`

export const InitialSmall = ({
  name,
  growthRate,
  primaryColor,
  backgroundColor,
  boxShadow,
  emoji,
  buttonColor,
  buttonText,
  amountDAI,
  onSubmit,
  isDisabled,
}) => {
  const daiText =
    amountDAI > 0 ? (
      amountDAI
    ) : (
      <SkeletonContainer>
        <SkeletonTheme
          color="rgba(255, 255, 255, 0.2)"
          highlightColor="rgba(255, 255, 255, 0.3)"
        >
          <Skeleton width={23} height={20} />
        </SkeletonTheme>
      </SkeletonContainer>
    )
  return (
    <PowerUp
      style={{
        color: primaryColor,
        backgroundColor,
      }}
    >
      {isDisabled && <DisabledOverlay />}
      <EmojiContainer
        style={{
          boxShadow,
        }}
      >
        {emoji}
      </EmojiContainer>
      <div>
        <h3>{name}</h3>
        <h5>{growthRate}</h5>
      </div>
      <button
        style={{
          background: buttonColor,
          color: buttonText,
          boxShadow,
        }}
        type="button"
        onClick={() => onSubmit(amountDAI)}
      >
        Activate {daiText} DAI
      </button>
    </PowerUp>
  )
}

export const RedeemSmall = ({
  name,
  growthRate,
  primaryColor,
  backgroundColor,
  boxShadow,
  emoji,
  buttonColor,
  buttonText,
  price,
  onSubmit,
}) => {
  return (
    <PowerUp
      style={{
        color: primaryColor,
        backgroundColor,
      }}
    >
      <EmojiContainer
        style={{
          boxShadow,
        }}
      >
        {emoji}
      </EmojiContainer>
      <div>
        <h3>{name}</h3>
        <h5>{growthRate}</h5>
      </div>
      <button
        style={{
          background: buttonColor,
          color: buttonText,
          boxShadow,
        }}
        type="button"
        onClick={() => onSubmit(1)}
      >
        {price}
        <span style={{ fontSize: "16px" }}>Stop</span>
      </button>
    </PowerUp>
  )
}
