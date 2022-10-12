import React, { memo, useState } from "react";
import styles from "./MyCompany.module.css";
import { connect } from "react-redux";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import TeamMembers from "../TeamMembers/TeamMembers";
import CompanyService from "../../services/companyService";
import authService from "../../services/authService";

const MyCompany = (props) => {
  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  const [companyName, setCompanyName] = useState("");

  const companyService = new CompanyService(props.token);

  function handleChangeCompanyNameClick() {
    companyService.changeName(companyName).then(() => {
      authService.getMemberInformation(props.setMember);
      setCompanyName("");
    });
  }

  return (
    <>
      {!props.isTeamMembers && (
        <>
          <HeaderForGuide />
          <div className={styles.myCompany_container}>
            <div className={styles.myCompany_div}>
              <section>
                <h1>
                  Edit {props.member?.company.name ?? "ANKO Corp"} Information
                </h1>
                <p>
                  You may edit the company name, as well as deactivate/activate
                  the Weekly Report Tool functionality. If you need to edit a
                  team member's information, you can access that information by
                  seeing the list of team members.
                </p>
              </section>
              <section className={styles.second_flex}>
                <h3>RENAME {props.member?.company.name ?? "ANKO Corp"}</h3>
                <form action="" onClick={(e) => handleEntailmentRequest(e)}>
                  <hr />
                  <label className={styles.label}>Change company name</label>
                  <input
                    className={styles.form__input}
                    type="text"
                    onChange={(event) => setCompanyName(event.target.value)}
                  />
                  <button
                    className={styles.form__button}
                    onClick={handleChangeCompanyNameClick}
                  >
                    Save name change
                  </button>
                </form>
              </section>
              <section className={styles.third_flex}>
                <h3>
                  SEE A LIST OF {props.member?.company.name ?? "ANKO Corp"}{" "}
                  MEMBERS
                </h3>
                <hr />
                <p>
                  If you need to edit a particular team member, you can see a
                  complete list of team members and visit their profile to make
                  edits.{" "}
                  <strong>
                    You will not be able to see a team member's weekly report.
                  </strong>
                </p>
                <a>
                  <button
                    className={styles.form__button}
                    onClick={props.openTeamMembers}
                  >
                    See All Team Members
                  </button>
                </a>
              </section>
            </div>
          </div>
        </>
      )}
      {props.isTeamMembers && <TeamMembers />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isTeamMembers: state.isTeamMembers,
  isMyCompany: state.isMyCompany,
  member: state.member,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setMember: (member) => dispatch({ type: "SET_MEMBER", payload: member }),
  openTeamMembers: () => dispatch({ type: "TEAM_MEMBERS" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(MyCompany));
