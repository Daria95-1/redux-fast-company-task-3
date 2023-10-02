// используем подход через сервисы, а не fake api

import httpService from './http.service'

const userEndpoint = 'user/'

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint)
        return data
    }
}

export default userService
