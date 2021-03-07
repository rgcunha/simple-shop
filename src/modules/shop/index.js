import apiClient from '../../api';

export const ADD_TO_CART = 'products/ADD_TO_CART'
export const REMOVE_FROM_CART = 'products/REMOVE_FROM_CART'
export const FETCH_CATALOG = 'products/FETCH_CATALOG'

const initialState = {
  cart: [],
  catalog: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload ],
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product, index) => index !== action.payload)
      }

    case FETCH_CATALOG:
      return {
        ...state,
        catalog: action.payload
      }

    default:
      return state
  }
}

export const fetchCatalog = () => {
  return async dispatch => {
    const { results: products } = await apiClient.getProducts();
    dispatch({
      type: FETCH_CATALOG,
      payload: products
    })
  }
}

export const addToCart = (product) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: product
    })
  }
}

export const removeFromCart = (productId) => {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId
    })
  }
}
