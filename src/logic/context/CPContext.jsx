import {
  createContext,

  useContext,

} from "react";
import { CompleteProfileJS, CompleteProfileR } from "../api/CompleteProfile/CompleteProfile";
import { AuthContext } from "./AuthContext";

import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const CPContext = createContext();




export default function CPProvider({ children }) {

   const [fullName, setFullName] = useState("");
    const [headline, setHeadline] = useState("");
    const [location, setLocation] = useState("");
    const [photo, setPhoto] = useState("");
  
    const navigate = useNavigate();
  
    const { setSnackBar } = useContext(AuthContext);




  
    const handleCreateProfileR = async () => {

      try {
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("headline", headline);
        formData.append("location", location);
  
        if (photo) {
          formData.append("profileImage", photo, "profile.png");
        }
  
        const data = await CompleteProfileR(formData);
        console.log(data);
        setSnackBar({
          open: true,
          message: data?.message,
          severity: "success",
        });
  
        navigate("/profile");
      } catch (error) {
        console.log(error?.response?.data);
        setSnackBar({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }
    };


     const handleCreateProfileJS = async () => {
        try {
         const formData = new FormData();
    
      formData.append("fullName", fullName);
      formData.append("headline", headline);
      formData.append("location", location);
    
        if (photo) {
          formData.append(
            "image",
            photo,
            "profile.png"
          );
        };
    
        const data =
          await CompleteProfileJS(formData);
          console.log(data);
          setSnackBar({
            open: true,
            message: data?.message,
            severity: "success",
          });
          navigate('/profile')
        } catch (error) {
          console.log(error.response.data);
          
          setSnackBar({
            open: true,
            message: error.response.data?.message,
            severity: "error",
          });
        }
      };



  return (
    <CPContext.Provider
      value={{
       fullName, setFullName,
       headline, setHeadline,
       location, setLocation,
       photo, setPhoto,

       handleCreateProfileR,
       handleCreateProfileJS
      }}
    >
      {children}
    </CPContext.Provider>
  );
}

export const useCP = () => {
  return useContext(CPContext);
};
