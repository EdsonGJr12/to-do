import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingVertical: 20,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: "#262626",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333333"
    },
    taskPendingItemDescription: {
        width: 230,
        fontSize: 14,
        color: "#F2F2F2"
    },
    taskDoneItemDescription: {
        width: 230,
        fontSize: 14,
        color: "#808080",
        textDecorationLine: "line-through"
    }
});