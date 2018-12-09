export const isTouchEvent = (event) => !!(
  // NOTE: this indexing into `event.nativeEvent.touches` will have to be updated before multi-touch can be supported
  event &&
  event.touches &&
  event.touches[0] &&
  event.touches[0].clientX &&
  event.touches[0].clientY
);

export const getX = (event) => isTouchEvent(event)
  ? event.touches[0].clientX
  : event.clientX;

export const getY = (event) => isTouchEvent(event)
  ? event.touches[0].clientY
  : event.clientY;

