import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import Tree from "../src/components/Garden/Tree/Tree"

export default {
  title: "Tree",
}

export const tree = () => (
  <Tree
    amountDonating={1}
    numTreesGrown={0.2}
    growerAddress="a"
    loadModelLocal
  />
)
