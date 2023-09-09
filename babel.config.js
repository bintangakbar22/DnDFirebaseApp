module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constant',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@firebase': './src/firebase',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
