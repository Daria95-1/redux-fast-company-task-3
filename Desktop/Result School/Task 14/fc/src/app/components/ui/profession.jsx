import React from 'react'
import { useProfessions } from '../../hooks/useProfession'
import PropTypes from 'prop-types'

const Profession = ({ id }) => {
    // Профессии могут загрузиться раньше юзеров, поэтому их отображение необходимо отрабатывать: загрузка это или нет
    const { isLoading, getProfession } = useProfessions()
    const prof = getProfession(id)

    if (!isLoading) {
        return <p>{prof.name}</p>
    } else return 'loading...'
}

Profession.propTypes = {
    id: PropTypes.string
}

export default Profession
