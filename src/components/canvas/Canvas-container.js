import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import Canvas from './Canvas';

const mapStateToProps = ({ pages }, ownProps) => ({
  ...ownProps,
  pageId: pages.activePageId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { pageId, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const savePage = ({ pageData }) => dispatch(actions.savePageData({ pageId, pageData }));

  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    savePage,
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Canvas);
