import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import styles from "../InviteTeamMember/InviteTeamMember.module.css";

const CompanyRegistration = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.card__inputLabel}>First Name</label>
        <input
          {...register("companyName", {required: "Firstname is required"})}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p className={styles.card__validationMessage} role="alert">
            First name is required
          </p>
        )}
        <label className={styles.card__inputLabel}>Last Name</label>
        <input
          {...register("lastname", {required: "Lastname is required"})}
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
  );
};

export default CompanyRegistration;