export const transformDbPageToStorePage = ({
  pageid,
  notebookid,
  ownerid,
  canvasimg,
  isdeleted,
  datecreated,
  lastedited,
}) => ({
  pageId: pageid,
  notebookId: notebookid,
  ownerId: ownerid,
  canvasImg: canvasimg,
  isDeleted: isdeleted,
  dateCreated: datecreated,
  lastEdited: lastedited,
});
