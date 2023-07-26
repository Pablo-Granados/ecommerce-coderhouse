import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.dorado,
    fontSize: 14,
    height: 35,
    borderColor: COLORS.dorado,
  },
});