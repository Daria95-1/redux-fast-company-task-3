import axios from 'axios'

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

const httpService = {
  get: axios.get,
  post: axios.post,
}

export default httpService
