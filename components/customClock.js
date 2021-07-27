import React, { useState } from "react"
import { Text, StyleSheet, View } from "react-native"

export const CustomClock = () => {
  let time = new Date().toLocaleTimeString()

  const [cTime, setCtime] = useState(time)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(UpdateTime, 1000)
  const styles = StyleSheet.create({
    general: {
      alignItems: "center",
    },
    clock: {
      fontSize: 20,
      fontWeight: "bold",
    },
  })
  return (
    <View style={styles.general}>
      <Text style={styles.clock}>{cTime}</Text>
    </View>
  )
}
