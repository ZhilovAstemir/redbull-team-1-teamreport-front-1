import React, { memo } from "react";
import { useForm } from "react-hook-form";
import styles from "./CompanyRegistrationForm.module.css";

const CompanyRegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.form__inputLabel}>Company Name</label>
        <input
          className={styles.form__input}
          {...register("companyName", {
            required: "Company Name is required",
            minLength: {
              value: 3,
              message: "Company name should be longer than 3 characters"
            },
            maxLength: {
              value: 100,
              message: "Company name should not be longer than 100 characters"
            }
          })}
          aria-invalid={errors.companyName ? "true" : "false"}
        />
        {errors.companyName && (
          <p className={styles.form__validationMessage} role="alert">
            {errors.companyName?.message}
          </p>
        )}
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
        />
        {errors.password && (
          <p className={styles.form__validationMessage} role="alert">
            {errors.password?.message}
          </p>
        )}

        <input className={styles.form__button} type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default memo(CompanyRegistrationForm);
