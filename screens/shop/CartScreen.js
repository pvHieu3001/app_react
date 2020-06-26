import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import  Colors  from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartAction from '../../store/actions/cart';
import * as ordersAction from '../../store/actions/orders';

const CartScreen = props => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for(const key in state.cart.items){
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a,b) => a.quantity > b.quantity ? 1 : -1);
    });
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.summaryAmount}>${totalAmount.toFixed(2)}</Text></Text>
                <Button title="Order Now" disabled={cartItems.length === 0}
                    onPress={()=>{
                        dispatch(ordersAction.addOrder(cartItems, totalAmount))
                    }}
                ></Button>
            </View>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem 
                        quantity={itemData.item.quantity} 
                        productTitle={itemData.item.productTitle} 
                        amount={itemData.item.sum} 
                        deletable
                        onRemove={()=>{dispatch(cartAction.removeFromCart(itemData.item.productId))}}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        margin: 20
    },
    summary:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText:{
        fontSize: 18
    },
    summaryAmount:{
        color: Colors.primary
    },
});

CartScreen.navigationOptions = {
    headerTitle: "Cart info"
}

export default CartScreen;