import { Text, TouchableOpacity, View } from "react-native";

import Done from "../../../../assets/done.svg";
import Pending from "../../../../assets/pending.svg";
import Trash from "../../../../assets/trash.svg";

import { styles } from "./styles";

interface TaskProps {
    done: boolean;
    description: string,
    onPressDone: () => void;
}
export function Task({ done, description, onPressDone }: TaskProps) {

    return (
        <View style={styles.taskItem}>
            <View>
                {done ? (
                    <Done />
                ) : (
                    <Pending />
                )}
            </View>
            <Text style={done ? styles.taskDoneItemDescription : styles.taskPendingItemDescription}>
                {description}
            </Text>
            <TouchableOpacity onPress={onPressDone}>
                <Trash width={16} height={16} />
            </TouchableOpacity>
        </View>
    )
}