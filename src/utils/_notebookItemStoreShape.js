import PropTypes from 'prop-types';

export const notebookItemStoreShape = PropTypes.shape({
  notebookId: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastEdited: PropTypes.string.isRequired,
});
