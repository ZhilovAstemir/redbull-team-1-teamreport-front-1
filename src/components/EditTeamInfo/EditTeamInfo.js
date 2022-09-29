import React, {memo} from 'react';
import styles from "./EditTeamInfo.module.css";
import {useForm} from "react-hook-form";
import EditMembersModal from "../EditMembersModal/EditMembersModal";
import {Box, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";

const leaders = [
  {
    id: Math.random(),
    name: "Nikolai Kapustin",
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
];
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
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditTeamInfo = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(true);

  return (
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
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
          <button>Edit Leader(s)</button>
        </a>
      </section>
      <section className={styles.third_section}>
        <h3>The following team members report to Anatoliy:</h3>
        <hr/>
        <div className={styles.leader_flex}>
          {members.map((member) => <div key={member.id}>{member.name}</div>)}
        </div>
        <a href="">
          <button>Edit Member(s)</button>
          <EditMembersModal props={{open, handleOpen, handleClose}}/>
        </a>
      </section>
      <section className={styles.third_section}>
        <h3>Anatoliy's invite link</h3>
        <hr/>
        <p className={styles.text}>Share the following link to invite team members on Anatoliy's behalf.</p>
        <div className={styles.link_flex}>
        <textarea
          readOnly>https://github.com/codemakeracademy/weekly-team-report-html
        </textarea>
          <button>Copy Link</button>
        </div>
      </section>
    </div>
  );
};

export default memo(EditTeamInfo);
