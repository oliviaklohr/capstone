export const setNotebookDetails = ({
  notebookId,
  ownerId,
  title,
  category,
  isDeleted,
  dateCreated,
  lastEdited,
  color,
  isPublic,
}) => !isDeleted
  ? ({
      [notebookId]: {
        notebookId,
        ownerId,
        title,
        category,
        isDeleted,
        dateCreated,
        lastEdited,
        color,
        isPublic,
      }
    })
  : {};
