import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Color from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
    {
        ProductOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen
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