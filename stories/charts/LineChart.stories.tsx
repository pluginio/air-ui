import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { LineChart, LineChartProps } from "../../src"
import { useTranslation } from 'react-i18next'

export default {
  component: LineChart,
  title: "Charts/LineChart",
} as Meta

export const Usage = (args: LineChartProps) => {
  const { t } = useTranslation()

  return (
    <LineChart
      categories={[
        "Mar 10",
        "Mar 11",
        "Mar 12",
        "Mar 13",
        "Mar 14",
        "Mar 15",
        "Mar 16",
        "Mar 17",
      ]}
      data={[
        {
          name: t("charts_line_daily"),
          data: [1, 10, 50, 40, 100, 60, 200],
          color: '#FB3D8B'
        },
        {
          name: t("charts_line_weekly"),
          data: [50, 250, 125, 65, 200, 275, 240],
          color: '#00AEF9'
        },
        {
          name: t("charts_line_monthly"),
          data: [300, 240, 220, 240, 200, 180, 140],
          color: '#189F6A'
        }
      ]}



      //   data={[
      //   {
      //     name: 'Daily',
      //     data: [1, 10, 50, 40, 100, 60, 200],
      //     color: '#FB3D8B'
      //   },
      //   {
      //     name: 'Weekly',
      //     data: [50, 250, 125, 65, 200, 275, 240],
      //     color: '#00AEF9'
      //   },
      //   {
      //     name: 'Monthly',
      //     data: [300, 240, 220, 240, 200, 180, 140],
      //     color: '#189F6A'
      //   }
      // ]}
    />
  )
}
