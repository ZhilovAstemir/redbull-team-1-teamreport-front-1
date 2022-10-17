import React, { forwardRef, memo, useEffect, useState } from "react";
import styles from "./EditTeamInfo.module.css";
import { Button, Dialog, DialogActions, Slide } from "@mui/material";
import EditMembersModal from "../EditMembersModal/EditMembersModal";
import { connect } from "react-redux";
import memberService from "../../services/memberService";
import teamService from "../../services/teamService";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditTeamInfo = (props) => {
  const [openLeaders, setOpenLeaders] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);

  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  const handleClickOpenLeaders = () => {
    setCloneLeaders(selectedLeaders);

    setOpenLeaders(true);
  };

  const handleCloseLeaders = () => {
    setOpenLeaders(false);
  };

  const handleClickOpenMembers = () => {
    setCloneReporters(selectedReporters);

    setOpenMembers(true);
  };

  const handleCloseMembers = () => {
    setOpenMembers(false);
  };

  const [selectedMember, setSelectedMember] = useState([]);
  const [selectedLeaders, setSelectedLeaders] = useState([]);
  const [selectedReporters, setSelectedReporters] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  const [errors, setErrors] = useState({ firstName: 0, lastName: 0, title: 0 });

  const [cloneLeaders, setCloneLeaders] = useState([]);
  const [cloneReporters, setCloneReporters] = useState([]);

  function handleMemberEdit() {
    if (!errors.firstName && !errors.lastName && !errors.title) {
      memberService.setToken(props.token);
      memberService.editMember(
        props.selectedMemberId,
        firstName,
        lastName,
        title
      );
    }
  }

  useEffect(() => {
    if (props.selectedMemberId) {
      memberService.setToken(props.token);
      memberService.getMember(props.selectedMemberId, setSelectedMember);
      teamService.getLeaders(props.selectedMemberId, setSelectedLeaders);
      teamService.getReporters(props.selectedMemberId, setSelectedReporters);
    }
  }, [props.selectedMemberId]);

  useEffect(() => {
    setFirstName(selectedMember.firstName);
    setLastName(selectedMember.lastName);
    setTitle(selectedMember.title);
  }, [selectedMember]);

  useEffect(() => {
    setErrors({
      firstName: firstName?.length == 0,
      lastName: lastName?.length == 0,
      title: title?.length == 0,
    });
  }, [firstName, lastName, title]);

  return (
    <Dialog
      onClick={(e) => handleEntailmentRequest(e)}
      open={props.open}
      TransitionComponent={props.TransitionComponent}
      keepMounted
      fullScreen
      onClose={props.onClose}
    >
      <DialogActions className={styles.modal_btn_close}>
        <Button onClick={props.close}>Close</Button>
      </DialogActions>
      <div className={styles.editTeam_container}>
        <section className={styles.first_section}>
          <h1>
            Edit {selectedMember ? selectedMember.firstName : "Member"}'s
            information
          </h1>
          <p>
            You may assign leaders or team members to this person, as well as
            deactivate their account if they no longer work for your
            organization.
          </p>
        </section>
        <section className={styles.second_section}>
          <h2>Basic profile information</h2>
          <hr />
          <form className={styles.input_form_flex}>
            <label>First Name</label>
            <input
              className={styles.fn_input}
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
                if (firstName) {
                  setErrors({ ...errors, firstName: 0 });
                }
              }}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName ? (
              <p className={styles.card__validationMessage} role="alert">
                First name is required
              </p>
            ) : (
              ""
            )}
            <label>Last Name</label>
            <input
              className={styles.ln_input}
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
                if (lastName) {
                  setErrors({ ...errors, lastName: 0 });
                }
              }}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName ? (
              <p className={styles.card__validationMessage} role="alert">
                Last name is required
              </p>
            ) : (
              ""
            )}
            <label>Title</label>
            <input
              className={styles.title_input}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                if (title) {
                  setErrors({ ...errors, title: 0 });
                }
              }}
              aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.title ? (
              <p className={styles.card__validationMessage} role="alert">
                Title is required
              </p>
            ) : (
              ""
            )}
            <input
              className={styles.btn_input}
              onClick={handleMemberEdit}
              onSubmit={(e) => handleEntailmentRequest(e)}
              type="submit"
              value="Save"
            />
          </form>
        </section>
        <section className={styles.third_section}>
          <h3>
            {selectedMember ? selectedMember.firstName : "Member"} reports to
            the following leaders:
          </h3>
          <hr />
          <div className={styles.leader_flex}>
            {selectedLeaders && selectedLeaders.length ? (
              selectedLeaders.map((leader) => (
                <div key={leader.id}>
                  {leader.firstName} {leader.lastName}
                </div>
              ))
            ) : (
              <div>No leaders founded</div>
            )}
          </div>
          <a href="">
            <button onClick={handleClickOpenLeaders}>Edit Leader(s)</button>
          </a>
          <EditMembersModal
            selected={cloneLeaders}
            setSelected={setCloneLeaders}
            title={"Leader"}
            open={openLeaders}
            TransitionComponent={Transition}
            onClose={handleCloseLeaders}
            onSave={setSelectedLeaders}
          />
        </section>
        <section className={styles.third_section}>
          <h3>
            The following team members report to{" "}
            {selectedMember ? selectedMember.firstName : "Member"}:
          </h3>
          <hr />
          <div className={styles.leader_flex}>
            {selectedReporters && selectedReporters.length ? (
              selectedReporters.map((reporter) => (
                <div key={reporter.id}>
                  {reporter.firstName} {reporter.lastName}
                </div>
              ))
            ) : (
              <div>No reporters founded</div>
            )}
          </div>
          <a href="">
            <button onClick={handleClickOpenMembers}>Edit Member(s)</button>
          </a>
          <EditMembersModal
            selected={cloneReporters}
            setSelected={setCloneReporters}
            title={"Member"}
            open={openMembers}
            TransitionComponent={Transition}
            onClose={handleCloseMembers}
            onSave={setSelectedReporters}
          />
        </section>
        <section className={styles.third_section}>
          <h3>
            {selectedMember ? selectedMember.firstName : "Member"}'s invite link
          </h3>
          <hr />
          <p className={styles.text}>
            Share the following link to invite team members on{" "}
            {selectedMember ? selectedMember.firstName : "Member"}'s behalf.
          </p>
          <div className={styles.link_flex}>
            <textarea
              defaultValue={
                "https://github.com/codemakeracademy/weekly-team-report-html"
              }
              readOnly
            ></textarea>
            <button>Copy Link</button>
          </div>
        </section>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
  member: state.member,
  reporters: state.reporters,
  leaders: state.leaders,
  selectedMemberId: state.selectedMemberId,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(EditTeamInfo));
