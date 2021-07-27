import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, Button } from "react-native"

export const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("")
  const [date, setDate] = useState("")

  const changeHandler = (val) => {
    setText(val)
  }
  const changeDateHandler = (val) => {
    setDate(val)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="e.g. cook lunch"
        onChangeText={changeHandler}
      />
      <TextInput
        style={styles.input}
        placeholder="14:00"
        onChangeText={changeDateHandler}
      />
      <Button
        onPress={() => submitHandler(text, date)}
        title="add todo"
        color="blue"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
})
