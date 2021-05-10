import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, StatProps } from '../../src'

export default {
  component: Stat,
  title: 'Data Display/Stat'
} as Meta

export const Usage = (args: StatProps) => (
  <Stat {...args}>
    <StatLabel>Collected Fees</StatLabel>
    <StatNumber>$0.00</StatNumber>
    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
  </Stat>
)

export const StatWithIndicator = (args: StatProps) => (
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
)
