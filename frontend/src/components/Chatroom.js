import React from 'react'
import styles from "./FHome.module.css";
import profileImage from "../static/profile-1.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

function Chatroom() {
    const [userData, setUserData] = useState(null);
    const [labsData, setLabsData] = useState([]);
    
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/fac/fac_data_get/"
        );
        setUserData(response.data);
        const labsResponse = await axios.get(
          "http://127.0.0.1:8000/fac/get_lab_details/"
        );
        setLabsData(labsResponse.data.lab_names);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div>
      <header className={styles.header}>

      <div className={styles.logo} title="University Management System">
          <h2>
            FACULITY DASHBOARD
          </h2>
        </div>

        <div className={styles.navbar}>

            <Link  to="/faculty_home">
                <a href="#">
                  <span className="material-icons-sharp">home</span>
                  <h3>Home</h3>
                </a>
            </Link>

            <Link to="/course_diary">
                <a href="#">
                  <span className="material-icons-sharp">today</span>
                  <h3>Course Diary</h3>
                </a>
            </Link>

            <Link to="/chat">
                <a href="#" className={styles.active}>
                  <span className="material-icons-sharp">grid_view</span>
                  <h3>Doubts</h3>
                </a>
            </Link>

            <Link to="password.html">
              <a href="#">
                <span className="material-icons-sharp">password</span>
                <h3>Change Password</h3>
              </a>
            </Link>

            <Link to="/login">
              <a href="#"> 
                <span className="material-icons-sharp">logout</span>
                <h3>Logout</h3>
              </a>
            </Link>


        </div>
        <div id="profile-btn" className={styles.profileBtn}>
          <span className="material-icons-sharp">person</span>
        </div>
        <div className={styles.themeToggler}>
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>
      </header>
      <div className={styles.container}>
        <aside>
          <div className={styles.profile}>
            <div className={styles.top}>
              <div className={styles.profile_photo}>
                <img src={profileImage} alt="Profile" />
              </div>
              <div className={styles.info}>
                <p>
                  Hey, <b>{userData ? userData.name : "Loading..."}</b>
                </p>
                <small className={styles.textMuted}>
                  {userData ? userData.id : "Loading..."}
                </small>
              </div>
            </div>
            <div className={styles.about}>
              <h5>Department</h5>
              <p>{userData ? userData.department : "Loading..."}</p>

              <h5>DOB</h5>
              <p>{userData ? userData.dob : "Loading..."}</p>
              <h5>Phone Number</h5>
              <p>{userData ? userData.phone : "Loading..."}</p>
              <h5>Email</h5>
              <p>{userData ? userData.email : "Loading..."}</p>
              <h5>Address</h5>
              <p>Ghost town Road, New York, America</p>
            </div>
          </div>
        </aside>


        <main style={{ textAlign: 'center',marginTop:"4.6 rem",marginLeft:"150px"}}>
            <div className={`${styles.screen} ${styles.chatscreen} ${styles.active}`}>
              <div className={styles.header}>
                  <div className={styles.logo}>
                    <h1>Chatroom Name</h1>

                    <Link to="/chat">
                       <button className={styles.exitbutton} >Exit</button>
                    </Link>
                   
                  </div>
                  
              </div>
              <div className={styles.messages}>
                  <div className={`${styles.message} ${styles.mymessage}`}>
                      <div>
                          <div className={styles.name}>You</div>
                          <div className={styles.text}>Hi</div>
                      </div>
                  </div>
                  <div className={styles.update}>
                      Abc joined the conversation
                  </div>
                  <div className={`${styles.message} ${styles.othermessage}`}>
                      <div>
                          <div className={styles.name}>Abc</div>
                          <div className={styles.text}>Hi</div>
                      </div>
                  </div>
              </div>
              <div className={styles.typebox}>
              <input type="text " id="messageinput" />
              <FaPaperPlane className={styles.plane}/>
          </div>
          </div>

        </main>

        </div>
    </div>
  )
}

export default Chatroom