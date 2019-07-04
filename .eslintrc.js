module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    //todos problemas q o prettier indentificar apresentar como erro
    'prettier/prettier': 'error',
    //não precisa usar o this
    'class-methods-use-this': 'off',
    //receba um parametro e faça uma alteração no parametro utilizado no sequelize
    'no-param-reassign': 'off',
    //não precisar usar o formato da variável nomeVariavel
    camelcase: 'off',
    //variável que não é utilizada, ignorar o next
    'no-unused-vars': ['error', { argsIgnoreParttern: 'next' }]
  }
};
