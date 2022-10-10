import React, {memo, useState} from 'react';
import styles from "./TeamMembers.module.css";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import {connect} from "react-redux";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from "@mui/material";
import EditTeamInfo from "../EditTeamInfo/EditTeamInfo";

const members = [
  {
    id: Math.random(),
    name: "Aleksandr Evseev",
  },
  {
    id: Math.random(),
    name: "Nikolai Kapustin",
  },
  {
    id: Math.random(),
    name: "Anna Kotova",
  },
  {
    id: Math.random(),
    name: "Nina Mammadova",
  },
  {
    id: Math.random(),
    name: "Natalia Starkova",
  },
  {
    id: Math.random(),
    name: "Anton Tarkhanov",
  },
  {
    id: Math.random(),
    name: "Alexandr Vovchuk",
  },
]

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

  return (
    <>
      <HeaderForGuide/>
      <div className={styles.teamMembers_container}>
        <h2 className={styles.title}>TEAM MEMBERS</h2>
        <div className={styles.hr}></div>
        <section className={styles.members_box}>
          {members.map((member) => (
            <div key={member.id} className={styles.members_flex}>
              <div className={styles.members_flex_little}>
                <div
                  className={styles.circle}>
                  {member.name.split(" ")[0][0]}
                  {member.name.split(" ")[1][0]}
                </div>
                <div className={styles.members_div} key={member.id}>
                  {member.name}
                </div>
              </div>
              <a className={styles.btn_edit} href="" onClick={(e) => handleEntailmentRequest(e)}>
                <button onClick={handleClickOpen}>Edit</button>
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

// const mapDispatchToProps = (dispatch) => ({
//   openEditTeamInfo: () => dispatch({type: "EDIT_TEAM_INFO"})
// })

export default connect(null, null)(memo(TeamMembers));
