import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [first, setFirst] = useState("");
  const changeHandler = (val) => {
    setFirst(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo.."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(first)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
