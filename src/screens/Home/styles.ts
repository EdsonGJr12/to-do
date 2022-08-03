import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        padding: 25
    },
    logoContainer: {
        marginTop: 50,
        alignItems: "center"
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 30,
        marginBottom: 15
    },
    input: {
        flex: 1,
        backgroundColor: "#262626",
        color: "#F2F2F2",
        height: 54,
        padding: 16,
        borderRadius: 6,
        marginRight: 5,
        borderWidth: 1,
        borderColor: "#0D0D0D"
    },
    buttonAdd: {
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#1E6F9F",
        height: 54,
        width: 50,
        borderRadius: 6
    },
    noTaskContainer: {
        alignItems: "center",
        paddingVertical: 55,
        borderTopWidth: 1,
        borderTopColor: "#333333"
    },
    noTaskText: {
        color: "#808080",
        fontWeight: "700",
        marginTop: 15,
        fontSize: 14
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        height: 50,
    },
    infoContent: {
        flexDirection: "row",
    },
    counterContainer: {
        alignItems: "center",
        justifyContent: "center",

        width: 25,
        height: 20,
        marginLeft: 8,
        borderRadius: 999,
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: "#333333"
    },
    count: {
        color: "#D9D9D9",
        fontSize: 12
    },
    noTaskTextDetail: {
        color: "#808080",
        fontSize: 14
    },
    createdText: {
        color: "#4EA8DE",
        fontWeight: "700",
        fontSize: 14
    },
    doneText: {
        color: "#8284FA",
        fontWeight: "700",
        fontSize: 14
    }
});