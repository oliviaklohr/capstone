import { StyleSheet } from 'react-native';

const ToolbarSocketStyles = StyleSheet.create({
  toolbarSocket: {
    alignItems: 'center',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
  // NOTE: only one of the following three styles may be applied at any given time
  justifyLeft: {
    justifyContent: 'flex-start',
  },
  justifyRight: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});

export default ToolbarSocketStyles;
