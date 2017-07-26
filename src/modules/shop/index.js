export const ADD_TO_CART = 'products/ADD_TO_CART'
export const REMOVE_FROM_CART = 'products/REMOVE_FROM_CART'

const initialState = {
  cart: [],
  catalog: [
    { name: "42mm Space Gray Aluminum Case with Black Woven Nylon", price: 249.99, discount: null, img: "img/h38ss-dtbl-sel-201603@2x.png", badge: null },
    { name: "42mm Space Gray Aluminum Case with Gold/Royal Blue Woven Nylon", price: 249.99, discount: null, img: "img/h38ss-dtgr-sel-201603@2x.png", badge: null },
    { name: "42mm Space Gray Aluminum Case with Royal Blue Woven Nylon", price: 349.99, discount: null, img: "img/h38ss-dtrd-sel-201603@2x.png", badge: null },
    { name: "42mm Space Gray Aluminum Case with Scuba Blue Woven Nylon", price: 399.99, discount: 25.00, img: "img/s42sg-nsbk-sel-201603@2x.png", badge: "new" },
    { name: "Double Tour, 38mm Stainless Steel Case with Etain Leather Band", price: 199.99, discount: null, img: "img/h42ss-stbk-sel-201603@2x.png", badge: null },
    { name: "Double Tour, 38mm Stainless Steel Case with Capucine Leather Band", price: 399.99, discount: 50.00, img: "img/s42gd-nsgb-sel-201603@2x.png", badge: "sale" },
    { name: "Double Tour, 38mm Stainless Steel Case with Bleu Jean Leather Band", price: 349.99, discount: null, img: "img/s42rg-nsdb-sel-201603@2x.png", badge: null },
    { name: "Double Tour, 42mm Stainless Steel Case with Noir Leather Band", price: 249.99, discount: null, img: "img/s42si-nssb-sel-201603@2x.png", badge: null },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload)
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product, index) => index !== action.payload)
      }

    default:
      return state
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
