import {memo, useCallback, useState} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {Link, Route, Routes} from "react-router-dom";
import LaunchGuide from "../LaunchGuide/LaunchGuide";
import InviteTeamMember from "../InviteTeamMember/InviteTeamMember";
import MyCompany from "../MyCompany/MyCompany";
import MyReports from "../MyReports/MyReports";
import TeamMembers from "../TeamMembers/TeamMembers";
import EditTeamInfo from "../EditTeamInfo/EditTeamInfo";

const AsideBar = () => {
  const [isLaunchGuide, setIsLaunchGuide] = useState(true);
  const [isMyCompany, setIsMyCompany] = useState(false);
  const [isInviteYourTeam, setIsInviteYourTeam] = useState(false);
  const [isMyReports, setIsMyReports] = useState(false);

  const openLaunchGuide = useCallback(
    () => {
      setIsLaunchGuide(true);
      setIsMyCompany(false);
      setIsInviteYourTeam(false)
      setIsMyReports(false);
    },
    [],
  );

  const openMyCompany = useCallback(
    () => {
      setIsMyCompany(true);
      setIsLaunchGuide(false);
      setIsInviteYourTeam(false)
      setIsMyReports(false);
    },
    [],
  );

  const openInviteYourTeam = useCallback(
    () => {
      setIsInviteYourTeam(true);
      setIsMyCompany(false);
      setIsLaunchGuide(false);
      setIsMyReports(false);
    },
    [],
  );

  const openMyReports = useCallback(
    () => {
      setIsInviteYourTeam(false);
      setIsMyCompany(false);
      setIsLaunchGuide(false);
      setIsMyReports(true);
    },
    [],
  );

  return (
    <>
      <div className={styles.asideBar_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
          onClick={openLaunchGuide}
        />
        <section className={styles.menu}>
          <div className={styles.first_menu}>
            <Link
              onClick={openLaunchGuide}
              to="/">
              <button>Launch Guide</button>
            </Link>
            <Link
              onClick={openInviteYourTeam}
              to="/invite_member">
              <button>Invite Your Team</button>
            </Link>
            <Link
              to="/team_report">
              <button>Team Reports</button>
            </Link>
            <Link
              onClick={openMyReports}
              to="/my_reports">
              <button>My Reports</button>
            </Link>
            <Link
              to="/fill_out_report">
              <button>Fill out a Report</button>
            </Link>
          </div>
          <div className={styles.second_menu}>
            <Link
              to="">
              <button>Back to Elite</button>
            </Link>
            <Link
              onClick={openMyCompany}
              to="/my_company">
              <button>My Company</button>
            </Link>
            <Link
              className={styles.profile}
              to="/my_profile">
              <button><SettingsIcon/> My Profile</button>
            </Link>
            <Link
              to="">
              <button><LogoutIcon/>Sign In</button>
            </Link>
          </div>
        </section>
        <button type="button" className={styles.feed_btn}><QuestionMarkIcon className={styles.question}/>Help</button>
        <button type="button" className={styles.help_btn}>Feedback</button>
      </div>
      <HeaderForGuide/>
      {isLaunchGuide && <LaunchGuide/>}
      {isMyCompany && <MyCompany/>}
      {isInviteYourTeam && <InviteTeamMember/>}
      {isMyReports && <MyReports/>}
      {/*<Routes>*/}
      {/*  <Route path="/" element={<LaunchGuide/>}/>*/}
      {/*  <Route path="/invite_member" element={<InviteTeamMember/>}/>*/}
      {/*  <Route path="/team_report" element={<TeamMembers/>}/>*/}
      {/*  <Route path="/my_reports" element={<MyReports/>}/>*/}
      {/*  <Route path="/fill_out_report" element={<TeamMembers/>}/>*/}
      {/*  /!*<Route path="/my_company" element={<MyCompany/>}/>*!/*/}
      {/*  <Route path="/my_profile" element={<EditTeamInfo/>}/>*/}
      {/*</Routes>*/}
    </>
  );
};

export default memo(AsideBar);
