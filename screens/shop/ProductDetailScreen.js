import React from 'react';
import {View, StyleSheet, Text, Button, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors'

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
                <Button style={Colors.primary} title='Add to cart' onPress={()=>{dispatch(cartActions.addToCart(selectedProduct))}}/>
            </View>
            
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    price: {
        fontSize: 20, 
        color: "#888",
        textAlign: "center",
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: "center"
    },

    actions: {
        marginVertical: 10,
        alignItems: "center",
        marginHorizontal: 10
    },

});

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

export default ProductDetailScreen;