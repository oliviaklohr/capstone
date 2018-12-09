import { connect } from 'react-redux';
import { actions } from '../../state/actions';

import ToolColorSelect from '../tool-color-select/ToolColorSelect';

const mapStateToProps = ({ user }, ownProps) => ({
  ...ownProps,
  userId: user.userId,
  isActiveTool: user.props.activeTool === 'highlighter',
  initiallyActiveColor: user.props.activeHighlighterColor,
  colors: user.props.highlighterColors,
  lineWidth: user.props.highlighterLineWidth,
  props: user.props,
});


const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId, props: userProps, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const updateHighlighterColor = ({ color }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      activeHighlighterColor: color,
    },
  }));

  const updateHighlighterLineWidth = ({ width }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      highlighterLineWidth: width,
    },
  }))

  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    updateToolColor: updateHighlighterColor,
    onLineWidthChange: updateHighlighterLineWidth
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ToolColorSelect);
