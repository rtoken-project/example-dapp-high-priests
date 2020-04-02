import React from "react"
import styled from "styled-components"

const Round = styled.div`
  width: 100px;
  margin-right: 20px;
  height: 100px;
  border-radius: 100%;
  background-size: cover;
`

const Avatar = ({ image }) => {
  if (image === undefined) return <></>
  return (
    <Round
      style={{
        // eslint-disable-next-line
        backgroundImage: `url(${require(`../../images/${image}`)})`,
      }}
    />
  )
}

export default Avatar
