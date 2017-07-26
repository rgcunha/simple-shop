import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../modules/shop'
import CartProduct from '../../../components/CartProduct'

const mapDispatchToProps = dispatch => bindActionCreators({
  removeFromCart
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(CartProduct)
