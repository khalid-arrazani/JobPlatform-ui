export const authReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
      case "GET-USER":
      return {
        ...state,
        user: action.payload,
      };
       case "COMPLETEPRPFILE":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "REGISTER":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};