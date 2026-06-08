export const JobReducer = (
  state,
  action
) => {
  switch (action.type) {
  
       case "SET-JOB-LIST":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};