"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", clicks: 45, impressions: 20 },
  { day: "Tue", clicks: 60, impressions: 35 },
  { day: "Wed", clicks: 40, impressions: 25 },
  { day: "Thu", clicks: 70, impressions: 50 },
  { day: "Fri", clicks: 55, impressions: 30 },
]

const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "hsl(var(--chart-1))",
  },
  impressions: {
    label: "Impressions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CampaignChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[120px] w-full">
      <AreaChart
        data={chartData}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="text-xs fill-muted-foreground"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="clicks"
          type="natural"
          fill="var(--color-clicks)"
          fillOpacity={0.4}
          stroke="var(--color-clicks)"
          stackId="a"
        />
        <Area
          dataKey="impressions"
          type="natural"
          fill="var(--color-impressions)"
          fillOpacity={0.4}
          stroke="var(--color-impressions)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}

