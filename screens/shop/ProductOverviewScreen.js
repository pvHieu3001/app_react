import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.avialableProducts);
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
                    onAddToCart={()=>{}}
                />
            }
        />
    );
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: "All Products"
};

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;