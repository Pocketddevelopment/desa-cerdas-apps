module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          assets: './src/assets',
          dashboard: './src/features/dashboard',
        },
      },
    ],
  ],
}
