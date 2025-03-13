import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { TaskProvider } from "./src/context/TaskContext";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import TaskListScreen from "./src/screens/TaskListScreen";

export default function App() {
  return (
    <TaskProvider>
      {/* <TaskListScreen /> */}
      {/* <View style={styles.container}> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <AppNavigator />
      {/* </View> */}
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
