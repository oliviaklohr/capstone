export const DELETE_USER = 'USER / DELETE';
export const DELETE_USER_SUCCESS = 'USER / DELETE SUCCESS';
export const DELETE_USER_FAILURE = 'USER / DELETE FAILURE';

const deleteUser = ({
  userId,
}) => ({
  type: DELETE_USER,
  userId,
});

const success = ({
  userId, 
  status,
}) => ({
  type: DELETE_USER_SUCCESS,
  userId,
  status,
});

const failure = ({
  status,
}) => ({
  type: DELETE_USER_FAILURE,
  status,
});


deleteUser.success = success;
deleteUser.failure = failure;

export { deleteUser };

