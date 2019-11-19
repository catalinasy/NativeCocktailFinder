import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Text, View } from "react-native";

import styles from "./styles";

import { GRADIENT } from "../../utils/constants";

import SearchBar from "../../components/SearchBar";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const {
      container,
      logo,
      gradient,
      textContainer,
      boldText,
      text,
      searchBar
    } = styles;

    return (
      <View style={container}>
        <LinearGradient style={gradient} colors={GRADIENT}>
          <Text style={logo}>🍸</Text>
          <View style={textContainer}>
            <Text style={boldText}>Cocktail</Text>
            <Text style={text}>Finder</Text>
          </View>
          <SearchBar editable={false} style={searchBar} />
        </LinearGradient>
      </View>
    );
  }
}
