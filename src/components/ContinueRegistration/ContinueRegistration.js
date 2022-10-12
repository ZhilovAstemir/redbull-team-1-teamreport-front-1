import React, { memo, useEffect } from "react";
import styles from "./ContinueRegistration.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import authService from "../../services/authService";

const ContinueRegistration = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    authService.continueRegistration(data);
    authService.getMemberInformation(props.setMember);
  };

  useEffect(() => {
    if (props.member && props.member.password) {
      props.openLaunchGuide();
    }
  }, [props.member]);

  const passwordRegexp = /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{5,}$/;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.card_3d_wrap}>
          <div className={styles.card_3d_wrapper}>
            <div className={styles.center_wrap}>
              <div className={styles.section}>
                <h4>Continue Registration</h4>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.input__group}>
                    <label className={styles.card__inputLabel}>Title</label>
                    <input
                      className={styles.card__input}
                      {...register("title", {
                        required: "Title is required",
                      })}
                      aria-invalid={errors.title ? "true" : "false"}
                    />
                    {errors.title && (
                      <p
                        className={styles.card__validationMessage}
                        role="alert"
                      >
                        {errors.title?.message}
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
                      <p
                        className={styles.card__validationMessage}
                        role="alert"
                      >
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <input
                    className={styles.card__button}
                    type="submit"
                    value="Ok"
                  />
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  member: state.member,
});

const mapDispatchToProps = (dispatch) => ({
  openLaunchGuide: () => dispatch({ type: "LAUNCH_GUIDE" }),
  setMember: (member) => dispatch({ type: "SET_MEMBER", payload: member }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ContinueRegistration));
