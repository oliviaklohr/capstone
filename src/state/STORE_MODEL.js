const notebook = {
  notebookId: '~~~',
  ownerId: '~~~',
  title: '~~~',
  category: '~~~',
  isDeleted: true || false,
  dateCreated: '~~~',
  lastEdited: '~~~', // could be derived from the last time a page was modified
  color: '~~~',
  isPublic: true || false,
};

// ----------------------------------------------------------------------------

const page = {
  pageID: 'abcdefghijklmnopqr', // being generated
  notebookID: 'stuvwxyz',
  dateCreated: '~~~', // NOTE: we WILL be sorting pages WITHIN notebook by this value
  lastEdited: '~~~',
};

// ----------------------------------------------------------------------------

const store_model = {
  user: {
    isFetching: true || false,
    // lastFetchStatus: -1, // -1 is unset
    userID: '~~~',
    firstName: '~~~',
    lastName: '~~~',
    email: '~~~',
    dateCreated: '~~~',
  },
  notebooks: {
    isFetching: true || false,
    activeNotebookId: '~~~',
    byNotebookId: {
      [notebook.notebookID]: notebook,
      // ... multiple instances of above
    }
  },
  pages: {
    isFetching: true || false,
    activePageId: '~~~', // should NEVER have a value here, if `notebooks.isNotebookActive` is false,
    byPageID: {
      [page.pageID]: page,
      // ... multiple instances of above
    }
  },
  whiteboard: {
    activeTool: '~~~',
    toolColor: '~~~',
    toolWidth: '~~~',
  },
  session: {
    isLoggedIn: true || false,
  },
};

export default store_model;
