import {memo} from "react";
import styles from './AsideBar.module.css';
import clsx from "clsx";
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const AsideBar = () => {
  console.log("render");

  return (
    <div className={styles.asideBar_container}>
      <img className={styles.logo} src={logo} alt="logo"/>
      <section className={styles.menu}>
        <div className={styles.first_menu}>
          <a href="">Launch Guide</a>
          <a href="">Invite Your Team</a>
          <a href="">Team Reports</a>
          <a href="">My Reports</a>
          <a href="">Fill out a Report</a>
        </div>
        <div className={styles.second_menu}>
          <a  href=""> Back to Elite</a>
          <a href="">My Company</a>
          <a className={styles.profile} href=""><SettingsIcon /> My Profile</a>
          <a href=""><LogoutIcon/>Sign In</a>
        </div>
      </section>
    </div>
  );
};

export default memo(AsideBar);
