import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTasks } from "../context/TaskContext";

const AddTaskScreen = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();
  const navigation = useNavigation();

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova Tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AddTaskScreen;
