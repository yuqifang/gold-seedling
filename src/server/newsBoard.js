import { post } from '../api'
const getline = params => post('/cms/api/nanBeiData/queryBeiData', params)

export default {
    getline
}