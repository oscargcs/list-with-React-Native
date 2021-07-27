import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import { AddTodo } from "./components/addTodo"
import { CustomClock } from "./components/customClock"

import { Header } from "./components/header"
import { Sandbox } from "./components/sandbox"
import { TodoItem } from "./components/todoItem"

export default function App() {
  const [todos, setTodos] = useState([
    { text: "make escudella", date: "12:30", key: 1 },
    { text: "apply for exciting jobs", date: "8:30", key: 2 },
    { text: "ride my bycicle", date: "18:00", key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key))
  }

  const submitHandler = (text, date) => {
    if (text.length >= 3) {
      if (todos.some((todo) => todo.text === text)) {
        Alert.alert(
          "Invalid text",
          "This todo already exists, please type a different one",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        )
      } else {
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: text, date: date, key: Math.random().toString() },
        ])
      }
    } else {
      Alert.alert("Invalid text", "Write at least 3 characters", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log("keyboard dismissed")
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
            <CustomClock />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
