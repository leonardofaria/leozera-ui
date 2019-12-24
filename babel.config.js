// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/react'];

  // We need specific options for Jest
  if (process.env.NODE_ENV === 'test') {
    presets.push([
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
      },
    ]);
  } else {
    presets.push('@babel/preset-env');
  }

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    'macros',
    'babel-plugin-extract-react-types',
  ];

  const env = {
    production: {
      plugins,
    },
  };

  return {
    presets,
    plugins,
    sourceType: 'module',
    env,
  };
};
