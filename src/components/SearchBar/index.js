import React, {Component} from "react";
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {
  Button,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from "react-native";

import styles from './styles'

import { fetchDrinks } from "../../utils/api"
import { formatDrinks } from "../../utils/helpers"
import { setFetching, setDrinks, clearDrinks } from '../../state/Drinks/actions';


 class SearchBarComponent extends Component{
  constructor() {
    super()
    this.state = {
      showCancel: false
    }
  }
  handlePress = () => this.props.navigation.navigate('List')

  handleCancel = () => {
    this._textInput.clear()
    this.setState({showCancel: false})
    this.props.clearDrinks()
  }

  handleTextChange = async keyword => {
    if (keyword.length >= 3) {
        const { cancelPrevQuery, drinks } = await fetchDrinks(keyword);
        
        // Is fetching data
        if (drinks === undefined) this.props.setFetching()
        
        // API returns no data
        if (drinks === null) this.props.setDrinks(null)

        // Got data from API
        if (drinks !== undefined && drinks !== null) this.props.setDrinks(formatDrinks(drinks))
        
        // Cancel prev. API call bc user typed again
        if (cancelPrevQuery) return;

    } else {
      // Workaround: When user deletes input text we clear drinks
      this.props.clearDrinks()
    }
    
    !this.state.showCancel && this.setState({ showCancel: true })
   
  };
    render() {
      
      const { editable } = this.props
      const { showCancel } = this.state

      return (
        <View style={editable ? styles.list_search : styles.container}>
          <TouchableOpacity onPress= {this.handlePress} style={editable ? styles.list_wrapper : styles.wrapper}>
            <Image source={require('../../img/search.png')} style={{width: 25, height: 25}}/>
            <TextInput 
              onTouchStart={this.handlePress}
              editable={editable} 
              style={ editable && showCancel ? styles.fullInput : editable ? styles.fullInputNoCancel : styles.input }
              placeholder={editable ? "Search" : "Search your favourite cocktails"}
              onChangeText={text => this.handleTextChange(text)}
              ref={component => this._textInput = component}
            />
            </TouchableOpacity> 
            {editable && showCancel && <Button title="cancel" color="#D14842" onPress={this.handleCancel}/>}
        </View>
      );
  }
}

SearchBarComponent.defaultProps = {
  editable: true
}

SearchBarComponent.propTypes = {
  editable: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
}


const mapDispatchToProps = dispatch => ({
  setFetching: () => dispatch(setFetching()),
  setDrinks: drinks => dispatch(setDrinks(drinks)),
  clearDrinks: () => dispatch(clearDrinks())
});


export default connect(null,mapDispatchToProps)(withNavigation(SearchBarComponent))
