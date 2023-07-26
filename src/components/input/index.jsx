import { TextInput, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes';

const Input = ({onHandleFocus, onHandleBlur, onHandleChangeText, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.input]}
                onFocus={onHandleFocus}
                onBlur={onHandleBlur}
                onChangeText={onHandleChangeText}
                autoCorrect={false}
                autoCapitalize="none"
                cursorColor={COLORS.dorado}
                placeholderTextColor={COLORS.dorado}
            />
        </View>
    );
};

export default Input;