import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font'
import { Header } from './components';
import { Categories, Products } from './screens';
import { COLORS, FONTS } from './themes';

const categoryDefault = {
    categoryId: null,
    color: COLORS.primary,
};
export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Kanit-Regular.ttf'),
        [FONTS.light]: require('../assets/fonts/Kanit-Light.ttf'),
        [FONTS.medium]: require('../assets/fonts/Kanit-Medium.ttf'),
        [FONTS.bold]: require('../assets/fonts/Kanit-Bold.ttf'),
    })
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

    const headerTitle = isCategorySelected ? 'Productos' : 'Categorias';

    const onHandleSelectCategory = ({ categoryId, color }) => {
        setSelectedCategory({ categoryId, color });
        setIsCategorySelected(!isCategorySelected);
    };
    const onHandleNavigate = () => {
        setIsCategorySelected(!isCategorySelected);
        setSelectedCategory(categoryDefault);
    };

    if(!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={headerTitle} style={{ backgroundColor: selectedCategory.color }} />
                {isCategorySelected ? (
                    <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
                ) : (
                    <Categories onSelectCategory={onHandleSelectCategory} />
                )}
            </View>
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