module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@service': './src/features/service',
          '@notification': './src/features/notification',
          '@attraction': './src/features/attraction',
          '@profile': './src/features/profile',
          '@news': './src/features/news',
          '@authentication': './src/features/authentication',
          '@dashboard': './src/features/dashboard',
          '@interfaces': './src/interfaces',
          '@enums': './src/interfaces/enums',
          '@config': './src/config',
          '@utils': './src/utils',
          '@services': './src/services',
          '@store': './src/store',
          '@@@': '.',
          '@@': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
