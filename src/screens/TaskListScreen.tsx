import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTasks } from "../context/TaskContext";

type NavigationProps = StackNavigationProp<RootStackParamList, "TaskList">;

const TaskListScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { tasks, toggleTaskStatus, clearCompleted } = useTasks();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleTaskStatus(item.id)}
            style={[styles.task, item.completed && styles.completed]}
          >
            <Text style={styles.taskText}>{item.title}</Text>
            <Text
              style={[styles.taskStatus, item.completed && styles.completed]}
            >
              {item.completed ? "Concluído" : "Pendente"}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Adicionar Tarefa"
        onPress={() => navigation.navigate("AddTask")}
      />
      <Button title="Limpar Concluídas" onPress={clearCompleted} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  task: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 5,
  },
  completed: { backgroundColor: "#d3ffd3" },
  taskText: { fontSize: 18 },
  taskStatus: { fontSize: 10, fontWeight: "bold" },
});

export default TaskListScreen;
