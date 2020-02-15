import { connect } from 'react-redux'

import ListTransactionActions from '../../Redux/ListTransactionRedux';
import MainView from './MainView'

const mapStateToProps = state => ({
  listTransaction: state.listTransaction
})

const mapDispatchToProps = dispatch => ({
  getListTransaction: () => dispatch(ListTransactionActions.getListTransactionRequest()),
  refundTransactionRequest: (tranId) => dispatch(ListTransactionActions.refundTransactionRequest(tranId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)
