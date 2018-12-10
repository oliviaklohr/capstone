export const transformDbPageToStorePage = ({
  pageid,
  notebookid,
  ownerid,
  canvasimg,
  isdeleted,
  datecreated,
  lastedited,
  props,
}) => ({
  pageId: pageid,
  notebookId: notebookid,
  ownerId: ownerid,
  canvasImg: canvasimg,
  isDeleted: isdeleted,
  dateCreated: datecreated,
  lastEdited: lastedited,
  props,
});
