import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error }) => {
    // новое состояние для понимания: открыт пароль или нет
    const [showPassword, setShowPassword] = useState(false) // по дефолту поле закрыто

    // типизируем все поля, чтобы потом можно было бы добавлять поля из любого места. У нас был опр тип данных, который мы должны получить - и исходя из этого, мы бы присваивали их в род. комп. формы
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    // метод для генерации класса
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }

    // метод, который изменяет состояние setShowPassword на true
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name} // идентификатор
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                'bi bi-eye' + (showPassword ? '-slash' : '')
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default TextField
