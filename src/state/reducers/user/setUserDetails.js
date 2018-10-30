export const setUserDetails = ({
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isDeleted,
  password,
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
  })
  : {};
