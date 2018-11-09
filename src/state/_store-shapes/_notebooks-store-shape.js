/**
 * 
 * NOTE: THIS IS NOT ACTUALLY INTENDED TO BE USED, IT'S RATHER TO HELP ME TRACK THE SHAPE OF ITEMS IN THE STORE
 * 
 */

import PropTypes from 'prop-types';

export const notebookShape = PropTypes.shape({
  notebookId: PropTypes.number.isRequired,
  ownderId: PropTypes.PropTypes.number.isDeleted,
  title: PropTypes.string.isRequired,
  isDeleted: PropTypes.boolean.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastEdited: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isPublic: PropTypes.boolean.isRequired,
  category: PropTypes.string,
});

export const notebooksStoreShape = PropTypes.shape({
  isFetching: PropTypes.boolean.isRequired,
  activeNotebookId: PropTypes.string,
  lastFetchStatus: PropTypes.number,
  byNotebookId: PropTypes.objectOf( notebookShape ),
});
