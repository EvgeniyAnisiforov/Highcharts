import { useQuery } from "react-query"
import { getDataColumnChart } from "../services/getDataColumnChart"

export const useGetDataColumnChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["ColumnChart"],
    queryFn: getDataColumnChart,
  })
  return { data, isLoading }
}
