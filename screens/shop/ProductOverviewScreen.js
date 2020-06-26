import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const viewDetailHandler = (id, title) => {
        props.navigation.navigate('ProductDetail',{
            productId: id,
            productTitle: title
        });
    }

    return (
        <FlatList data={products}
            keyExtractor={item => item.id}
            renderItem={itemdata => 
                <ProductItem 
                    image={itemdata.item.imageUrl}
                    title={itemdata.item.title}
                    price={itemdata.item.price}
                >
                    <Button color={Colors.primary} title='View detail' onPress={()=>{viewDetailHandler(itemdata.item.id, itemdata.item.title)}}></Button>
                    <Button color={Colors.primary} title='Add to cart' onPress={()=>{dispatch(cartActions.addToCart(itemdata.item))}}></Button>
                </ProductItem>
            }
        />
    );
}

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "All Products",

        headerLeft:() =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='md-menu' 
                            onPress={()=>{
                                navData.navigation.toggleDrawer();
                            }}>
                </Item>
            </HeaderButtons>,

        headerRight:() =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Cart" iconName='md-cart' 
                            onPress={()=>{
                                navData.navigation.navigate('Cart')
                            }}>
                </Item>
            </HeaderButtons>
    }
                
};

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;