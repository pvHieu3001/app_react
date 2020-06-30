import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, SET_PRODUCTS } from '../actions/products';
import Product from '../../models/product';

const initialState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(pro => pro.ownerId === 'u1')
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_PRODUCTS:
            return {
                availableProducts: action.products,
                userProducts: action.products.filter(pro => pro.ownerId === 'u1')
            }
        case CREATE_PRODUCT:
            const newProduct = new Product(
                action.productData.id,
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
            );

            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            }
        case UPDATE_PRODUCT:
            const productIndex = state.availableProducts.findIndex(prod => prod.id === action.pid);
            
            const updateProduct = new Product(
                action.pid,
                state.availableProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
            );
            const availableProductsUpdate = [...state.availableProducts];
            availableProductsUpdate[productIndex] = updateProduct;

            const userProductIndex = state.userProducts.findIndex(prod => prod.id === action.pid);
            const userProductUpdates = [...state.userProducts];
            userProductUpdates[userProductIndex] = updateProduct;

            return {
                ...state,
                userProducts: userProductUpdates,
                availableProducts: availableProductsUpdate
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id !== action.pid
                ),
                availableProducts: state.userProducts.filter(
                    product => product.id !== action.pid
                )
            };
    }

    return state;
};