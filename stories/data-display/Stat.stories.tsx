import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatProps,
} from "../../src"

export default {
  component: Stat,
  title: "Data Display/Stat",
} as Meta

const UsageTemplate: Story<StatProps> = (args) => (
  <Stat {...args}>
    <StatLabel>Collected Fees</StatLabel>
    <StatNumber>$0.00</StatNumber>
    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
  </Stat>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>$0.00</StatNumber>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
</Stat>
`,
    },
  },
}

const StatWithIndicatorTemplate: Story<StatProps> = (args) => (
  <StatGroup>
    <Stat>
      <StatLabel>Sent</StatLabel>
      <StatNumber>345,670</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Clicked</StatLabel>
      <StatNumber>45</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        9.05%
      </StatHelpText>
    </Stat>
  </StatGroup>
)

export const StatWithIndicator = StatWithIndicatorTemplate.bind({})
StatWithIndicator.args = {}
StatWithIndicator.parameters = {
  docs: {
    source: {
      code: `
<StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
`,
    },
  },
}

// export const Usage = (args: StatProps) => (
//   <Stat {...args}>
//     <StatLabel>Collected Fees</StatLabel>
//     <StatNumber>$0.00</StatNumber>
//     <StatHelpText>Feb 12 - Feb 28</StatHelpText>
//   </Stat>
// )

// export const StatWithIndicator = (args: StatProps) => (
//   <StatGroup>
//     <Stat>
//       <StatLabel>Sent</StatLabel>
//       <StatNumber>345,670</StatNumber>
//       <StatHelpText>
//         <StatArrow type='increase' />
//         23.36%
//       </StatHelpText>
//     </Stat>

//     <Stat>
//       <StatLabel>Clicked</StatLabel>
//       <StatNumber>45</StatNumber>
//       <StatHelpText>
//         <StatArrow type='decrease' />
//         9.05%
//       </StatHelpText>
//     </Stat>
//   </StatGroup>
// )
