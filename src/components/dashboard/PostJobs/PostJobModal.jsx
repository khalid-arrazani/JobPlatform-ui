import { useState } from "react";
const skillOptions = [
  // Frontend
  "HTML",
  "CSS",
  "Sass",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Redux",
  "GSAP",

  // Backend
  "Node.js",
  "Express.js",
  "NestJS",
  "PHP",
  "Laravel",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  ".NET",
  "C#",

  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "Redis",
  "Firebase",

  // DevOps & Cloud
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "CI/CD",
  "Git",
  "GitHub",
  "Linux",

  // Mobile
  "React Native",
  "Flutter",
  "Android",
  "iOS",
  "Swift",
  "Kotlin",

  // Data
  "Data Analysis",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Power BI",
  "Tableau",
  "SQL",

  // Design
  "Figma",
  "Adobe XD",
  "UI Design",
  "UX Design",
  "Photoshop",
  "Illustrator",

  // Management
  "Project Management",
  "Agile",
  "Scrum",
  "Product Management",

  // Marketing
  "Digital Marketing",
  "SEO",
  "SEM",
  "Content Marketing",
  "Social Media Marketing",
  "Google Ads",

  // Sales
  "Sales",
  "Business Development",
  "Lead Generation",
  "CRM",

  // Soft Skills
  "Communication",
  "Leadership",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Critical Thinking",
];

const currencies = [
  "USD ",
  "EUR ",
  "GBP ",
  "MAD ",
  "CAD ",
  "AUD ",
  "JPY ",
  "CNY ",
  "CHF ",
  "SEK ",
  "NOK ",
  "DKK ",
  "AED ",
  "SAR ",
  "QAR ",
  "KWD ",
  "BHD ",
  "OMR ",
  "INR ",
  "PKR ",
  "TRY ",
  "RUB ",
  "BRL ",
  "MXN ",
  "ZAR ",
];

import PostJobModalMobile from "./mobile/PostJobModalMobile";
import PostJobModalDesktop from "./Desktop/PostJobModalDesktop";

import { useMediaQuery } from "@mui/material";
import { useProfile } from "../../../logic/context/profileContext";
import { useAuth } from "../../../logic/context/AuthContext";
import { createJob } from "../../../logic/api/job/Job";

const PostJobModal = ({ open, setOpen }) => {
  const {dispatch , ...state  } = useProfile();

  const { setSnackBar } = useAuth();

  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",

    minSalary: "",
    maxSalary: "",
    salaryCurrency: "USD",
    salaryPeriod: "Per Year",

    jobType: "",
    workMode: "",

    experienceLevel: "Mid",
    skills: [],
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    dispatch({
      type: "SET_LOADING_UPDATE_PROFILE",
      payload: true,
    });
    try {
      const data = await createJob({ ...jobData, status: "active" });

      setSnackBar({
        open: true,
        message: data?.message,
        severity: "success",
      });

      handleClose();

      setJobData({
        title: "",
        description: "",
        location: "",

        minSalary: "",
        maxSalary: "",
        salaryCurrency: "USD",
        salaryPeriod: "Per Year",

        jobType: "",
        workMode: "",

        experienceLevel: "Mid",
        skills: [],
      });

      dispatch({
        type: "RELOADLISTJOB",
        payload: true,
      });
    } catch (error) {
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });
    } finally {
      dispatch({
        type: "SET_LOADING_UPDATE_PROFILE",
        payload: false,
      });
    }
  };

  const handleSubmitDraft = async () => {
    dispatch({
      type: "SET_LOADING_UPDATE_PROFILE",
      payload: true,
    });

    try {
      const data = await createJob({ ...jobData, status: "draft" });

      setSnackBar({
        open: true,
        message: data?.message,
        severity: "success",
      });

      handleClose();

      setJobData({
        title: "",
        description: "",
        location: "",

        minSalary: "",
        maxSalary: "",
        salaryCurrency: "USD",
        salaryPeriod: "Per Year",

        jobType: "",
        workMode: "",

        experienceLevel: "Mid",
        skills: [],
      });

      dispatch({
        type: "RELOADLISTJOB",
        payload: true,
      });
    } catch (error) {
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });

      console.log(error);
    } finally {
      dispatch({
        type: "SET_LOADING_UPDATE_PROFILE",
        payload: false,
      });
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isMobile ? (
        <PostJobModalMobile
         skillOptions={skillOptions}
         currencies={currencies}
         jobData={jobData}
         setJobData={setJobData}
         handleChange={handleChange}
         handleClose={handleClose}
         handleSubmit={handleSubmit}
         handleSubmitDraft={handleSubmitDraft}  
         handleSubmit={handleSubmit}  
          />
      ) : (
        <PostJobModalDesktop />
      )}
    </>
  );
};

export default PostJobModal;
