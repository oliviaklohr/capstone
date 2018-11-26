import { connect } from 'react-redux';
import { actions } from '../../state/actions';

import ToolColorSelect from '../tool-color-select/ToolColorSelect';

const mapStateToProps = ({ user }, ownProps) => ({
  ...ownProps,
  userId: user.userId,
  isActiveTool: user.props.activeTool === 'pen',
  initiallyActiveColor: user.props.activePenColor,
  colors: user.props.penColors,
  lineWidth: user.props.penLineWidth,
  props: user.props,
});


const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId, props: userProps, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const updatePenColor = ({ color }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      activePenColor: color,
    },
  }));

  const updatePenLineWidth = ({ width }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      penLineWidth: width,
    },
  }))

  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    updateToolColor: updatePenColor,
    onLineWidthChange: updatePenLineWidth
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ToolColorSelect);
