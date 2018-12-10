export const transformStorePageToDbPage = ({
  pageId,
  canvasImg,
  isDeleted,
  lastEdited,
  props,
}) => ({
  pageId,
  canvasimg: canvasImg,
  isdeleted: isDeleted,
  lastedited: lastEdited,
  props,
});
