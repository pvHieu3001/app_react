import React from 'react';
import {View, StyleSheet, Text, Image, Button, TouchableOpacity, Platform} from 'react-native';

import Card from '../UI/Card';

//import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const ProductItem = props => {
    // let TouchableCmp = TouchableOpacity;
    // if(Platform.OS === 'android' && Platform.Version>=21){
    //     TouchableCmp = TouchableNativeFeedback;
    // }
    return (
        //<TouchableCmp onPress={props.onViewDetail} useForeground>
            <Card style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}}></Image>
                </View>
                
                <View style={styles.detail}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                </View>
                
                <View style={styles.actions}>
                    {props.children}
                </View>
            </Card>
        //</TouchableCmp>
    );
}

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20
    },

    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        overflow: "hidden"
    },

    image: {
        width: '100%',
        height: '100%'
    },

    detail:{
        alignItems: "center",
        height: "15%",
        padding: 10
    },

    title: {
        fontSize: 19,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "30%",
        paddingHorizontal: 20
    },
});

export default ProductItem;