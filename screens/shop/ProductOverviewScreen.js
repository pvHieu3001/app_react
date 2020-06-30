import React , {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const ProductOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(productActions.fetchProducts());
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    },[setIsLoading, setError, dispatch]);

    useEffect(()=>{
        const willFocusSub = props.navigation.addListener('willFocus', loadProducts);

        return () => {
            willFocusSub.remove();
        }
    }, [loadProducts]);

    // useEffect(()=>{
    //     loadProducts();
    // }, [dispatch, loadProducts]);

    const viewDetailHandler = (id, title) => {
        props.navigation.navigate('ProductDetail',{
            productId: id,
            productTitle: title
        });
    }

    if(error){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text>An error ocurred!</Text>
                <Button title='Try again' onPress={loadProducts} color={Colors.primary}/>
            </View>
        );
    }

    if(isLoading){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.primary}></ActivityIndicator>
            </View>
        );
    }

    if(!isLoading && products.length === 0){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text>No product found. Maybe add some</Text>
            </View>
        );
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