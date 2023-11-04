import httpService from './http.service'

const totdosEndpoint = 'todos/'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(totdosEndpoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.post(totdosEndpoint, payload)
    return data
  },
}

export default todosService
