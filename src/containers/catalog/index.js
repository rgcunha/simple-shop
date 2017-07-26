import { connect } from 'react-redux'
import Catalog from '../../components/Catalog'

const mapStateToProps = state => ({
  catalog: state.shop.catalog
})

export default connect(mapStateToProps)(Catalog)
