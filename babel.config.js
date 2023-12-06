module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // This enables the new JSX transform
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
