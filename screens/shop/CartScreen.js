import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import  Colors  from '../../constants/Colors';

const CartScreen = props => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.summaryAmount}>${totalAmount}</Text></Text>
                <Button title="Order Now"></Button>
            </View>

            <View>
                <Text>Cart Item</Text>
            </View>
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