import { StyleSheet } from 'react-native'
import { MENU_BAR_COLOR } from '../_theme';

const EntryPointStyles = StyleSheet.create({
  notch: {
    flex: 0, // prevent the notch from expanding
    backgroundColor: MENU_BAR_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default EntryPointStyles;
