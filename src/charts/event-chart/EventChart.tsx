import React from 'react'
import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from 'highcharts/modules/accessibility'

if (typeof Highcharts === 'object') {
  highchartsAccessibility(Highcharts)
}

export interface EventChartProps {
  name?: string
  data?: (number | [string | number, number] | Highcharts.PointOptionsObject)[]
  color?: string | Highcharts.GradientColorObject | Highcharts.PatternObject
}

export const EventChart: React.FC<EventChartProps> = ({ name, data, color }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      style={{ width: '100%' }}
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
              type: 'spline',
              name: name,
              data: data,
              color: color
            }
          ],
          xAxis: {
            lineWidth: 1,
            tickWidth: 0,
            labels: {
              enabled: false
            }
          },
          yAxis: {
            allowDecimals: false,
            startOnTick: false,
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
