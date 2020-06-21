import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.avialableProducts);
    return (
        <FlatList data={products}
            keyExtractor={item => item.id}
            renderItem={
            itemdata => <Text>{itemdata.item.title}</Text>
            }
        />
    );
}

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;