import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCatalog } from '../../modules/shop'
import Catalog from '../../components/Catalog'

const mapStateToProps = state => ({
  catalog: state.shop.catalog
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCatalog
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)