import React from "react"
import styled from "styled-components"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import "../../fonts.css"

const Column = styled.div`
  padding: 0.75rem;
  width: 100%;
  display: block;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

const StarterContainer = styled.div`
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 14px;
  background-color: transparent;
  position: relative;

  .starter-container {
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
    }
  }
  .image-container {
    @media (max-width: 720px) {
      max-height: 140px;
    }
  }
`

const DisabledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  border-radius: 14px;
  opacity: 0.5;
`

const DescriptionContainer = styled.div`
  margin-top: 15px;
  @media (max-width: 720px) {
    margin-top: 0px;
  }
`
const SkeletonContainer = styled.div`
  margin: -3px 0px 0px 2px;
  width: 23px;
`
// const Currency = styled.div`
//   display: inline-flex;
//   font-size: 32px;
//   font-family: "roobert_medium", sans-serif;
//   margin-top: 6px;
//   margin-left: 4px;
//
//   @media (max-width: 500px) {
//     padding-top: 3px;
//   }
// `

const StarterSupporter = styled.div`
  color: white;
  background-color: #f29065;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  border-radius: 14px;
  width: 200px;
  height: 340px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
  }

  img {
    height: 140px;
    width: auto;
    margin: 20px auto -40px;

    @media (max-width: 500px) {
      height: 140px;
      width: auto;
    }
  }

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    margin: 0 auto 4px;
    display: inline-flex;
    @media (max-width: 720px) {
      margin: 0 auto;
    }
  }

  .text-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
      justify-content: center;
      padding-bottom: 20px;
      margin-left: -5px;
    }
  }
`

const ButtonContainer = styled.div`
  width: 100%;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "roobert_semibold", sans-serif;
  font-size: 15px;
  width: 100%;
  text-align: center;
  color: #2b5000;
  height: 40px;
  background-color: #dfffbb;
  appearance: none !important;
  box-shadow: 0px 12px 25px -10px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  letter-spacing: -0.2;
  padding: 9px 0 7px 0;
  border-radius: 30px;
  transition: all 0.2s ease;

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center !important;
  }

  &:hover {
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: scale(1.03);
  }

  &:active {
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: scale(0.97);
  }
`

const H5 = styled.h5`
  font-family: "roobert_semibold", sans-serif;
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;


  &:last-child {
    @media (max-width: 500px) {
      padding-top: 4;
      padding-bottom: 0;
      margin-top: 4px;
  }
  @media (max-width: 500px) {

    text-align: center;
    padding-top: 4;
    padding-bottom: 0;
    margin-bottom: 10px;
  }
`

const StarterGamekeeper = styled(StarterSupporter)`
  background-color: #607df7;

  color: white;

  img {
    height: 150px;
    width: auto;
    margin: 18px auto -50px;

    @media (max-width: 500px) {
      height: 140px;
    }
  }

  div {
    span {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
`

const StarterEnt = styled(StarterSupporter)`
  background-color: #5dbeec;
  color: white;
  width: 200px;
  height: 340px;

  div {
    span {
      &:first-child {
        margin-right: 10px;
      }

      &:last-child {
        margin-left: 0;
      }
    }
  }
`

const StarterWrapper = ({ children, id }) => {
  switch (id) {
    case "supporter":
      return <StarterSupporter>{children}</StarterSupporter>
      break
    case "gamekeeper":
      return <StarterGamekeeper>{children}</StarterGamekeeper>
      break
    case "ent":
      return <StarterEnt>{children}</StarterEnt>
      break
  }
}

const InitialLarge = ({
  isDisabled,
  image,
  amountDAI,
  buttonBG,
  buttonTextColor,
  buttonShadow,
  name,
  onSubmit,
  numberOfTrees,
  id,
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
    <Column>
      <StarterContainer>
        {isDisabled && <DisabledOverlay />}
        <StarterWrapper id={id}>
          <div className="starter-container">
            <div className="image-container">
              <img src={image} />
            </div>
            <DescriptionContainer>
              <H5>Plant</H5>
              <h3>{numberOfTrees}</h3>
              <H5>trees per year</H5>
            </DescriptionContainer>
          </div>
          <ButtonContainer>
            <Button
              disabled={isDisabled}
              type="button"
              style={{
                background: buttonBG,
                color: buttonTextColor,
                boxShadow: buttonShadow,
              }}
              onClick={() => onSubmit(amountDAI)}
            >
              Activate {daiText} DAI
            </Button>
          </ButtonContainer>
        </StarterWrapper>
      </StarterContainer>
    </Column>
  )
}

export default InitialLarge
