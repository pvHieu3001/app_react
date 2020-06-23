import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.avialableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList data={products}
            keyExtractor={item => item.id}
            renderItem={itemdata => 
                <ProductItem 
                    image={itemdata.item.imageUrl}
                    title={itemdata.item.title}
                    price={itemdata.item.price}
                    onViewDetail={()=>{
                        props.navigation.navigate('ProductDetail',{
                            productId: itemdata.item.id,
                            productTitle: itemdata.item.title
                        });
                    }}
                    onAddToCart={()=>{dispatch(cartActions.addToCart(itemdata.item))}}
                />
            }
        />
    );
}

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "All Products",
        headerRight:(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Cart" iconName='md-cart' 
                                onPress={()=>{
                                    navData.navigation.navigate('Cart')
                                }}>
                    </Item>
                </HeaderButtons>)
    }
                
};

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;