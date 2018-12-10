export const setPageDetails = ({
  pageId,
  notebookId,
  ownerId,
  canvasImg,
  isDeleted,
  dateCreated,
  lastEdited,
}) => !isDeleted
  ? ({
      [pageId]: {
        pageId,
        notebookId,
        ownerId,
        canvasImg,
        isDeleted,
        dateCreated,
        lastEdited,
      }
    })
  : {};
