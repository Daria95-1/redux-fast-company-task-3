export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        let statusValidate
        switch (validateMethod) {
            case 'isRequired': {
                if (typeof data === 'boolean') {
                    statusValidate = !data
                } else {
                    statusValidate = data.trim() === ''
                }
                break
            }

            case 'isEmail': {
                const emailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
                break
            }

            case 'isCapitalSymbol': {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break
            }

            case 'isContainDigit': {
                const cdigitlRegExp = /\d+/g
                statusValidate = !cdigitlRegExp.test(data)
                break
            }

            case 'min': {
                statusValidate = data.length < config.value
                break
            }
            default:
                break
        }
        if (statusValidate) return config.message
    }
    // наше состояние - объект, у которого есть имена полей
    for (const fieldName in data) {
        // получаем конфигурацию - это config
        // создаем второй вложенный цикл, т.к. конфигураций может быть несколько
        for (const validateMethod in config[fieldName]) {
            // делаем дополнительную проверку
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}
