import React, { memo } from "react";
import styles from "./LogInForm.module.css";
import { useForm } from "react-hook-form";
import api from "../../api/api";

const LogInForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api.post('members/login', data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.card__inputLabel}>Email</label>
        <input
          className={styles.card__input}
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
          <p className={styles.card__validationMessage} role="alert">
            {errors.email?.message}
          </p>
        )}
        <label className={styles.card__inputLabel}>Password</label>
        <input
          className={styles.card__input}
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
          <p className={styles.card__validationMessage} role="alert">
            {errors.password?.message}
          </p>
        )}

        <input className={styles.card__button} type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default memo(LogInForm);
