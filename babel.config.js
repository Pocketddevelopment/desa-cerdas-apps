module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@dashboard': './src/features/dashboard',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
