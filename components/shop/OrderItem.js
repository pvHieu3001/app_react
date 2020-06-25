import React from 'react';
import {View, StyleSheet, Text, FlatList, Button, ImageBackgroundComponent} from 'react-native';
import Colors from '../../constants/Colors'

const OrderItem = props => {
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button title='Show Details' color={Colors.primary} />
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
        width: "100%"
    },

    date: {
        fontSize: 16
    },

    totalAmount: {
        fontSize: 16,
        color: "#888"
    }
});

export default OrderItem