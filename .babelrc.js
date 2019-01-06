module.exports = {
  presets: [
    ['@babel/env', { modules: false }],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
  },
};
