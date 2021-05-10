import { useColorMode } from '@chakra-ui/react'
import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from 'highcharts/modules/accessibility'
import React from 'react'

if (typeof Highcharts === 'object') {
  highchartsAccessibility(Highcharts)
}

export interface DonutChartProps {
  name?: string
  data?: (number | [string, number] | Highcharts.PointOptionsObject)[]
}

export const DonutChart: React.FC<DonutChartProps> = ({ name, data }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

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
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          accessibility: {
            point: {
              valueSuffix: '%'
            }
          },
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'transparent'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                distance: 14
              },
              showInLegend: true,
              size: 240,
              borderWidth: 0
            }
          },
          legend: {
            itemMarginTop: 8,
            layout: 'vertical',
            itemStyle: {
              color: isDark ? '#FFFFFF' : '#000000'
            },
            itemHoverStyle: {
              color: isDark ? '#FFFFFF' : '#000000'
            },
            symbolRadius: 0
          },
          series: [
            {
              type: 'pie',
              name: name,
              innerSize: '60%',
              data: data
            }
          ]
        } as Options
      }
    />
  )
}
