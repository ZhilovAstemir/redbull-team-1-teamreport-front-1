import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./InviteTeamMember.module.css";
import { styled } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";

const InviteTeamMember = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    width: "50%",
    margin: "0 auto",
    border: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardRounded sx={{ fontSize: "1rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "#f5f7f8",
    color: "#000000",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "none",
    background: "#f5f7f8",
  }));

  const CustomizedAccordion = () => {
    return (
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>The team member didn't receive your invite?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There should be some text There should be some text There should be
            some text There should be some text There should be some text
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  const [isInviteSuccessful, setIsInviteSuccessful] = useState(false);
  const [expanded, setExpanded] = useState("panel");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const onSubmit = (data) => setIsInviteSuccessful(true);

  return (
    <div className={styles.content}>
      <header>Invite Your Team</header>
      <div className={styles.container}>
        {isInviteSuccessful && (
          <div>
            <div className={styles.card}>
              <div className={styles.card__header}>
                Success! Your team member has been invited to the Weekly Report
                Tool.
              </div>
              <div className={styles.card__text}>
                Once they accept your invitation, they'll be able to create
                their reports.
              </div>
            </div>
            <CustomizedAccordion />
          </div>
        )}
        <div className={styles.card}>
          <div className={styles.card__header}>
            Enter the team member you'd like to invite.
          </div>
          <div className={styles.card__text}>
            Don't worry! You'll be able to add more team members later.
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.card__inputLabel}>First Name</label>
            <input
              {...register("firstName", { required: "Firstname is required" })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p className={styles.card__validationMessage} role="alert">
                First name is required
              </p>
            )}
            <label className={styles.card__inputLabel}>Last Name</label>
            <input
              {...register("lastname", { required: "Lastname is required" })}
              aria-invalid={errors.lastname ? "true" : "false"}
            />
            {errors.lastname?.type === "required" && (
              <p className={styles.card__validationMessage} role="alert">
                Last name is required
              </p>
            )}
            <label className={styles.card__inputLabel}>Email</label>
            <input
              {...register("mail", {
                pattern: {
                  value: emailRegexp,
                  message: "Email has invalid format",
                },
                required: "Email Address is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p className={styles.card__validationMessage} role="alert">
                {errors.mail?.message}
              </p>
            )}

            <input
              className={styles.card__button}
              type="submit"
              value="Invite"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteTeamMember;
