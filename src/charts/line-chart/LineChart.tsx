import React from "react"
import Highcharts, { Options } from "highcharts"
import highchartsAccessibility from "highcharts/modules/accessibility"
import HighchartsReact from "highcharts-react-official"
import { useColorMode } from "../../theming/color-mode"

if (typeof Highcharts === "object") {
  highchartsAccessibility(Highcharts)
}

interface SeriesData {
  name: string, 
  data: number[], 
  color: string
}

export interface LineChartProps {
  categories?: string[]
  data?: SeriesData[]
}

export const LineChart: React.FC<LineChartProps> = ({ categories, data }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <HighchartsReact
      highcharts={Highcharts}
      style={{ width: "100%" }}
      options={
        {
          title: { text: "" },
          subtitle: {
            text: "",
          },
          credits: {
            enabled: false,
          },
          chart: {
            type: "spline",
            animation: true,
            backgroundColor: "transparent",
          },
          plotOptions: {
            column: {
              borderWidth: 0,
            },
            series: {
              marker: {
                enabled: true,
                symbol: "circle",
              },
            },
          },
          series: data,
          xAxis: {
            startOnTick: true,
            endOnTick: true,
            categories: categories,
            labels: {
              style: {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            },
            lineColor: isDark ? "#FFFFFF" : "#000000",
          },
          yAxis: {
            title: { text: "" },
            tickAmount: 3,
            gridLineColor: "#8D8D8D",
            labels: {
              style: {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            },
          },
          legend: {
            align: "center",
            verticalAlign: "top",
            symbolRadius: 360,
            itemStyle: {
              color: isDark ? '#FFFFFF' : '#000000'
            },
            itemHoverStyle: {
              color: isDark ? '#FFFFFF' : '#000000'
            }
          },
        } as Options
      }
    />
  )
}
