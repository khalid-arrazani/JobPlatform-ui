export const profileReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};