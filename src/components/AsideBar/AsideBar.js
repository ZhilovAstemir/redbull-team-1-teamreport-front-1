import React, {memo, useState} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LaunchGuide from "../LaunchGuide/LaunchGuide";
import InviteTeamMember from "../InviteTeamMember/InviteTeamMember";
import MyCompany from "../MyCompany/MyCompany";
import MyReports from "../MyReports/MyReports";
import {connect, useSelector} from "react-redux";
import FillOutReport from "../FillOutReport/FillOutReport";
import LogIn from "../LogIn/LogIn";
import TeamMembers from "../TeamMembers/TeamMembers";
import EditTeamInfo from "../EditTeamInfo/EditTeamInfo";
import {Slide} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props}/>;
});

const AsideBar = (props) => {
  const [open, setOpen] = useState(false);
  const myData = useSelector((state) => state.myProfile);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  console.log("render");

  return (
    <>
      <div className={styles.asideBar_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
          onClick={props.openLaunchGuide}
        />
        <section className={styles.menu} onClick={e => handleEntailmentRequest(e)}>
          <div className={styles.first_menu}>
            <a onClick={props.openLaunchGuide}>
              <button>Launch Guide</button>
            </a>
            <a onClick={props.openInviteYourTeam}>
              <button>Invite Your Team</button>
            </a>
            <a>
              <button>Team Reports</button>
            </a>
            <a onClick={props.openMyReports}>
              <button>My Reports</button>
            </a>
            <a
              className={styles.fill_out_report_btn}
              onClick={props.openFillOutReport}
            >
              <button
                className={styles.fill_out_report_btn}
              >
                Fill out a Report
              </button>
            </a>
          </div>
          <div className={styles.second_menu}>
            <a>
              <button>Back to Elite</button>
            </a>
            <a onClick={props.openMyCompany}>
              <button>My Company</button>
            </a>
            <a className={styles.profile} onClick={handleClickOpen}>
              <button><SettingsIcon className={styles.setting_icon}/> My Profile</button>
            </a>
            <a onClick={props.openLogIn}>
              <button><LogoutIcon className={styles.login_icon}/>Sign In</button>
            </a>
          </div>
        </section>
        <button type="button" className={styles.feed_btn}><QuestionMarkIcon className={styles.question}/>Help</button>
        <button type="button" className={styles.help_btn}>Feedback</button>
      </div>
      <EditTeamInfo
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        close={handleClose}
        myData={myData}
      />
      {props.isLaunchGuide && <LaunchGuide/>}
      {props.isMyCompany && <MyCompany/>}
      {props.isInviteYourTeam && <InviteTeamMember/>}
      {props.isMyReports && <MyReports/>}
      {props.isFillOutReport && <FillOutReport/>}
      {props.isLogIn && <LogIn/>}
      {props.isTeamMembers && <TeamMembers/>}
      {props.isEditTeamInfo && <EditTeamInfo/>}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLaunchGuide: state.isLaunchGuide,
  isMyCompany: state.isMyCompany,
  isInviteYourTeam: state.isInviteYourTeam,
  isMyReports: state.isMyReports,
  isFillOutReport: state.isFillOutReport,
  isLogIn: state.isLogIn,
  isTeamMembers: state.isTeamMembers,
  isEditTeamInfo: state.isEditTeamInfo,
});

const mapDispatchToProps = (dispatch) => ({
  openLaunchGuide: () => dispatch({type: "LAUNCH_GUIDE"}),
  openMyCompany: () => dispatch({type: "MY_COMPANY"}),
  openInviteYourTeam: () => dispatch({type: "INVITE_TEAM"}),
  openMyReports: () => dispatch({type: "MY_REPORTS"}),
  openFillOutReport: () => dispatch({type: "FILL_OUT_REPORT"}),
  openLogIn: () => dispatch({type: "LOG_IN"}),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(AsideBar));
