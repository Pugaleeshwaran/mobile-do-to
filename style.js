import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  text: {
    borderColor: "green",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    backgroundColor: "green",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: "black",
    borderStyle: "solid",
  },
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    borderColor: "black",
    borderRadius: 5,
    alignItems: "center", // centers text horizontally
  },
  buttonText: {
    color: "white", // text color
    fontWeight: "bold",
  },
});

export default style;
