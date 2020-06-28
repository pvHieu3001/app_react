import React from 'react';
import {View, StyleSheet, Text, Button, FlatList, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productAction from '../../store/actions/products';

const UserProductScreen = props => {
    const dispatch = useDispatch();
    const userProduct = useSelector(state => state.products.userProducts)
    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct',{productId: id});
    }

    const deleteHandler = (id) => {
        Alert.alert('Are you sure', 'Do you want to delete it', [
            {text: 'No', style: 'default'},
            {
                text: 'Yes', 
                style: 'destructive', 
                onPress:()=>{
                    dispatch(productAction.deleteProduct(id));
                }
            }
        ])
    }

    return (
        <FlatList
            data={userProduct}
            keyExtractor={item => item.id}
            renderItem={itemdata=>(
                <ProductItem
                    image={itemdata.item.imageUrl}
                    title={itemdata.item.title}
                    price={itemdata.item.price}
                >
                    <Button color={Colors.primary} title='Edit' onPress={()=>{
                        editProductHandler(itemdata.item.id)
                    }}></Button>
                    <Button color={Colors.primary} title='Delete' onPress={deleteHandler.bind(this,itemdata.item.id)}></Button>
                </ProductItem>
            )}
        />
    );
}

const styles = StyleSheet.create({

});

UserProductScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Products",
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
            <Item title="Add" iconName='md-create' 
                        onPress={()=>{
                            navData.navigation.navigate('EditProduct');
                        }}>
            </Item>
        </HeaderButtons>
    }
};

export default UserProductScreen;