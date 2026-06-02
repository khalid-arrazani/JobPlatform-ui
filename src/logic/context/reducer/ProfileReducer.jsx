export const profileReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading:
          action.payload,
      };
    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};