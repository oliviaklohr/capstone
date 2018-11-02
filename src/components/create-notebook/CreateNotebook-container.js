import { connect } from 'react-redux';
import { uniq as _uniq } from 'lodash';
import CreateNotebook from './CreateNotebook';
import { actions } from '../../state/actions/index';

// TODO: replace with real categories read from the store
const mock_categories = ['foo', 'bar', 'baz'];

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
    // TODO: note, this will need to be moved down to `mapDispatchToProps` when an action is created
    // onCreateNewNotebook: (fields) => console.log('new notebook fields:', fields),
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
