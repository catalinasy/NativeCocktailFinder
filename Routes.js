import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from "./src/screens/Home";
import List from "./src/screens/List";

const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  List: {
   screen: List
  }
});
export default createAppContainer(Project);