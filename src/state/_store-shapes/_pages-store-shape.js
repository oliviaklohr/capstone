/**
 * 
 * NOTE: THIS IS NOT ACTUALLY INTENDED TO BE USED, IT'S RATHER TO HELP ME TRACK THE SHAPE OF ITEMS IN THE STORE
 * 
 */

import PropTypes from 'prop-types';

export const pageShape = PropTypes.shape({
  pageId: PropTypes.number.isRequired,
  ownderId: PropTypes.PropTypes.number.isDeleted,
  notebookId: PropTypes.number.isRequired,
  canvasImg: PropTypes.array, // TODO: this is the thing that we need to do conversion on
  isDeleted: PropTypes.bool.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastEdited: PropTypes.string.isRequired,
});

export const pagesStoreShape = PropTypes.shape({
  isFetching: PropTypes.boolean.isRequired,
  activeNotebookId: PropTypes.string,
  lastFetchStatus: PropTypes.number,
  byPageId: PropTypes.objectOf( pageShape ),
});
