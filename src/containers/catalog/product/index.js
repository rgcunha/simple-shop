import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToCart } from '../../../modules/shop'
import CatalogProduct from '../../../components/CatalogProduct'

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(CatalogProduct)
