import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export const connectTo = (mapStateToProps, actions, Component) => {
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}
