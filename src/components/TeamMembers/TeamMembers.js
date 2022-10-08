import React, {memo} from 'react';
import styles from "./TeamMembers.module.css";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import {connect} from "react-redux";

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

const TeamMembers = (props) => {

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
                <button onClick={props.openEditTeamInfo}>Edit</button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openEditTeamInfo: () => dispatch({type: "EDIT_TEAM_INFO"})
})

export default connect(null, mapDispatchToProps)(memo(TeamMembers));
