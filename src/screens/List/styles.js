import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  fetching: {
    alignItems: "center",
    justifyContent: "center"
  },
  messageContainer: {
    height: Dimensions.get("window").height - 40
  },
  scrollView: {
    height: Dimensions.get("window").height - 120
  }
});
