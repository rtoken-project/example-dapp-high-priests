import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import styled from "styled-components"
import BackgroundSceneAnimated from "../src/components/BackgroundScene/BackgroundScene"

export default {
  title: "Background",
  parameters: {
    componentSubtitle: "Subtitle",
  },
  decorators: [withKnobs],
}

export const BackgroundAnimated = () => <BackgroundSceneAnimated />
