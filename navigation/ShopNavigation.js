import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Color from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
    {
        ProductOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: Platform.OS === "android" ? Color.primary : ''
            },
            headerTintColor: Platform.OS === "android" ? 'white' : Color.primary
        }
        
    }
);

export default createAppContainer(ProductsNavigator);