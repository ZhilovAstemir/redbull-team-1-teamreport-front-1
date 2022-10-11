import React, {memo, useState} from 'react';
import styles from "./TeamMembers.module.css";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import {connect, useSelector} from "react-redux";
import {Slide} from "@mui/material";
import EditTeamInfo from "../EditTeamInfo/EditTeamInfo";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeamMembers = (props) => {
  const members = useSelector((state) => state.members);
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
            <div key={member.id} className={styles.members_flex}
                 onClick={(e) => handleEntailmentRequest(e)}
            >
              <div className={styles.members_flex_little}>
                <div
                  className={styles.circle}>
                  {member.name.split(" ")[0][0]}
                  {member.name.split(" ")[1][0]}
                  <EditTeamInfo
                    name={member.name.split(" ")[0]}
                    lastName={member.name.split(" ")[1]}
                    title={member.title}
                    open={open}
                    TransitionComponent={Transition}
                    onClose={handleClose}
                    close={handleClose}
                  />
                </div>
                <div className={styles.members_div} key={member.id}>
                  {member.name}
                </div>

              </div>
              <a className={styles.btn_edit} href="" onClick={handleClickOpen}>
                <button>Edit</button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};


export default connect(null, null)(memo(TeamMembers));
