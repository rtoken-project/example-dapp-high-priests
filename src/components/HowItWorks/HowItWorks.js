import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import heroBackground from "../../images/heroBackground.png"
import arrowFirst from "../../images/arrow-first.svg"
import arrowSecond from "../../images/arrow-second.svg"
import arrowThird from "../../images/arrow-third.svg"

import firstHowItWorks from "../../images/howitworks_1.png"
import secondHowItWorksSmall from "../../images/howitworks_2_small.png"
import secondHowItWorksBig from "../../images/howitworks_2_big.png"
import secondHowItWorksRealSmall from "../../images/howitworks_2_real_1.png"
import secondHowItWorksRealBig from "../../images/howitworks_2_real_2.png"

import thirdHowItWorks from "../../images/howitworks_3.png"

import rdai from "../../images/rdai.svg"
import compound from "../../images/compound.svg"
import dzx from "../../images/dzx.svg"
import dydx from "../../images/dydx.svg"

import givingBlock from "../../images/giving-block.png"

import bottomForest from "../../images/bottomForest.png"
import "../fonts.css"

const Hero = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: "roobert_bold", sans-serif;
    letter-spacing: -0.3px;
    padding-top: 60px;
    font-size: 70px;
    text-align: center;
    padding-bottom: 80px;
    margin: 0 auto;
    color: #0c2075;

    span {
      background: -webkit-linear-gradient(45deg, #ec735d, #9945be);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 960px) {
      font-size: 48px;
      padding-top: 40px;
      padding-bottom: 60px;
    }
  }
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 40px;
  padding: 40px;
  background-color: #fdeee8;
  margin-bottom: 70px;

  @media (max-width: 960px) {
    flex-direction: column;
    border-radius: 30px;
    padding: 10px;
  }
`

const CtaLink = styled(Link)`
  margin-top: 30px;
  font-family: "roobert_semibold", sans-serif;
  font-size: 22px;
  display: flex;
  text-decoration: none;
  letter-spacing: -0.2px;
  transition: all 0.2s ease;

  @media (max-width: 960px) {
    font-size: 16px;
    margin-top: 0px;
    display: inline-flex;
  }

  img {
    margin-right: 8px;
    margin-top: 4px;
  }

  &:hover img {
    transform: translateX(4px);
    transition: all 0.2s ease;
  }
`

const Text = styled.div`
  margin-left: 40px;

  @media (max-width: 960px) {
    text-align: center;
  }

  h2 {
    font-family: "roobert_semibold", sans-serif;
    letter-spacing: -0.2px;
    font-size: 48px;
    max-width: 75%;

    @media (max-width: 960px) {
      padding-top: 40px;
      font-size: 32px;
      max-width: 80%;
      margin: 0 auto 20px;
    }
  }

  p {
    opacity: 0.7;
    font-family: "roobert_medium", sans-serif;
    font-size: 24px;
    max-width: 440px;
    line-height: 1.3;

    @media (max-width: 960px) {
      font-size: 16px;
      margin-bottom: 15px;
      margin: 0 auto;
    }
  }

  a {
    color: #0e1b49;
    font-family: "roobert_semibold", sans-serif;
    @media (max-width: 960px) {
      margin-top: 20px;
    }
  }

  @media (max-width: 960px) {
    margin-left: 0;
  }
`

const Image = styled.div`
  display: block;
  height: 500px;
  min-width: 540px;
  width: 540px;
  border-radius: 30px;
  background-color: transparent;
  overflow: hidden;

  @media (max-width: 960px) {
    min-width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 20px;
    margin-top: 30px;
  }
`

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f29065;
  min-height: 100%;
  position: relative;

  @media (max-width: 960px) {
    text-align: center;
    height: auto;
  }

  .top {
    min-height: 50%;
    overflow: hidden;
    max-height: 300px;
    min-height: 230px;

    @media (max-width: 960px) {
      min-height: 0;
    }
  }

  .first-picture {
    min-width: 102%;
    margin-bottom: 0;
  }

  .bottom {
    min-height: 40%;
    padding: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #f29065;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 960px) {
      position: relative;
      min-height: 200px;
    }

    .protocols {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      @media (max-width: 960px) {
        padding: 0;
      }
    }

    a {
      font-family: "roobert_semibold", sans-serif;
      text-decoration: none;
      background-color: #ffdfd1;
      width: 140px;
      height: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      transition: all 0.2s ease;

      &:last-child {
        @media (max-width: 960px) {
          margin-right: 0;
        }
      }

      @media (max-width: 960px) {
        margin-right: 10px;
      }

      &:hover {
        box-shadow: 0px 12px 25px -10px rgb(189, 104, 68);
        transition: all 0.2s ease;
        transform: translateY(-3px);
      }

      &:active {
        box-shadow: 0px 12px 20px -7px rgb(189, 104, 68);
        transition: all 0.2s ease;
        transform: translateY(-3px) scale(0.97);
      }

      img {
        margin: 0;
        @media (max-width: 960px) {
          transform: scale(0.8);
        }
      }
    }

    a.protocol.rdai {
      margin: -30px auto 0 auto;
    }

    p {
      font-family: "roobert_medium", sans-serif;
      text-align: center;
      color: #59240d;
      font-size: 16px;
      max-width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 960px) {
    min-width: 100%;
    height: auto;
    border-radius: 20px;
  }
`

const SecondSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  min-height: 100%;
  position: relative;
  height: 500px;
  position: relative;

  @media (max-width: 960px) {
    height: auto;
    margin-top: 30px;
  }

  div {
    min-width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left {
    margin-right: 15px;
  }

  .right {
    margin-left: 15px;
  }

  .top-tree {
    margin-bottom: 10px;
  }

  .bottom-tree {
    margin-top: 10px;
  }

  .giving-block {
    @media (max-width: 960px) {
      min-height: 110px;
    }

    img {
      max-width: 50%;
    }
  }

  .price-container {
    position: absolute;
    z-index: 999;
    width: 50px;
    min-width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ffffff 0%, #c8d2fb 100%);
    border-radius: 35px;
    bottom: 15px;
    right: 15px;

    h5 {
      margin: 0;
      font-family: "roobert_semibold", sans-serif;
      font-size: 14px;
    }
  }

  a.price-container.learn-more {
    width: 110px;
    color: white;
    background: #0d1b48;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  a.price-container.learn-more:hover {
    box-shadow: 0px 12px 25px -10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    transform: translateY(-1px);
  }

  .big-tree,
  .small-tree {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #bfcbfc;

    img {
      min-width: 50%;
      width: 110%;
      @media (max-width: 960px) {
        margin-bottom: 0;
      }
    }
  }

  .big-tree {
    height: 320px;

    @media (max-width: 960px) {
      height: auto;
      margin-bottom: 30px;
    }
  }

  .small-tree {
    height: 140px;

    @media (max-width: 960px) {
      height: auto;
      margin-bottom: 30px;
    }
  }
`

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const HeroSection = () => (
  <Hero>
    <h1>
      <span>Magic</span> powering rTrees
    </h1>
  </Hero>
)

export const CtaSection = () => (
  <Hero>
    <CtaLink
      to="/"
      style={{
        color: `#0E1B49`,
      }}
    >
      <h1>Start planting</h1>
    </CtaLink>
  </Hero>
)

export const FeaturesSection = () => (
  <Container>
    <Feature>
      <Text
        style={{
          color: `#3C1809`,
        }}
      >
        <h2>Your DAI generates interest</h2>
        <p>
          You always own your DAI, and you can stop donating at any time. Only
          the interest is used.
        </p>
        <CtaLink
          to="/"
          style={{
            color: `#3C1809`,
          }}
        >
          <img src={arrowFirst} />
          Start planting
        </CtaLink>
      </Text>

      <Image>
        <FirstSection>
          <div className="top">
            <img className="first-picture" src={firstHowItWorks} />
          </div>
          <div className="bottom">
            <a
              className="protocol rdai"
              href="https://rdai.money/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rdai} />
            </a>
            <p>
              rDai activates your idle DAI to earn interest, and automatically
              sends the interest to other addresses (such as a charity). All
              this without ever leaving your wallet.
            </p>
            <div className="protocols">
              <a
                className="protocol"
                href="https://compound.finance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={compound} />
              </a>
            </div>
          </div>
        </FirstSection>
      </Image>
    </Feature>

    <Feature
      style={{
        backgroundColor: `#E7ECFE`,
      }}
    >
      <Text
        style={{
          color: `#0E1B49`,
        }}
      >
        <h2>The interest is used to plant real trees</h2>
        <p
          style={{
            color: `#515B7D`,
            opacity: `1`,
          }}
        >
          We send the interest directly to{" "}
          <a
            href="https://trees.org/?utm_source=Rtrees&utm_medium=app&utm_campaign=crypto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trees for the Future
          </a>
          , made possible by{" "}
          <a
            href="https://www.thegivingblock.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Giving Block
          </a>
          . 98% of the interest donated to plant trees.
        </p>
        <CtaLink
          to="/"
          style={{
            color: `#0E1B49`,
          }}
        >
          <img src={arrowSecond} />
          Start planting
        </CtaLink>
      </Text>

      <Image>
        <SecondSection>
          <div className="left">
            <div className="big-tree top-tree">
              <div className="price-container">
                <h5>$0.68</h5>
              </div>
              <img src={secondHowItWorksBig} />
            </div>
            <div className="small-tree bottom-tree">
              <div className="price-container">
                <h5>$0.15</h5>
              </div>
              <img src={secondHowItWorksRealSmall} />
            </div>
          </div>
          <div className="right">
            <div className="small-tree top-tree giving-block">
              <a
                href="https://www.thegivingblock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="price-container learn-more"
              >
                <h5>Learn more</h5>
              </a>
              <img src={givingBlock} />
            </div>
            <div className="big-tree bottom-tree">
              <div className="price-container">
                <h5>$0.12</h5>
              </div>
              <img src={secondHowItWorksRealBig} />
            </div>
          </div>
        </SecondSection>
      </Image>
    </Feature>

    <Feature
      style={{
        backgroundColor: `#E7F5FC`,
      }}
    >
      <Text
        style={{
          color: `#093348`,
        }}
      >
        <h2>See your progress, and use power-ups to plant faster</h2>
        <p>Who has the biggest green-thumb?</p>
        <CtaLink
          to="/"
          style={{
            color: `#093348`,
          }}
        >
          <img src={arrowThird} />
          Start planting
        </CtaLink>
      </Text>

      <Image>
        <img src={thirdHowItWorks} />
      </Image>
    </Feature>
  </Container>
)

export const HowItWorks = () => (
  <Container>
    <HeroSection />
    <FeaturesSection />
    <CtaSection />
  </Container>
)
