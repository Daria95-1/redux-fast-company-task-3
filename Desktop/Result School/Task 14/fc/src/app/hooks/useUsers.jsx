import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import userService from '../../services/user.service'
import { toast } from 'react-toastify'

const UserContext = React.createContext()

export const useUser = () => {
    return useContext(UserContext)
}

// для всех пользователей на платформе
const UserProvider = ({ children }) => {
    // т.к приходят юзеры как массив
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // вызываем функцию в момент монтирования компонента
    useEffect(() => {
        getUsers()
    }, [])

    // отрабатываем отображение ошибок
    useEffect(() => {
        if (error !== null) {
            toast(error)
            // необходимо обнулить ошибку
            setError(null)
        }
    }, [error])

    // запрос данных
    async function getUsers() {
        try {
            const { content } = await userService.get()
            console.log(content)
            // при успешном выполнении
            setUsers(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    function errorCatcher(error) {
        const { meaasge } = error.response.data
        setError(meaasge)
    }

    return (
        // т.к. все данные пользователей отображаются на одной странице и пользователи являются тем, от чего зависят все остальные данные, здесь можно сделать глобальную загрузку
        <UserContext.Provider value={{ users }}>
            {!isLoading ? children : 'loading...'}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default UserProvider
