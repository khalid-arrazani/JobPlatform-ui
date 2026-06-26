export const companyReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "SETCOMPANY":
      return {
        ...state,
        Company: action.payload,
      }

    default:
      return state;
  }
};