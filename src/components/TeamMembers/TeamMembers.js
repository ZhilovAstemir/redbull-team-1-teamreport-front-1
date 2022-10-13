import React, { memo, useEffect, useState } from "react";
import styles from "./TeamMembers.module.css";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import { connect } from "react-redux";
import { Slide } from "@mui/material";
import EditTeamInfo from "../EditTeamInfo/EditTeamInfo";
import teamService from "../../services/teamService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeamMembers = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (props.token) {
      teamService.setToken(props.token);
      teamService.getMembers(props.setMembers);
    }
  }, []);

  return (
    <>
      <HeaderForGuide />
      <div className={styles.teamMembers_container}>
        <h2 className={styles.title}>TEAM MEMBERS</h2>
        <div className={styles.hr}></div>
        <section className={styles.members_box}>
          {props.members.map((member) => (
            <div
              key={member.id}
              className={styles.members_flex}
              onClick={(e) => handleEntailmentRequest(e)}
            >
              <div className={styles.members_flex_little}>
                <div className={styles.circle}>
                  {member.firstName ? member.firstName[0] : "A"}
                  {member.lastName ? member.lastName[0] : "B"}
                </div>
                <div className={styles.members_div} key={member.id}>
                  {member.firstName ?? "firstName"}{" "}
                  {member.lastName ?? "lastName"}
                </div>
              </div>
              <a
                className={styles.btn_edit}
                href=""
                onClick={() => {
                  props.selectMember(member.id);
                  handleClickOpen();
                }}
              >
                <button>Edit</button>
              </a>
              <EditTeamInfo
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                close={handleClose}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
  member: state.member,
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  setMembers: (members) => dispatch({ type: "SET_MEMBERS", payload: members }),
  selectMember: (memberId) =>
    dispatch({ type: "SELECT_MEMBER", payload: memberId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(TeamMembers));
