import Chart from "./components/Chart"
import { useGetDataColumnChart } from "./hooks/useGetDataColumnChart"
import { useGetDataLineChart } from "./hooks/useGetDataLineChart"
import { useGetDataPieChart } from "./hooks/useGetDataPieChart"

const App = () => {
  const { data: dataLineChart, isLoading: isLoadingLine } =
    useGetDataLineChart()
  const { data: dataColumnChart, isLoading: isLoadingColumn } =
    useGetDataColumnChart()
  const { data: dataPieChart, isLoading: isLoadingPie } = useGetDataPieChart()

  return (
    <div className="containerChart">
      <Chart
        type="line"
        data={dataLineChart?.data}
        isLoadingLine={isLoadingLine}
        title="История покупок"
      />
      <Chart
        type="column"
        data={dataColumnChart?.data}
        isLoadingColumn={isLoadingColumn}
        title="Сила притяжения планет"
      />
      <Chart
        type="pie"
        data={dataPieChart?.data}
        isLoadingPie={isLoadingPie}
        title="Распределение населения по континентам"
      />
    </div>
  )
}

export default App
