import { UPDATE_USERS } from "../../actions/usersActions";

const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return [...state, action.payload.users];
    default:
      return state;
  }
}
