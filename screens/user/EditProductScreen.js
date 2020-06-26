import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, Button, ScrollView,TextInput} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux'

import HeaderButton from '../../components/UI/HeaderButton';

const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === prodId)
    );

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState(editedProduct ? editedProduct.price.toString() : '');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    
    const submitHandler = useCallback(()=>{
        console.log('submiting')
    });

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    ></TextInput>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image Url</Text>
                    <TextInput style={styles.input}
                        value={imageUrl}
                        onChangeText={text => setImageUrl(text)}
                    ></TextInput>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input}
                        value={price}
                        onChangeText={text => setPrice(text)}
                    ></TextInput>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    ></TextInput>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        marginVertical:  8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    form: {},
});

EditProductScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productId') ? "Edit Product" : 'Add Product',
        headerRight:() =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName='md-checkmark' 
                            onPress={()=>{
                                
                            }}>
                </Item>
            </HeaderButtons>,
    }
};

export default EditProductScreen;