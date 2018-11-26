export const UPDATE_USER_PROPS = 'USER / PROPS UPDATE';
export const UPDATE_USER_PROPS_SUCCESS = 'USER / PROPS UPDATE SUCCESS';
export const UPDATE_USER_PROPS_FAILURE = 'USER / PROPS UPDATE FAILURE';

const updateUserProps = ({
  userId,
  props,
}) => {
  return {
    type: UPDATE_USER_PROPS,
    userId,
    props,
  }
};

const success = ({
  status,
  ...others
}) => ({
  type: UPDATE_USER_PROPS_SUCCESS,
  status,
  ...others,
});

const failure = ({ status }) => ({
  type: UPDATE_USER_PROPS_FAILURE,
  status,
});

updateUserProps.success = success;
updateUserProps.failure = failure;

export { updateUserProps };

