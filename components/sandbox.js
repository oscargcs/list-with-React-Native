import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, //it takes all the available room in the screen.
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", //en l'eix horitzontal
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },

  boxTwo: {
    backgroundColor: "blue",
    padding: 20,
  },
  boxThree: {
    backgroundColor: "yellow",
    padding: 30,
  },
  boxFour: {
    backgroundColor: "green",
    padding: 40,
  },
})
