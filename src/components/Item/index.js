import React, {Component} from "react";
import PropTypes from "prop-types"
import {
    Text,
    View,
    Image
} from "react-native";

import styles from "./styles"

 class Item extends Component{
  render() {
    const {drink: { name, photo }} = this.props
    return (
      <View style={styles.container}> 
        <Image
          style={styles.image}
          source={{uri: photo.toString()}}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}

Item.propTypes = {
  drink: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
}

export default Item
