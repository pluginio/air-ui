import React from 'react'
import Highcharts, { Options } from 'highcharts'
import highchartsAccessibility from 'highcharts/modules/accessibility'
import HighchartsReact from 'highcharts-react-official'
import { useColorMode } from '../../theming/color-mode'

if (typeof Highcharts === 'object') {
  highchartsAccessibility(Highcharts)
}

export interface BarChartProps {
  name?: string
  categories?: string[]
  data?: (number | [string | number, number] | Highcharts.PointOptionsObject)[]
  color?: string | Highcharts.GradientColorObject | Highcharts.PatternObject
  height?: string | number
}

export const BarChart: React.FC<BarChartProps> = ({ name, categories, data, color, height }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={
        {
          title: { text: '' },
          subtitle: {
            text: ''
          },
          credits: {
            enabled: false
          },
          chart: {
            type: 'column',
            animation: true,
            backgroundColor: 'transparent',
            height: height
          },
          plotOptions: {
            column: {
              borderWidth: 0
            }
          },
          series: [
            {
              name: name,
              data: data,
              color: color ?? '#00AEF9'
            }
          ],
          xAxis: {
            startOnTick: false,
            endOnTick: false,
            categories: categories,
            labels: {
              style: {
                color: isDark ? '#FFFFFF' : '#000000',
              }
            },
            lineColor: isDark ? '#FFFFFF' : '#000000'
          },
          yAxis: {
            title: { text: '' },
            tickAmount: 3,
            gridLineColor: '#8D8D8D',
            labels: {
              style: {
                color: isDark ? '#FFFFFF' : '#000000'
              }
            }
          },
          legend: {
            enabled: false
          }
        } as Options
      }
    />
  )
}
