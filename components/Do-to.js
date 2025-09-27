import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function Doto() {
  const [list, setList] = useState([
    { id: 1, activity: "Running" },
    { id: 2, activity: "Walking" },
  ]);
  const [add, setAdd] = useState("");

  const handleAdd = () => {
    if (!add.trim()) return;
    setList([...list, { id: list.length + 1, activity: add }]);
    setAdd("");
  };

  const handleRemove = (removeId) => {
    setList(list.filter((item) => item.id !== removeId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.activity}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleRemove(item.id)}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.title}>Manage Activities</Text>
        <TextInput
          style={styles.input}
          placeholder="Next Activity"
          value={add}
          onChangeText={setAdd}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.title}>Today Activity</Text>
        {list.length === 0 && (
          <Text style={styles.noActivityText}>You haven't added anything yet</Text>
        )}
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  addContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    width: "80%",
    borderRadius: 8,
    marginVertical: 8,
  },
  addButton: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  listContainer: {
    backgroundColor: "#93c5fd",
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  noActivityText: {
    fontSize: 18,
    marginVertical: 8,
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    padding: 6,
    backgroundColor: "#ffe4e6",
    borderRadius: 20,
  },
  deleteText: {
    fontSize: 16,
    color: "red",
  },
});
