import { Platform } from 'react-native'
import MockServer from './MockServer'

const Config = {
  url: (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.2.2:3000',
  server: MockServer,
  MainColor: '#42688d', // Color of accents. Core of app design.
  SupportiveColor: '#acacac', // Default color for components.
  textColorStrong: '#151515',
  textColorSupportive: '#404040',
  textColorLight: '#DDDDDD',

  toolbarHeight: 64,
  fontToolbar: 18,
  toolbarTitleColor: '#BBBBBB',

  smallFontSize: 8,
  mediumFontSize: 14,
  headerFontSize: 24,

  spacingLarge: 16,
  spacingNormal: 8,
  spacingSmall: 4
};

export default Config;