import { connect } from 'react-redux'
import Cart from '../../components/Cart'

const mapStateToProps = state => ({
  cart: state.shop.cart
})

export default connect(mapStateToProps)(Cart)
