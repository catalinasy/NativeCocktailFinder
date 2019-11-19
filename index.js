/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import configureStore from "./src/state/store";

import App from "./App";

const store = configureStore();

const AppWithState = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithState);
