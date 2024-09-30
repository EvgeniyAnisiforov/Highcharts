import { useQuery } from "react-query"
import { getDataLineChart } from "../services/getDataLineChart"

export const useGetDataLineChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["LineChart"],
    queryFn: getDataLineChart,
  })
  return { data, isLoading }
}
