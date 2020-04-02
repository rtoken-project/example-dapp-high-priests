import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import Avatar from "../common/Avatar"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
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
  margin-left: 30px;

  h5 {
    font-family: "roobert_medium", sans-serif;
    color: white;
    opacity: 0.6;
    margin-bottom: 12px;
    font-size: 18px;
  }
`

const Profile = ({ firstName, lastName, totalDAI, compoundRate, avatar }) => {
  if (totalDAI === 0)
    return (
      <SkeletonTheme color="rgb(31, 34, 64)" highlightColor="#493E74">
        <Container>
          <div>
            <Skeleton circle width={100} height={100} />
            <Skeleton width={200} height={74} />
          </div>
          <div>
            <Stats>
              <h5>Coffers</h5>
              <ActiveDAI>
                <h3>
                  <Skeleton width={100} height={35} /> DAI
                </h3>
              </ActiveDAI>
            </Stats>
            <Stats>
              <h5>Generating</h5>
              <ActiveDAI>
                <h3>
                  <Skeleton width={100} height={35} /> DAI
                </h3>
                <h4>per year</h4>
              </ActiveDAI>
            </Stats>
          </div>
        </Container>
      </SkeletonTheme>
    )
  return (
    <Container>
      <div>
        <Avatar image={avatar} />
        <h2>
          {firstName} <br />
          {lastName}
        </h2>
      </div>

      <div>
        <Stats>
          <h5>Coffers</h5>
          <ActiveDAI>
            <h3>{totalDAI.toFixed(0)} DAI</h3>
          </ActiveDAI>
        </Stats>
        <Stats>
          <h5>Generating</h5>
          <ActiveDAI>
            <h3>{(totalDAI * compoundRate).toFixed(2)} DAI</h3>
            <h4>per year</h4>
          </ActiveDAI>
        </Stats>
      </div>
    </Container>
  )
}
export default Profile
