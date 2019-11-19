import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width - 170;

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "white"
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },
  list_wrapper: {
    paddingHorizontal: 10,
    backgroundColor: "#e1e2e8",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },
  input: {
    width: width,
    marginHorizontal: 10,
    height: 40
  },
  fullInput: {
    width: width,
    marginHorizontal: 10,
    paddingLeft: 5,
    borderRadius: 5,
    height: 40
  },
  fullInputNoCancel: {
    width: width + 60,
    marginHorizontal: 10,
    paddingLeft: 5,
    borderRadius: 5,
    height: 40
  },
  list_search: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20
  }
});
