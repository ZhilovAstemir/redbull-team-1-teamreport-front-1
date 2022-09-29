import {memo, useEffect, useState} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {useAppDispatch} from "../../redux/hooks";
import TeamMembers from "../TeamMembers/TeamMembers";

const AsideBar = () => {
  const dispatch = useAppDispatch();
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  function enableGuidStatus() {
    setIsGuideOpen(true)
  }

  useEffect(() => {
      enableGuidStatus();
    },
    [isGuideOpen]
  );

  console.log(isGuideOpen);

  return (
    <>
      <div className={styles.asideBar_container}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <section className={styles.menu}>
          <div className={styles.first_menu}>
            <a onClick={enableGuidStatus} href="">
              <button>Launch Guide</button>
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
        <button type="button" className={styles.feed_btn}><QuestionMarkIcon className={styles.question}/>Help</button>
        <button type="button" className={styles.help_btn}>Feedback</button>
      </div>
      <HeaderForGuide/>
      {/*<LaunchGuide/>*/}
      {/*<MyCompany />*/}
      {/*<TeamMembers />*/}
    </>
  );
};

export default memo(AsideBar);
