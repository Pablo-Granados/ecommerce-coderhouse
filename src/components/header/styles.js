import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 50,
        justifyContent: "center",
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
    title: {
        fontSize: 22,
        color: COLORS.text,
        fontWeight: "bold",

    }
})