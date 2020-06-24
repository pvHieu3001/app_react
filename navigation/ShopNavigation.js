import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen'
import Color from '../constants/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
        Order: OrderScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const ShopNavigator = createDrawerNavigator(
    {
    Products: ProductsNavigator,
    Order: OrdersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
);

export default createAppContainer(ProductsNavigator);