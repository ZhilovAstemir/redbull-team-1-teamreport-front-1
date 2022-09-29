import React, {memo} from 'react';
import styles from "./EditTeamInfo.module.css";
import {useForm} from "react-hook-form";
import {Box, TextField} from "@mui/material";

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

const EditTeamInfo = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className={styles.editTeam_container}>
      <section>
        <h1>Edit Anatoliy's information</h1>
        <p>
          You may assign leaders or team members to this person, as well as deactivate their account if they no longer
          work for your organization.
        </p>
      </section>
      <section>
        <h2>Basic profile information</h2>
        <hr/>
        <Box
          component="form"
          sx={{
            '& > :not(style)': {m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="First Name" variant="outlined"/>
          <TextField label="Last Name" variant="outlined"/>
          <TextField label="Title" variant="outlined"/>
        </Box>
      </section>
      <section>
        <h3>Anatoliy reports to the following leaders:</h3>
        <hr/>
        <div>
          {leaders.map((leader) => <div key={leader.id}>{leader.name}</div>)}
        </div>
        <a href="">
          <button>Edit Leader(s)</button>
        </a>
      </section>
      <section>
        <h3>The following team members report to Anatoliy:</h3>
        <hr/>
        <div>
          {members.map((member) => <div key={member.id}>{member.name}</div>)}
        </div>
        <a href="">
          <button>Edit Member(s)</button>
        </a>
      </section>
      <section>
        <h3>Anatoliy's invite link</h3>
        <p>Share the following link to invite team members on Anatoliy's behalf.</p>
        <textarea
          type="text"
          readOnly>https://github.com/codemakeracademy/weekly-team-report-html
        </textarea>
        <a href="">
          <button>Copy Link</button>
        </a>
      </section>
    </div>
  );
};

export default memo(EditTeamInfo);
