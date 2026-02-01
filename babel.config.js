const plugin = require("eslint-plugin-import");
const { plugins, root } = require("./.eslintrc");

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: '.',
      alias: {
        '@components': './src/components/index.ts',
        '@screens': './src/screens/index.ts',
        '@hooks': './src/hooks/index.ts',
        '@routes': './src/routes/index.ts',
        '@theme': './src/theme/index.ts',
      }
    }]
  ]
};
