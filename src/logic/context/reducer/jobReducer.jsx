export const JobReducer = (
  state,
  action
) => {
  switch (action.type) {
  
       case "SET-JOB-LIST":
      return {
        ...state,
        JobInfo: action.payload,
      }; 
      case "SET_LOADING":
      return {
        ...state,
          isLoading: action.payload,
      };
    default:
      return state;
  }
};