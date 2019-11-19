import React, {Component} from "react";
import { Text, View } from "react-native";

import styles from "./styles"

class NotFound extends Component{
  render() {  
    return (
      <View style={styles.container}> 
        <Text style={styles.text}>We couldn't find any drinks 😭</Text>
      </View>
    );
  }
}

export default NotFound
