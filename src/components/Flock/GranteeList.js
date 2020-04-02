import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { projectList } from "../../data"

const Grantee = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  background-color: #1f2240;
  border-radius: 12px;
  height: 200px;
  @media only screen and (max-device-width: 700px) {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }
  h4 {
    font-family: "roobert_medium", sans-serif;
    font-size: 24px;
    color: white;
  }
  img {
    position: relative;
    right: 25px;
    top: 25px;
    z-index: 999;
    width: 50px;
    height: 50px;
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

const WebsiteLink = styled.a`
  text-decoration: none;
  color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const GranteeList = ({ projects, totalDAI, compoundRate }) => {
  const [state, setState] = useState({
    totalDAI: 0,
  })

  if (projects.length === 0)
    return [0, 1, 2].map(id => (
      <SkeletonTheme key={id} color="rgb(31, 34, 64)" highlightColor="#493E74">
        <Skeleton width={225} height={200} />
      </SkeletonTheme>
    ))
  const getName = id => {
    const item = projectList.find(item => item.id === id)
    return (
      <WebsiteLink href={item.url} target="_blank">
        {item.name}
      </WebsiteLink>
    )
  }
  return projects.map(id => (
    <Grantee key={id}>
      <h4>{getName(id)}</h4>
      <AquiredDai>
        <p>Coffers generating</p>
        <h5>
          {((totalDAI * 0.95 * compoundRate) / 3).toFixed(2)} DAI per year
        </h5>
      </AquiredDai>
    </Grantee>
  ))
}

export default GranteeList
