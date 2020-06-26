import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemdata=> <OrderItem
                amount={itemdata.item.totalAmount}
                date={itemdata.item.readableDate}
                items={itemdata.item.items}
            />}
        />
    );
}

const styles = StyleSheet.create({

});

OrderScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Order",
        headerLeft:() =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='md-menu' 
                            onPress={()=>{
                                navData.navigation.toggleDrawer();
                            }}>
                </Item>
            </HeaderButtons>,
    }
};

export default OrderScreen;