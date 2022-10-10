import React, { memo } from "react";
import { useForm } from "react-hook-form";
import styles from "./CompanyRegistrationForm.module.css";
import { registerCompanyQuery } from "../../api/api";

const CompanyRegistrationForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    props.authService.registerCompany(data);
  };

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__group}>
        <div className={styles.input__group}>
          <label className={styles.form__inputLabel}>First Name</label>
          <input
            className={styles.form__input}
            {...register("firstName", {
              required: "First Name is required",
              minLength: {
                value: 3,
                message: "First name should be longer than 3 characters",
              },
              maxLength: {
                value: 50,
                message: "First name should not be longer than 50 characters",
              },
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName && (
            <p className={styles.form__validationMessage} role="alert">
              {errors.firstName?.message}
            </p>
          )}
        </div>
        <div className={styles.input__group}>
          <label className={styles.form__inputLabel}>Last Name</label>
          <input
            className={styles.form__input}
            {...register("lastName", {
              required: "Last Name is required",
              minLength: {
                value: 3,
                message: "Last name should be longer than 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Last name should not be longer than 50 characters",
              },
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName && (
            <p className={styles.form__validationMessage} role="alert">
              {errors.lastName?.message}
            </p>
          )}
        </div>
      </div>
      <div className={styles.form__group}>
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
          <label className={styles.form__inputLabel}>Company Name</label>
          <input
            className={styles.form__input}
            {...register("companyName", {
              required: "Company Name is required",
              minLength: {
                value: 3,
                message: "Company name should be longer than 3 characters",
              },
              maxLength: {
                value: 100,
                message:
                  "Company name should not be longer than 100 characters",
              },
            })}
            aria-invalid={errors.companyName ? "true" : "false"}
          />
          {errors.companyName && (
            <p className={styles.form__validationMessage} role="alert">
              {errors.companyName?.message}
            </p>
          )}
        </div>
      </div>
      <div className={styles.form__group}>
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
                message: "Password has invalid format",
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
      </div>
      <input className={styles.form__button} type="submit" value="Sign Up" />
    </form>
  );
};

export default memo(CompanyRegistrationForm);
