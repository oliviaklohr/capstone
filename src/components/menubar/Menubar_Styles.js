import { StyleSheet } from 'react-native';
import { MENU_BAR_COLOR } from '../_theme';

const MenubarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: MENU_BAR_COLOR,
  },
  commandPalette: {
    justifyContent: 'center',
  },
// TODO: delete everything between the lines, once you've added real items to your menubar
//=================
  testBlock: {
    backgroundColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    height: 30,
    width: 30,
  },
  //=================
});

export default MenubarStyles;
