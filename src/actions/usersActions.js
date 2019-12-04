export const UPDATE_USERS = "users:updateUsers";

export function updateUsers(first, last, hobby) {
  return {
    type: UPDATE_USERS,
    payload: {
      users: [{ firstName: first, lastName: last, hobbies: hobby }]
    }
  };
}
