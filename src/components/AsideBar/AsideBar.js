import {memo} from "react";
import styles from './AsideBar.module.css';
import logo from "../../images/main_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {Link} from "react-router-dom";
import LaunchGuide from "../LaunchGuide/LaunchGuide";
import InviteTeamMember from "../InviteTeamMember/InviteTeamMember";
import MyCompany from "../MyCompany/MyCompany";
import MyReports from "../MyReports/MyReports";
import {connect} from "react-redux";
import FillOutReport from "../FillOutReport/FillOutReport";

const AsideBar = (props) => {

  return (
    <>
      <div className={styles.asideBar_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
          onClick={props.openLaunchGuide}
        />
        <section className={styles.menu}>
          <div className={styles.first_menu}>
            <Link
              onClick={props.openLaunchGuide}
              to="/">
              <button>Launch Guide</button>
            </Link>
            <Link
              onClick={props.openInviteYourTeam}
              to="/invite_member">
              <button>Invite Your Team</button>
            </Link>
            <Link
              to="/team_report">
              <button>Team Reports</button>
            </Link>
            <Link
              onClick={props.openMyReports}
              to="/my_reports">
              <button>My Reports</button>
            </Link>
            <Link
              className={styles.fill_out_report_btn}
              to="/fill_out_report">
              <button
                onClick={props.openFillOutReport}
                className={styles.fill_out_report_btn}
              >
                Fill out a Report
              </button>
            </Link>
          </div>
          <div className={styles.second_menu}>
            <Link
              to="">
              <button>Back to Elite</button>
            </Link>
            <Link
              onClick={props.openMyCompany}
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
      {props.isLaunchGuide && <LaunchGuide />}
      {props.isMyCompany && <MyCompany />}
      {props.isInviteYourTeam && <InviteTeamMember />}
      {props.isMyReports && <MyReports />}
      {props.isFillOutReport && <FillOutReport />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLaunchGuide: state.isLaunchGuide,
  isMyCompany: state.isMyCompany,
  isInviteYourTeam: state.isInviteYourTeam,
  isMyReports: state.isMyReports,
  isFillOutReport: state.isFillOutReport,
});

const mapDispatchToProps = (dispatch) => ({
  openLaunchGuide: () => dispatch({type: "LAUNCH_GUIDE"}),
  openMyCompany: () => dispatch({type: "MY_COMPANY"}),
  openInviteYourTeam: () => dispatch({type: "INVITE_TEAM"}),
  openMyReports: () => dispatch({type: "MY_REPORTS"}),
  openFillOutReport: () => dispatch({type: "FILL_OUT_REPORT"})
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(AsideBar));
