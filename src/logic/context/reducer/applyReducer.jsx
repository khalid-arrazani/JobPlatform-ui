export const applyReducer = (
  state,
  action
) => {
  switch (action.type) {

    case "ListApply":
      return {
        ...state,
        ListApply: action.payload,
      };
     

    default:
      return state;
  }
};