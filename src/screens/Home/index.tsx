import { useState } from "react";
import { Alert, FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from "../../../assets/logo.svg";
import Plus from "../../../assets/plus.svg";
import { Task } from "../components/Task";

interface TaskProps {
    done: boolean;
    description: string;
}
export function Home() {

    const [description, setDescription] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const totalCreated = tasks.length;
    const totalDone = tasks.filter(task => task.done).length;

    function handleAddNewTask() {
        const newTask = {
            description,
            done: false
        };
        setTasks(prevState => [...prevState, newTask]);
        setDescription("");
    }

    function handleDoneTask(taskToDone: string) {
        Alert.alert("Atenção", "Você deseja realmente finalizar essa tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => {
                        const tasksUpdated = prevState.map(task => {
                            if (task.description === taskToDone) {
                                return {
                                    ...task,
                                    done: true
                                }
                            } else {
                                return {
                                    ...task
                                }
                            }
                        });
                        return tasksUpdated;
                    });
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
                    <Task
                        done={item.done}
                        description={item.description}
                        onPressDone={() => handleDoneTask(item.description)}
                    />
                )}
                ListHeaderComponent={() => (
                    <View style={styles.infoContainer}>
                        <View style={styles.infoContent}>
                            <Text style={styles.createdText}>
                                Criadas
                            </Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.count}>
                                    {totalCreated}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.doneText}>
                                Concluídas
                            </Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.count}>
                                    {totalDone}
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