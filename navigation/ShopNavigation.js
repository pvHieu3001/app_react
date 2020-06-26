import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen'
import Color from '../constants/Colors';
import UserProductSreen from '../screens/user/UserProductSreen';
import EditProductScreen from '../screens/user/EditProductScreen';


const defaultNavOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === "android" ? Color.primary : ''
    },
    headerTintColor: Platform.OS === "android" ? 'white' : Color.primary
}

const ProductsNavigator = createStackNavigator(
    {
        ProductOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons name='md-cart' size={23} color={drawerConfig.tintColor}/>
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
        Order: OrderScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons name='md-list' size={23} color={drawerConfig.tintColor}/>
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const AdminNavigator = createStackNavigator(
    {
        UserProduct: UserProductSreen,
        EditProduct: EditProductScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons name='md-create' size={23} color={drawerConfig.tintColor}/>
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const ShopNavigator = createDrawerNavigator(
    {
    Products: ProductsNavigator,
    Order: OrdersNavigator,
    Admin: AdminNavigator
    },
    {
        contentOptions: {
            activeTintColor: Color.primary
        }
    }
);

export default createAppContainer(ShopNavigator);