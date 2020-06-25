import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
//import {composeWithDevTools} from 'redux-devtools-extension'

import ShopNavigation from './navigation/ShopNavigation';
import cartReducer from './store/reducers/cart';
import productsReducer from './store/reducers/products';
import orderReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
}); 

//const store = createStore(rootReducer, composeWithDevTools()) to debug
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
        <ShopNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
