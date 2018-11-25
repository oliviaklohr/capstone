import { connect } from 'react-redux';
import { uniq as _uniq } from 'lodash';
import CreateNotebook from './CreateNotebook';
import { actions } from '../../state/actions/index';

const mapStateToProps = ({ notebooks, user }, ownProps) => {
  const userId = user.userId;
  const notebooksByNotebookId = notebooks.byNotebookId;
  const notebookValues = Object.values(notebooksByNotebookId);
  const storeCategories = notebookValues.map(({ category }) => category);
  const categories = _uniq([
    ...storeCategories,
    ...ownProps.categories,
  ]).filter((category) => !!(category.length));
  return {
    userId,
    categories,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const onCreateNotebook = (args) => {
    ownProps.onSubmit();

    dispatch(actions.createNewNotebook(args));
  };

  return {
    onCreateNotebook,
  };
};


const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId } = propsFromState;
  const { onCreateNotebook: onCreateNotebookFromDispatch } = propsFromDispatch;

  const onCreateNotebook = (args) => onCreateNotebookFromDispatch({ ...args, userId });

  return {
    ...propsFromState,
    ...propsFromDispatch,
    onCreateNotebook,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CreateNotebook)
