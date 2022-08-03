import { useState } from "react";
import { Alert, FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from "../../../assets/logo.svg";
import Plus from "../../../assets/plus.svg";
import Done from "../../../assets/done.svg";
import Pending from "../../../assets/pending.svg";
import Trash from "../../../assets/trash.svg";

interface TaskProps {
    description: string;
    done: boolean;
}
export function Home() {

    const [description, setDescription] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const numberOfPending = tasks.filter(task => !task.done).length;
    const numberOfDone = tasks.filter(task => task.done).length;

    function handleAddNewTask() {
        const newTask = {
            description,
            done: false
        };
        setTasks(prevState => [...prevState, newTask]);
        setDescription("");
    }

    function handleDoneTask(taskToDone: TaskProps) {
        Alert.alert("Atenção", "Você deseja realmente finalizar essa tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    const tasksUpdated = tasks.map(task => {
                        if (task.description !== taskToDone.description) {
                            return {
                                ...task
                            }
                        } else {
                            return {
                                ...task,
                                done: true
                            }
                        }
                    });
                    setTasks(tasksUpdated);
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={styles.searchBar}>
                <TextInput
                    style={[styles.input, isFocused && {
                        borderColor: "#5E60CE"
                    }]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={description}
                    onChangeText={setDescription}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddNewTask}>
                    <Plus />
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.description}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <View>
                            {item.done ? (
                                <Done />
                            ) : (
                                <Pending />
                            )}
                        </View>
                        <Text style={item.done ? styles.taskDoneItemDescription : styles.taskPendingItemDescription}>
                            {item.description}
                        </Text>
                        <TouchableOpacity onPress={() => handleDoneTask(item)}>
                            <Trash width={16} height={16} />
                        </TouchableOpacity>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <View style={styles.infoContainer}>
                        <View style={styles.infoContent}>
                            <Text style={styles.createdText}>
                                Criadas
                            </Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.count}>
                                    {numberOfPending}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.doneText}>
                                Concluídas
                            </Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.count}>
                                    {numberOfDone}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.noTaskContainer}>
                        <Image
                            source={require("../../../assets/clipboard.png")}
                        />
                        <Text style={styles.noTaskText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.noTaskTextDetail}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />


        </View>
    )
}