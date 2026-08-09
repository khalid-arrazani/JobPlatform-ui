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
      case "SETCOMPANYDETAILS":
      return {
        ...state,
        CompanyDetails: action.payload,
      }
       case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state;
  }
};