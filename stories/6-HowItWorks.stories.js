import React from "react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import styled from "styled-components"
import { HowItWorks } from  "../src/components/HowItWorks/HowItWorks"

export default {
  title: "HowItWorks",
  parameters: {
    componentSubtitle: "Subtitle",
  },
  decorators: [withKnobs],
}

export const list = () => (
  <HowItWorks>
  </HowItWorks>
)

