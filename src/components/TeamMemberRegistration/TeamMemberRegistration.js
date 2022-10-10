import React, { memo } from "react";
import { useForm } from "react-hook-form";
import styles from "./TeamMemberRegistration.module.css";
import { registerTeamMemberQuery } from "../../api/api";

const TeamMemberRegistration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    registerTeamMemberQuery(data);
  };

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <div className={styles.container}>
      <div className={styles.card__header}>Team Member Registration</div>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input__group}>
            <label className={styles.form__inputLabel}>First Name</label>
            <input
              className={styles.form__input}
              {...register("firstname", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name should be longer than 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "First name should not be longer than 50 characters",
                },
              })}
              aria-invalid={errors.firstname ? "true" : "false"}
            />
            {errors.firstname && (
              <p className={styles.form__validationMessage} role="alert">
                {errors.firstname?.message}
              </p>
            )}
          </div>
          <div className={styles.input__group}>
            <label className={styles.form__inputLabel}>Last Name</label>
            <input
              className={styles.form__input}
              {...register("lastname", {
                required: "Company name is required",
                minLength: {
                  value: 3,
                  message: "Last name should be longer than 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Last name should not be longer than 50 characters",
                },
              })}
              aria-invalid={errors.lastname ? "true" : "false"}
            />
            {errors.lastname && (
              <p className={styles.form__validationMessage} role="alert">
                {errors.lastname?.message}
              </p>
            )}
          </div>
          <div className={styles.input__group}>
            <label className={styles.form__inputLabel}>Title</label>
            <input
              className={styles.form__input}
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title should be longer than 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Title should not be longer than 50 characters",
                },
              })}
              aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.title && (
              <p className={styles.form__validationMessage} role="alert">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className={styles.input__group}>
            <label className={styles.form__inputLabel}>Email</label>
            <input
              className={styles.form__input}
              {...register("email", {
                pattern: {
                  value: emailRegexp,
                  message: "Email has invalid format",
                },
                required: "Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className={styles.form__validationMessage} role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className={styles.input__group}>
            <label className={styles.form__inputLabel}>Password</label>
            <input
              className={styles.form__input}
              {...register("password", {
                pattern: {
                  value: passwordRegexp,
                  message:
                    "Password should have at least 5 characters and 1 symbol",
                },
                required: "Password is required",
              })}
              aria-invalid={errors.password ? "true" : "false"}
              type="password"
            />
            {errors.password && (
              <p className={styles.form__validationMessage} role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className={styles.form__button}
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default memo(TeamMemberRegistration);
