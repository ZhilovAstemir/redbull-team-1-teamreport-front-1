import React, {forwardRef, memo, useState} from 'react';
import styles from "./EditTeamInfo.module.css";
import {useForm} from "react-hook-form";
import {Button, Dialog, DialogActions, Slide} from "@mui/material";
import EditMembersModal from "../EditMembersModal/EditMembersModal";
import {useSelector} from "react-redux";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditTeamInfo = (props) => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const [openLeaders, setOpenLeaders] = useState(false);
  const [openMembers, setOpenMembers] = useState(false)

  const onSubmit = data => console.log(data);
  const leaders = useSelector((state) => state.leaders);
  const members = useSelector((state) => state.members);
  const title = useSelector((state) => state.title)
  const [firstName, setFirstName] = useState(props.myData ? props.myData.myName : props.name);
  const [lastName, setLastName] = useState(props.myData ? props.myData.myLastName : props.lastName);
  const [position, setposition] = useState(props.myData ? props.myData.myPosition : props.title);


  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  const handleClickOpenLeaders = () => {
    setOpenLeaders(true);
  };

  const handleCloseLeaders = () => {
    setOpenLeaders(false);
  };

  const handleClickOpenMembers = () => {
    setOpenMembers(true);
  };

  const handleCloseMembers = () => {
    setOpenMembers(false);
  };


  return (
    <Dialog
      onSubmit={handleSubmit(onSubmit)}
      open={props.open}
      TransitionComponent={props.TransitionComponent}
      keepMounted
      fullScreen
      onClose={props.onClose}
    >
      <DialogActions className={styles.modal_btn_close}>
        <p className={styles.modal_title}>{title}.</p>
        <Button onClick={props.close}>Close</Button>
      </DialogActions>
      <div className={styles.editTeam_container}>
        <section className={styles.first_section}>
          <h1>Edit Anatoliy's information</h1>
          <p>
            You may assign leaders or team members to this person, as well as deactivate their account if they no longer
            work for your organization.
          </p>
        </section>
        <section className={styles.second_section}>
          <h2>Basic profile information</h2>
          <hr/>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.input_form_flex}
          >
            <label>First Name</label>
            <input
              defaultValue={firstName}
              className={styles.fn_input}
              {...register("firstName", {required: "Firstname is required"})}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p className={styles.card__validationMessage} role="alert">
                First name is required
              </p>
            )}
            <label>Last Name</label>
            <input
              defaultValue={lastName}
              className={styles.ln_input}
              {...register("lastname", {required: "Lastname is required"})}
              aria-invalid={errors.lastname ? "true" : "false"}
            />
            {errors.lastname?.type === "required" && (
              <p className={styles.card__validationMessage} role="alert">
                Last name is required
              </p>
            )}
            <label>Title</label>
            <input
              defaultValue={position}
              className={styles.title_input}
              {...register("mail", {
                required: "Title is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p className={styles.card__validationMessage} role="alert">
                {errors.mail?.message}
              </p>
            )}
            <input
              className={styles.btn_input}
              type="submit"
              value="Save"
            />
          </form>
        </section>
        <section className={styles.third_section}>
          <h3>Anatoliy reports to the following leaders:</h3>
          <hr/>
          <div className={styles.leader_flex}>
            {leaders.map((leader) => <div key={leader.id}>{leader.name}</div>)}
          </div>
          <a href="">
            <button onClick={handleClickOpenLeaders}>Edit Leader(s)</button>
          </a>
          <EditMembersModal
            people={leaders}
            title={"Leader"}
            open={openLeaders}
            TransitionComponent={Transition}
            onClose={handleCloseLeaders}
          />
        </section>
        <section className={styles.third_section}>
          <h3>The following team members report to Anatoliy:</h3>
          <hr/>
          <div className={styles.leader_flex}>
            {members.map((member) => <div key={member.id}>{member.name}</div>)}
          </div>
          <a href="">
            <button onClick={handleClickOpenMembers}>Edit Member(s)</button>
          </a>
          <EditMembersModal
            people={members}
            title={"Member"}
            open={openMembers}
            TransitionComponent={Transition}
            onClose={handleCloseMembers}
          />
        </section>
        <section className={styles.third_section}>
          <h3>Anatoliy's invite link</h3>
          <hr/>
          <p className={styles.text}>Share the following link to invite team members on Anatoliy's behalf.</p>
          <div className={styles.link_flex}>
        <textarea
          defaultValue={"https://github.com/codemakeracademy/weekly-team-report-html"}
          readOnly>
        </textarea>
            <button>Copy Link</button>
          </div>
        </section>
      </div>
    </Dialog>
  );
};

export default memo(EditTeamInfo);
