import React, { useState } from 'react';
import {View, StyleSheet, Text, FlatList, Button, ImageBackgroundComponent} from 'react-native';
import Colors from '../../constants/Colors';
import CartItem from './CartItem';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button 
                title={showDetails ? 'Hide Details' : 'Show Details'} 
                color={Colors.primary} 
                onPress={()=>{
                setShowDetails(prevState => !prevState)
            }}/>

            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            productTitle={cartItem.productTitle}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        borderRadius: 8,
        margin: 20,
        padding: 10,
        backgroundColor: 'white',
        alignItems: "center"
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%",
        paddingBottom: 15
    },

    date: {
        fontSize: 16
    },

    totalAmount: {
        fontSize: 16,
        color: "#888"
    },

    detailItems: {
        width: '100%'
    }
});

export default OrderItem