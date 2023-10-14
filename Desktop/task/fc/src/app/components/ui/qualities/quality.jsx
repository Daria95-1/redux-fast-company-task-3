import React from 'react'
import PropTypes from 'prop-types'
import { useQualities } from '../../../hooks/useQualities'

const Quality = ({ id }) => {
    const { getQuality } = useQualities()
    const quality = getQuality(id)

    if (!quality) {
        console.log(quality)
        return 'loading...'
    }

    const { color, name } = quality
    return <span className={'badge m-1 bg-' + color}>{name}</span>
}
Quality.propTypes = {
    id: PropTypes.string.isRequired
}

export default Quality
