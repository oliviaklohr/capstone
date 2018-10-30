export const setUserDetails = ({
  status,
  userId,
  firstName,
  lastName,
  email,
  dateCreated,
  isActive,
  password,
}) => isActive
  ? ({
    lastFetchStatus: status,
    userId,
    firstName,
    lastName,
    email,
    dateCreated,
    isActive,
    password,
  })
  : {};
