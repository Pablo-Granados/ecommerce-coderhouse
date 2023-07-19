import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font'
import { COLORS, FONTS } from './themes';
import RootNavigator from './navigation';

export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Kanit-Regular.ttf'),
        [FONTS.light]: require('../assets/fonts/Kanit-Light.ttf'),
        [FONTS.medium]: require('../assets/fonts/Kanit-Medium.ttf'),
        [FONTS.bold]: require('../assets/fonts/Kanit-Bold.ttf'),
    })

    if(!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <RootNavigator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
    }
});