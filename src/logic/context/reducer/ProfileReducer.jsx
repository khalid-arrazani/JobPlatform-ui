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
       case "SET_LOADING_UPDATE_PROFILE":
      return {
        ...state,
        isLoadingUptadeProfile: action.payload,
      };
    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };
      case "RELOADLISTJOB":
      return {
        ...state,
        reloadListJob: action.payload,
      };
      case "RELOADCOMPANY":
      return {
        ...state,
        reloadCompany: action.payload,
      };

       case "SET_LOADING_COMPANY":
      return {
        ...state,
        isLoadingCompany: action.payload,
      };

    default:
      return state;
  }
};
