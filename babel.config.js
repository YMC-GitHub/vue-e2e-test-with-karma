module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        debug: false,
        include: [],
        exclude: [],
        useBuiltIns: false,
        forceAllTransforms: false,
        ignoreBrowserslistConfig: false,
        shippedProposals: false
      }
    ]
  ];
  const plugins = [
    ['@babel/plugin-transform-runtime', {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
    ]
  ];
  const env =  {
    "test": {
      "plugins": ["istanbul"]
    }
  }
  return {
    presets,
    plugins,
    env
  };
};
