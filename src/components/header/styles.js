import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowoOpacity: 0.23,
        ShadowRadius: 2.62,
        elevation: 4,

    },

    tabletContainer: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.background,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        fontSize: 22,
        color: COLORS.background,
        fontWeight: "bolder",
    },
    tabletTitle: {
        fontSize: 35,
        color: COLORS.background,
        fontFamily: FONTS.bold,
    },
})