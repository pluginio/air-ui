import React from "react"
import Highcharts, { Options } from "highcharts"
import highchartsAccessibility from "highcharts/modules/accessibility"
import HighchartsReact from "highcharts-react-official"
import { useColorMode } from "../../theming/color-mode"

if (typeof Highcharts === "object") {
  highchartsAccessibility(Highcharts)
}

export interface RatingChartProps {
  name?: string
  data?: number[]
}

export const RatingChart: React.FC<RatingChartProps> = ({ name, data }) => {
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
            type: "bar",
            animation: true,
            backgroundColor: "transparent",
            height: 80,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            alignTicks: true,
          },
          series: [
            {
              name: "Ratings",
              data: data,
            },
          ],
          colors: ["#189F6A", "#00CCD9", "#00AEF9", "#EDB03B", "#D92B05"],

          xAxis: {
            categories: ["5", "4", "3", "2", "1"],
            lineWidth: 0,
            tickWidth: 0,
            gridLineWidth: 0,
            labels: {
              style: {
                color: isDark ? "#B5B5B5" : "#000000",
              },
            },
          },

          yAxis: {
            title: {
              text: "",
            },
            tickPositions: [0, Math.max.apply({}, data)],
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            tickAmount: 0,
            labels: {
              enabled: false,
            },
          },
          plotOptions: {
            bar: {
              colorByPoint: true,
              pointWidth: 4,
              borderWidth: 0,
            },
          },
          tooltip: { enabled: false },
          legend: {
            enabled: false,
          },
        } as Options
      }
    />
  )
}
