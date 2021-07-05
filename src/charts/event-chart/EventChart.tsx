import React from 'react'
import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from 'highcharts/modules/accessibility'

if (typeof Highcharts === 'object') {
  highchartsAccessibility(Highcharts)
}

export interface EventChartData {
  name: string
  data: number
}

export interface EventChartProps {
  name?: string
  data?: EventChartData[]
  color?: string | Highcharts.GradientColorObject | Highcharts.PatternObject
}

export const EventChart: React.FC<EventChartProps> = ({ name, data, color }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={
        {
          title: {
            style: { display: 'none' }
          },
          subtitle: {
            text: ''
          },
          credits: {
            enabled: false
          },
          chart: {
            animation: true,
            backgroundColor: 'transparent',
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8,
            height: 70
          },
          plotOptions: {
            series: {
              marker: {
                enabled: false
              },
              lineWidth: 1
            }
          },
          series: [
            {
              type: 'line',
              name: name,
              data: data.map(item => (item.data)),
              color: color
            }
          ],
          xAxis: {
            categories: data.map(item => (item.name)),
            lineWidth: 1,
            tickWidth: 0,
            labels: {
              enabled: false
            }
          },
          yAxis: {
            allowDecimals: false,
            startOnTick: false,
            endOnTick: false,
            gridLineWidth: 0,
            labels: { enabled: false }
          },
          legend: {
            enabled: false
          }
        } as Options
      }
    />
  )
}
