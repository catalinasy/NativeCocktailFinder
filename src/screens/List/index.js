import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

import { GRADIENT } from "../../utils/constants";

import Item from "../../components/Item";
import SearchBar from "../../components/SearchBar";
import NotFound from "../../components/NotFound";
import { clearDrinks } from "../../state/Drinks/actions";

class List extends Component {
  static navigationOptions = {
    title: "List"
  };

  componentWillUnmount() {
    this.props.clearDrinks();
  }

  render() {
    const { drinks, isFetching } = this.props;
    const nothingFound = drinks === null && !isFetching;
    const drinkKeys = drinks !== null ? Object.keys(drinks) : false;

    return (
      <LinearGradient colors={GRADIENT} style={styles.gradient}>
        <View>
          <SearchBar />
          <View>
            {isFetching && (
              <ActivityIndicator
                size="large"
                color="#fff"
                style={styles.fetching}
              />
            )}
            {nothingFound && <NotFound style={styles.messageContainer} />}
            {drinkKeys && (
              <ScrollView style={styles.scrollView}>
                {drinkKeys.map(drinkId => (
                  <Item key={drinkId} drink={drinks[drinkId]} />
                ))}
              </ScrollView>
            )}
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  drinks: state.drinks.drinks,
  isFetching: state.drinks.isFetching
});

const mapDispatchToProps = dispatch => ({
  clearDrinks: () => dispatch(clearDrinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
