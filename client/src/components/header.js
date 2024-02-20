/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import defaultprofilepic from "./images/60111.png";
import logo from "./images/ColleGPT_Logo-01.svg";
import Welcome_Collegpt from "./collegptanimation";


const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {

    
    if (state && state._id) {
      setIsLoading(true);

      fetch(`https://api-collegpt.vercel.app/view-profile/${state?._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserProfile(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    }
  }, [state]);


  const defaultProfile = {
    profilePic: defaultprofilepic,
    name: "user",
    Roles: ["Student"],
  };

  if (!state?.user) {
    return (
      <header className="header headerimp">
        <section className="flex">
          <Link to="/">
            <a className=" logo-trans">
              <img className="  logo-header" src={logo} alt="College GPT" />
              College GPT
            </a>
          </Link>

          <Link to="/">
            <Welcome_Collegpt />
          </Link>

          <div className="icons">
            <div id="user-btn" className="fas fa-users"></div>
            <div id="toggle-btn" className="fas fa-moon"></div>
          </div>

         
        </section>
      </header>
    );
  }
  return (
    
    <header className="header headerimp" >
      <section className="flex">
        <Link to="/">
          <a className=" logo-trans">
            <img className="  logo-header" src={logo} alt="College GPT" />
            College GPT
          </a>
        </Link>

   

        <Link to="/">
          {" "}
          <Welcome_Collegpt />{" "}
        </Link>
        {/* <div class="chotakrnah">
        <div class="main-wrapper">
      <div class="signboard-wrapper">
        <div class="signboard">CLOSED</div>
        <div class="string"></div>
        <div class="pin pin1"></div>
        <div class="pin pin2"></div>
        <div class="pin pin3"></div>
      </div>
    </div>
    </div> */}

        <div className="icons">
        <div id="user-btn" className="fas fa-users"></div>
          <div id="toggle-btn" className="fas fa-moon"></div>
        </div>

    
        <div className="profile">
          <img src={userProfile?.profilePic || defaultProfile.profilePic} className="image" alt="" />
          <h3 className="name">{userProfile?.name || defaultProfile.name}</h3>
          <p className="role">{userProfile?.Roles[0] || defaultProfile.Roles[0]}</p>
          {state?.user && (
            <Link to="/updateProfile">
              <a className="inline-btn">View Profile</a>
            </Link>
          )}
          {state?.user && (
            <div className="flex-btn">
              <button
                onClick={() => {
                  localStorage.clear();
                  dispatch({ type: "CLEAR" });
                  toast.success("Logout Successfully!!");
                  navigate("/login");
                }}
              >
                <a className="inline-btn" style={{ marginLeft: "0rem" }}>
                  Logout
                </a>
              </button>
              <Link to="/userlist">
                <a
                  className="inline-btn"
                  style={{
                    width: "46%",
                    marginLeft: "1.5rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "6rem",
                    textAlign: "center",
                  }}
                >
                  Community
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
