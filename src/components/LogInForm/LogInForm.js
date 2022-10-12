import React, { memo, useEffect } from "react";
import styles from "./LogInForm.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const LogInForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    props.authService.logIn(data, props.setToken);
  };

  useEffect(() => {
    if (props.token) {
      props.authService.getMemberInformation(props.setMember);
    }
  }, [props.token]);

  useEffect(() => {
    if (props.member) {
      if (!props.member.password) props.openContinueRegistration();
      else props.openLaunchGuide();
    }
  }, [props.member]);

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input__group}>
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
      </div>
      <div className={styles.input__group}>
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
          type="password"
        />
        {errors.password && (
          <p className={styles.card__validationMessage} role="alert">
            {errors.password?.message}
          </p>
        )}
      </div>
      <input className={styles.card__button} type="submit" value="Log In" />
      <button className={styles.back_btn} onClick={props.closeLoginPage}>
        Back
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  member: state.member,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch({ type: "SET_TOKEN", payload: token }),
  setMember: (member) => dispatch({ type: "SET_MEMBER", payload: member }),
  openLaunchGuide: () => dispatch({ type: "LAUNCH_GUIDE" }),
  openContinueRegistration: () =>
    dispatch({ type: "OPEN_CONTINUE_REGISTRATION" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(LogInForm));
