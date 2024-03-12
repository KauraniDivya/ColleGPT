/* eslint-disable react/jsx-pascal-case */
import React, { createContext, useReducer, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./App.css";
import { reducer, initialState } from "./reducers/userReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import UpdateProfile from "./components/updateprofile";
import Courses from "./components/courses";
import About from "./components/about";
import Contact from "./components/contact";

import OTP from "./components/OTP";
import Term from "./components/term";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import WatchVideo from "./components/watch_video";
import Sem_1_Fop_Units from "./components/Sem_1_Fop_Units";
import Sem_1_Maths_Units from "./components/Sem_1_Maths_Units";
import Sem_1_Eoc_Units from "./components/Sem_1_Eoc_Units";
import Sem_1_Eg_Units from "./components/Sem_1_Eg_Units";
import Sem_1_Ep_Units from "./components/Sem_1_Ep_Units";
import Sem_1_Es_Units from "./components/Sem_1_Es_Units";
import Sem_2_Oopc_Units from "./components/Sem_2_Oopc_Units";
import Sem_2_Maths_Units from "./components/Sem_2_Maths_Units";
import Sem_2_Beee_Units from "./components/Sem_2_Beee_Units";
import Sem_2_Fme_Units from "./components/Sem_2_Fme_Units";
import Sem_2_Bcps_Units from "./components/Sem_2_Bcps_Units";
import Sem_2_Workshop_Units from "./components/Sem_2_Workshop_Units";
import Sem_3_Dsa_Units from "./components/Sem_3_Dsa_Units";
import Sem_3_Maths_Units from "./components/Sem_3_Maths_Units";
import Sem_3_Dbms_Units from "./components/Sem_3_Dbms_Units";
import Sem_3_De_Units from "./components/Sem_3_De_Units";
import Sem_3_Itw_Units from "./components/Sem_3_Itw_Units";
import Sem_4_Oopj_Units from "./components/Sem_4_Oopj_Units";
import Sem_4_Psnm_Units from "./components/Sem_4_Psnm_Units";
import Sem_4_Os_Units from "./components/Sem_4_Os_Units";
import Sem_4_Coa_Units from "./components/Sem_4_Coa_Units";
import Sem_4_Pom_Units from "./components/Sem_4_Pom_Units";
import Sem_5_Ajp_Units from "./components/Sem_5_Ajp_Units";
import Sem_5_Daa_Units from "./components/Sem_5_Daa_Units";
import Sem_5_Se_Units from "./components/Sem_5_Se_Units";
import Sem_5_Toc_Units from "./components/Sem_5_Toc_Units";
import Sem_5_Cn_Units from "./components/Sem_5_Cn_Units";
import Sem_5_Map_Units from "./components/Sem_5_Map_Units";
import Sem_5_Python_Units from "./components/Sem_5_Python_Units";
import Sem_5_SOA_Units from "./components/Sem_5_SOA_Units";

import Sem_6_Sc_Units from "./components/Sem_6_Sc_Units";
import Sem_6_Dc_Units from "./components/Sem_6_Dc_Units";
import Sem_6_Ee_Units from "./components/Sem_6_Ee_Units";
import Sem_6_Ml_Units from "./components/Sem_6_Ml_Units";
import Sem_6_Py_Units from "./components/Sem_6_Py_Units";
import Sem_6_Ai_Units from "./components/Sem_6_Ai_Units";
import Sem_6_Iot_Units from "./components/Sem_6_Iot_Units";
import Sem_6_Cns_Units from "./components/Sem_6_Cns_Units";
import Sem_6_Is_Units from "./components/Sem_6_Is_Units";
import Sem_6_Ap_Units from "./components/Sem_6_Ap_Units";

import Admin_Pdf_Form from "./components/admin_pdf_form";
import Userlist from "./components/userlist";
import Gita from "./components/gita";
import MainLayout from "./layout/mainLayout";
import Contributor_Form from "./components/contributor_form";
import Event_Form from "./components/event_form";
import Roadmap_Frontend from "./components/roadmap_frontend";
import Roadmap_Mern from "./components/roadmap_mern";
import Roadmap_Backend from "./components/roadmap_backend";
import AI_Coming_Soon from "./components/collegptcomingsoon";
export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const allowedPaths = [
      "/",
      "/login",
      "/register",
      "/otp",
      "/resetpassword",
      "/forgotpassword",
    ]; // Add the paths that don't require login
    const isAllowedPath = allowedPaths.some((path) =>
      window.location.pathname.startsWith(path)
    );

    if (!user && !isAllowedPath) {
      navigate("/login");
    }
    dispatch({ type: "USER", payload: user });
  }, [dispatch, navigate]);

  // ...

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/gita" element={<Gita />} />
          <Route path="/event_form" element={<Event_Form />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contributor_form" element={<Contributor_Form />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/term" element={<Term />} />
          <Route path="/watchvideo/:code" element={<WatchVideo />} />
          <Route path="/roadmap_mern" element={<Roadmap_Mern />} />
          <Route path="/roadmap_frontend" element={<Roadmap_Frontend />} />
          <Route path="/roadmap_backend" element={<Roadmap_Backend />} />
          
          <Route path="/sem_1_fop_units" element={<Sem_1_Fop_Units />} />
          <Route path="/sem_1_maths_units" element={<Sem_1_Maths_Units />} />
          <Route path="/sem_1_eoc_units" element={<Sem_1_Eoc_Units />} />
          <Route path="/sem_1_eg_units" element={<Sem_1_Eg_Units />} />
          <Route path="/sem_1_ep_units" element={<Sem_1_Ep_Units />} />
          <Route path="/sem_1_es_units" element={<Sem_1_Es_Units />} />
          <Route path="/sem_2_oopc_units" element={<Sem_2_Oopc_Units />} />
          <Route path="/sem_2_maths_units" element={<Sem_2_Maths_Units />} />
          <Route path="/sem_2_beee_units" element={<Sem_2_Beee_Units />} />
          <Route path="/sem_2_fme_units" element={<Sem_2_Fme_Units />} />
          <Route path="/sem_2_bcps_units" element={<Sem_2_Bcps_Units />} />
          <Route path="/sem_2_workshop_units" element={<Sem_2_Workshop_Units />} />
          <Route path="/sem_3_dsa_units" element={<Sem_3_Dsa_Units />} />
          <Route path="/sem_3_maths_units" element={<Sem_3_Maths_Units />} />
          <Route path="/sem_3_dbms_units" element={<Sem_3_Dbms_Units />} />
          <Route path="/sem_3_de_units" element={<Sem_3_De_Units />} />
          <Route path="/sem_3_itw_units" element={<Sem_3_Itw_Units />} />
          <Route path="/sem_4_oopj_units" element={<Sem_4_Oopj_Units />} />
          <Route path="/sem_4_psnm_units" element={<Sem_4_Psnm_Units />} />
          <Route path="/sem_4_os_units" element={<Sem_4_Os_Units />} />
          <Route path="/sem_4_coa_units" element={<Sem_4_Coa_Units />} />
          <Route path="/sem_4_pom_units" element={<Sem_4_Pom_Units />} />
          <Route path="/sem_5_ajp_units" element={<Sem_5_Ajp_Units />} />
          <Route path="/sem_5_daa_units" element={<Sem_5_Daa_Units />} />
          <Route path="/sem_5_se_units" element={<Sem_5_Se_Units />} />
          <Route path="/sem_5_toc_units" element={<Sem_5_Toc_Units />} />
          <Route path="/sem_5_cn_units" element={<Sem_5_Cn_Units />} />
          <Route path="/sem_5_map_units" element={<Sem_5_Map_Units />} />
          <Route path="/sem_5_python_units" element={<Sem_5_Python_Units />} />
          <Route path="/sem_5_soa_units" element={<Sem_5_SOA_Units />} />
          <Route path="/sem_6_sc_units" element={<Sem_6_Sc_Units />} />
          <Route path="/sem_6_ml_units" element={<Sem_6_Ml_Units />} />
          <Route path="/sem_6_dc_units" element={<Sem_6_Dc_Units />} />
          <Route path="/sem_6_ee_units" element={<Sem_6_Ee_Units />} />
          <Route path="/sem_6_py_units" element={<Sem_6_Py_Units />} />
          <Route path="/sem_6_ai_units" element={<Sem_6_Ai_Units />} />
          <Route path="/sem_6_iot_units" element={<Sem_6_Iot_Units />} />
          <Route path="/sem_6_cns_units" element={<Sem_6_Cns_Units />} />
          <Route path="/sem_6_is_units" element={<Sem_6_Is_Units />} />
          <Route path="/sem_6_ap_units" element={<Sem_6_Ap_Units />} />
          
          <Route path="/admin_pdf_form" element={<Admin_Pdf_Form />} />
          <Route path="/aicomingsoon" element={<AI_Coming_Soon />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>

    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
  
      <Router>
    
        <Routing />
        <ToastContainer />
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
