import {memo} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {Route, Routes} from "react-router-dom";
import LaunchGuide from "../LaunchGuide/LaunchGuide";
import InviteTeamMember from "../InviteTeamMember/InviteTeamMember";
import MyCompany from "../MyCompany/MyCompany";
import MyReports from "../MyReports/MyReports";
import TeamMembers from "../TeamMembers/TeamMembers";
import {Link} from "react-router-dom";

const AsideBar = () => {

  return (
    <>
      <div className={styles.asideBar_container}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <section className={styles.menu}>
          <div className={styles.first_menu}>
            <Link to="/lauch">
              <button>Launch Guide</button>
            </Link>
            <Link to="/invite_member">
              <button>Invite Your Team</button>
            </Link>
            <Link to="/team_report">
              <button>Team Reports</button>
            </Link>
            <Link to="/my_reports">
              <button>My Reports</button>
            </Link>
            <Link to="/fill_out_report">
              <button>Fill out a Report</button>
            </Link>
          </div>
          <div className={styles.second_menu}>
            <Link to="">
              <button>Back to Elite</button>
            </Link>
            <Link to="/my_company">
              <button>My Company</button>
            </Link>
            <Link className={styles.profile} href="">
              <button><SettingsIcon/> My Profile</button>
            </Link>
            <Link to="">
              <button><LogoutIcon/>Sign In</button>
            </Link>
          </div>
        </section>
        <button type="button" className={styles.feed_btn}><QuestionMarkIcon className={styles.question}/>Help</button>
        <button type="button" className={styles.help_btn}>Feedback</button>
      </div>
      <HeaderForGuide/>
      <Routes>
        <Route path="/lauch" element={<LaunchGuide/>}/>
        <Route path="/invite_member" element={<InviteTeamMember/>}/>
        <Route path="/team_report" element={<TeamMembers/>}/>
        <Route path="/my_reports" element={<MyReports/>}/>
        <Route path="/fill_out_report" element={<TeamMembers/>}/>
        <Route path="/my_company" element={<MyCompany/>}/>
      </Routes>
    </>
  );
};

export default memo(AsideBar);
