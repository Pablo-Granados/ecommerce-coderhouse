import { View, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { styles } from './styles';

const Header = ({ title, style }) => {

  const {width} = useWindowDimensions();
  const isTablet = width > 650;

  return (
    <View style={[isTablet ? styles.tabletContainer : styles.container]}>
      <Text style={isTablet ? styles.tabletTitle : styles.title}>{title}</Text>
    </View>
  );
};
export default Header;