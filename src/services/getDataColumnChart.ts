import api, {HOST} from './Api'

export const getDataColumnChart = async () => {
    return api.get(`${HOST}/gravitationalPlanets`)
}