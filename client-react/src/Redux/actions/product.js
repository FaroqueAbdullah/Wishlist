import * as type from '../types.js';

export function getProductDataRequest( query ) {
    return {
        type: type.GET_ALL_PRODUCTS_REQUEST,
        payload: query,
    }
}

export function getProductDataSuccess( products ) {
    return {
        type: type.GET_ALL_PRODUCTS_SUCCESS,
        payload: products,
    }
}