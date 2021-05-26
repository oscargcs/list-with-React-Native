import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.todo}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    marginTop: 16,
    flexDirection: "row",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
  },
})
