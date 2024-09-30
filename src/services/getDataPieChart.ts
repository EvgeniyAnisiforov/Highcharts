import api, {HOST} from './Api'

export const getDataPieChart = async () => {
    return api.get(`${HOST}/populationContinents`)
}