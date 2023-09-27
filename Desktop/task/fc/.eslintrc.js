module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: 'off',
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' }
        ],
        'multiline-ternary': ['off'],
        quotes: ['error', 'single'],
        // semi: ['error', 'never'],
        'comma-dangle': ['error', 'never']
    }
}
