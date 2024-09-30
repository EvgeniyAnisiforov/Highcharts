import { useQuery } from "react-query"
import { getDataPieChart } from "../services/getDataPieChart"

export const useGetDataPieChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["PieChart"],
    queryFn: getDataPieChart,
  })
  return { data, isLoading }
}
