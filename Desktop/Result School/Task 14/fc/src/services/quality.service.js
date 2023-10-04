// используем подход через сервисы, а не fake api

import httpService from './http.service'

const qualityEndpoint = 'quality/'

const qualityService = {
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoint)
        return data
    }
}

export default qualityService
