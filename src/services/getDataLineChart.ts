import api, {HOST} from './Api'

export const getDataLineChart = async () => {
    return api.get(`${HOST}/historyPay`)
}