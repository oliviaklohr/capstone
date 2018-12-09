export const transformDbUserToStoreUser = ({
  userid,
  firstname,
  lastname,
  email,
  datecreated,
  isdeleted,
  props: {
    password,
    ...otherProps,
  },
}) => ({
  userId: userid,
  firstName: firstname,
  lastName: lastname,
  email: email,
  dateCreated: datecreated,
  isDeleted: isdeleted,
  password: password,
  props: otherProps,
});
