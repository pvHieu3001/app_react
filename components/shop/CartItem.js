import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.mainText}>{props.productTitle}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons name='md-trash' size={23} color='red'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartItem:{
        padding: 10,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    itemData:{
        flexDirection: "row",
        alignItems: "center"
    },
    quantity:{
        color: "#888",
        fontSize: 16
    },
    mainText:{
        fontSize: 16
    },
    deleteButton:{
        marginLeft: 20
    }
});

export default CartItem;
