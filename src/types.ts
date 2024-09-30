export type LineChartData = {
  id: number
  name: string
  price: number
}

export type ColumnChartData = {
  id: number
  name: string
  gravitational: number
}

export type PieChartData = {
  id: number
  name: string
  composition: number
}

export interface TypeProps {
  title: string
  type: "line" | "column" | "pie"
  data?: LineChartData[] | ColumnChartData[] | PieChartData[] | any
  isLoadingLine?: boolean
  isLoadingColumn?: boolean
  isLoadingPie?: boolean
}
