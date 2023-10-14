import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import professionService from '../../services/profession.service'
import { toast } from 'react-toastify'

const ProfessionContext = React.createContext()
export const useProfessions = () => {
    return useContext(ProfessionContext)
}

export const ProfessionProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true)
    const [professions, setProfessions] = useState([])
    const [error, setError] = useState(null)

    // отрабатываем отображение ошибок
    useEffect(() => {
        if (error !== null) {
            toast(error)
            // необходимо обнулить ошибку
            setError(null)
        }
    }, [error])

    useEffect(() => {
        getProfessionsList()
    }, [])

    function errorCatcher(error) {
        const { meaasge } = error.response.data
        setError(meaasge)
    }

    // передаем эту функцию в провайдер
    function getProfession(id) {
        return professions.find((p) => p._id === id)
    }

    async function getProfessionsList() {
        try {
            const { content } = await professionService.get()
            setProfessions(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    // В данном случае loading не делаем, потому что ее делаем в самих компонентах
    return (
        <ProfessionContext.Provider
            value={{ isLoading, professions, getProfession }}
        >
            {children}
        </ProfessionContext.Provider>
    )
}

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}