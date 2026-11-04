import { Box } from "@mui/material";

import { useEffect } from "react";

import { Player } from "@lottiefiles/react-lottie-player";


import { useParams } from "react-router-dom";
import { useCompany } from "../../../logic/context/CompanyContext";
import { GetCompanyById } from "../../../logic/api/company/Company";


export default function CompanyDetailsPage() {
  const { dispatch, ...state } = useCompany();
  const { CompanyId } = useParams();

  const fetchCompany = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const data = await GetCompanyById(CompanyId);

      dispatch({
        type: "SETCOMPANYDETAILS",
        payload: data,
      });

      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);



  return (
    <>
      
    </>
  );
}
