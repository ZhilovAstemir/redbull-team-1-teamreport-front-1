import {memo, useCallback, useEffect, useState} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import LaunchGuide from "../LaunchGuide/LaunchGuide";


const AsideBar = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  useEffect(()=> {
    function enableGuidStatus(prevState) {
      setIsGuideOpen((prevState => !prevState))
    }
  },
    [isGuideOpen]
  );

  console.log(isGuideOpen);
  console.log("render");

  return (
    <>
      <div className={styles.asideBar_container}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <section className={styles.menu}>
          <div className={styles.first_menu}>
            <a href="">
              <button onClick={enableGuidStatus(isGuideOpen)}>Launch Guide</button>
            </a>
            <a href="">
              <button>Invite Your Team</button>
            </a>
            <a href="">
              <button>Team Reports</button>
            </a>
            <a href="">
              <button>My Reports</button>
            </a>
            <a href="">
              <button>Fill out a Report</button>
            </a>
          </div>
          <div className={styles.second_menu}>
            <a href="">
              <button>Back to Elite</button>
            </a>
            <a href="">
              <button>My Company</button>
            </a>
            <a className={styles.profile} href="">
              <button><SettingsIcon/> My Profile</button>
            </a>
            <a href="">
              <button><LogoutIcon/>Sign In</button>
            </a>
          </div>
        </section>
      </div>
      <HeaderForGuide/>
      {
        !isGuideOpen &&
        <>

          <LaunchGuide/>
        </>
      }


    </>
  );
};

export default memo(AsideBar);
