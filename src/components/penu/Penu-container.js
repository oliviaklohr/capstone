import { connect } from 'react-redux';
import Penu from './Penu';
import { actions } from '../../state/actions';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const mapStateToProps = ({ user }, ownProps) => ({
  ...ownProps,
  userId: user.userId,
  props: user.props,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId, props: userProps, ...otherPropsFromState } = propsFromState;
  const{ dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const setActiveToolAndColor = ({ tool, color }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      activeTool: tool,
      [`active${capitalize(tool)}Color`]: color
    },
  }));

  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    setActiveToolAndColor,
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Penu);
