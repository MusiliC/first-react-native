import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Sandbox = () => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.boxOne} >one</Text>
        <Text style = {styles.boxTwo} >two</Text>
        <Text style = {styles.boxThree} >three</Text>
        <Text style = {styles.boxFour} >four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 30,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
  },

  boxThree: {
    backgroundColor: "coral",
    padding: 20,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});

export default Sandbox