
const preventDefaultTouchEventBehaviorDefault = (ref, event) => {
  if(event.target === ref) {
    event.preventDefault();
  }
};

const convertTouchStartToMouseDownEvent = (ref, event) => {
  const touch = event.touches[0];
  const mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  
  ref.dispatchEvent(mouseEvent);
};

const convertTouchMoveToMouseMoveEvent = (ref, event) => {
  let touch = event.touches[0];
  let mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  ref.dispatchEvent(mouseEvent);
};

const convertTouchEndToMouseUpEvent = (ref) => {
  const mouseEvent = new MouseEvent("mouseup", {});
  ref.dispatchEvent(mouseEvent);
};

export const componentDidMountEventListeners = (ref) => {
  ref.addEventListener('touchstart', (e) => convertTouchStartToMouseDownEvent(ref, e), false);
  ref.addEventListener('touchmove', (e) => convertTouchMoveToMouseMoveEvent(ref, e), false);
  ref.addEventListener('touchend', (e) => convertTouchEndToMouseUpEvent(ref, e), false);
  ref.addEventListener('touchstart', (e) => preventDefaultTouchEventBehaviorDefault(ref, e), false);
  ref.addEventListener('touchend', (e) => preventDefaultTouchEventBehaviorDefault(ref, e), false);
  ref.addEventListener('touchmove', (e) => preventDefaultTouchEventBehaviorDefault(ref, e), false);  
};

export const componentWillUnmountEventListeners = (ref) => {
  ref.removeEventListener('touchstart', convertTouchStartToMouseDownEvent, false);
  ref.removeEventListener('touchmove', convertTouchMoveToMouseMoveEvent, false);
  ref.removeEventListener('touchend', convertTouchEndToMouseUpEvent, false);
  ref.removeEventListener('touchstart', preventDefaultTouchEventBehaviorDefault, false);
  ref.removeEventListener('touchmove', preventDefaultTouchEventBehaviorDefault, false);
  ref.removeEventListener('touchend', preventDefaultTouchEventBehaviorDefault, false);
};
