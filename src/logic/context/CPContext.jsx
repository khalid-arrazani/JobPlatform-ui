import {
  createContext,

  useContext,

} from "react";





export const CPContext = createContext();




export default function CPProvider({ children }) {
 

  return (
    <CPContext.Provider
      value={{
       
      
      }}
    >
      {children}
    </CPContext.Provider>
  );
}

export const useCP = () => {
  return useContext(CPContext);
};
