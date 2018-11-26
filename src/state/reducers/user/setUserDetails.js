export const setUserDetails = ({
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
  props,
}) => !isDeleted
  ? ({
    lastFetchStatus: status,
    userId,
    firstName,
    lastName,
    email,
    dateCreated,
    isDeleted,
    password,
    props,
  })
  : {};
