import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { FC } from "react"
import {
  LineChartData,
  ColumnChartData,
  PieChartData,
  TypeProps,
} from "../types"
import Loader from "./Loader"

const Chart: FC<TypeProps> = ({
  title,
  type,
  data,
  isLoadingLine,
  isLoadingColumn,
  isLoadingPie,
}) => {
  const getChartOptions = () => {
    switch (type) {
      case "line":
        return {
          chart: {
            type: type,
          },
          title: { text: title, align: "center", margin: 20 },
          xAxis: {
            tickInterval: 1,
            min: 1,
            max: 30,
          },
          yAxis: {
            title: {
              enabled: false,
            },
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y:.1f}₽</b>",
          },
          series: [
            {
              name: "Покупки",
              data: data?.map((array: LineChartData[]) =>
                array.reduce(
                  (acc: number, current: LineChartData) => acc + current.price,
                  0
                )
              ),
            },
          ],
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false,
              },
            },
          },
        }
      case "column":
        return {
          chart: {
            type: "column",
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y:.1f}м/с²</b>",
          },
          title: { text: title, align: "center" },
          series: data?.map((item: ColumnChartData) => ({
            id: item.id,
            name: item.name,
            data: [{ y: item.gravitational, name: item.name }],
          })),
          xAxis: {
            categories: [""],
          },
          yAxis: {
            title: {
              text: "",
            },
            min: 0,
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: "{point.y:.1f}м/с²",
              },

              pointPadding: 0,
              groupPadding: 0,
              maxPointWidth: 30,
            },
          },
        }
      case "pie":
        return {
          chart: {
            type: type,
          },
          title: { text: title, align: "center" },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
          },
          accessibility: {
            point: {
              valueSuffix: "%",
            },
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              dataLabels: {
                enabled: true,
              },
              showInLegend: true,
            },
          },
          series: [
            {
              name: "Население",
              colorByPoint: true,
              data: data?.map((item: PieChartData) => ({
                name: item.name,
                y: item.composition,
                sliced: false,
                selected: false,
              })),
            },
          ],
        }
      default:
        throw new Error(`Unsupported chart type: ${type}`)
    }
  }

  return (
    <div className="wrapperChart">
      {(isLoadingLine && type === "line") ||
      (isLoadingColumn && type === "column") ||
      (isLoadingPie && type === "pie") ? (
        <Loader />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={getChartOptions()} />
      )}
    </div>
  )
}

export default Chart
