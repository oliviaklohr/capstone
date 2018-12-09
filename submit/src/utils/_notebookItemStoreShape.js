import PropTypes from 'prop-types';

export const notebookItemStoreShape = PropTypes.shape({
  notebookId: PropTypes.number.isRequired,
  ownerId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastEdited: PropTypes.string.isRequired,
});
