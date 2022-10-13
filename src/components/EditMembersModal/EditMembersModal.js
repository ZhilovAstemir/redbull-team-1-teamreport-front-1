import React, { memo, useEffect } from "react";
import { Dialog } from "@mui/material";
import styles from "./EditMembersModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import teamService from "../../services/teamService";

const EditMembersModal = (props) => {
  useEffect(() => {
    if (props.token) {
      teamService.setToken(props.token);
      teamService.getMembers(props.setMembers);
    }
  }, [props.selected]);

  const handleSaveChanges = () => {
    if (props.title === "Leader") {
      teamService.setLeaders(
        props.selectedMemberId,
        props.selected.map((x) => x.id)
      );
    } else if (props.title === "Member") {
      teamService.setReporters(
        props.selectedMemberId,
        props.selected.map((x) => x.id)
      );
    } else console.log("Can't read modal title!");
    props.onSave(props.selected);
    props.onClose();
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={props.TransitionComponent}
      keepMounted
      onClose={() => {
        props.setSelected(props.selected ?? []);
        props.onClose();
      }}
      aria-describedby="alert-dialog-slide-description"
      className={styles.modal_main}
    >
      <div className={styles.modal_container}>
        <div className={styles.title_flex}>
          <h1>Edit {props.title}(s).</h1>
          <CloseIcon
            className={styles.modal_icon_close}
            onClick={() => {
              props.setSelected(props.selected ?? []);
              props.onClose();
            }}
          />
        </div>
        <p>
          By default, the person who sent you the invite will receive your
          weekly report. You may also select the person you report to directly
          as an additional leader.
        </p>
        <p>
          Pro Tip: You can change who sees your report in your profile settings.
        </p>
        <div className={styles.modal_flex}>
          {props.selected
            ? props.selected.map((member) => (
                <div
                  className={styles.box_flex}
                  key={member.id}
                  onClick={() => {
                    if (props.selected) {
                    }
                    props.setSelected(
                      props.selected.filter((x) => x.id !== member.id)
                    );
                  }}
                >
                  <button className={styles.modal_btn}>
                    {member.firstName} {member.lastName}
                  </button>
                  <CloseIcon className={styles.modal_icon} />
                </div>
              ))
            : ""}
        </div>
        <select
          className={styles.select}
          placeholder={"Select ..."}
          value={0}
          onChange={(event) => {
            if (props.selected && props.members) {
            }
            props.setSelected(
              [].concat(
                props.selected,
                props.members.filter((x) => x.id === event.target.value)
              )
            );
          }}
        >
          <option value={0}>Select . . .</option>
          {props.members && props.selected && props.selectedMemberId
            ? props.members
                .filter(
                  (member) =>
                    !props.selected.find((x) => x.id === member.id) &&
                    member.id !== props.selectedMemberId
                )
                .map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.firstName + " " + member.lastName}
                  </option>
                ))
            : ""}
        </select>
        <button className={styles.modal_save_btn} onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
  members: state.members,
  selectedMemberId: state.selectedMemberId,
});

const mapDispatchToProps = (dispatch) => ({
  setMembers: (members) => dispatch({ type: "SET_MEMBERS", payload: members }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(EditMembersModal));
