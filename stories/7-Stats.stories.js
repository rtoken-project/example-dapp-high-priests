import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import Stats from "../src/components/Garden/Stats"

export default {
  title: "Stats",
}

export const stats = () => (
  <>
    <h3>Loading State:</h3>
    <Stats numTreesGrown={null} tRate={null} />
    <h3>Not Planting state:</h3>
    <Stats numTreesGrown={0} tRate={0} />
    <h3>Planting State:</h3>
    <Stats numTreesGrown={10} tRate={30} />
  </>
)

