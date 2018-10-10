const notebook = {
  notebookID: '~~~',
  ownerID: '~~~',
  title: '~~~',
  created: '~~~',
  dateCreated: '~~~',
  lastModified: '~~~', // could be derived from the last time a page was modified
};

// ----------------------------------------------------------------------------

const page = {
  pageID: 'abcdefghijklmnopqr',
  notebookID: 'stuvwxyz',
  dateCreated: '~~~', // NOTE: we WILL be sorting pages WITHIN  notebook by this value
  lastEdited: '~~~',
};

const store_model = {
  user: {
    isFetching: true || false,
    userID: '~~~',
    firstName: '~~~',
    lastName: '~~~',
    email: '~~~',
    dateCreated: '~~~',
  },
  notebooks: {
    isFetching: true || false,
    activeNotebookId: '~~~',
    isNotebookActive: true || false,
    byNotebookID: {
      [notebook.notebookID]: notebook,
      // ... multiple instances of above
    }
  },
  pages: {
    isFetching: true || false,
    activePageID: '~~~', // should NEVER have a value here, if `notebooks.isNotebookActive` is false,
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
