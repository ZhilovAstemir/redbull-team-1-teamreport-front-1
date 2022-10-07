import React, { memo } from "react";
import styles from "./LogIn.module.css";
import CompanyRegistration from "../CompanyRegistrationForm/CompanyRegistrationForm";
import LogInForm from "../LogInForm/LogInForm";

const LogIn = () => {


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>
          <span>Log In&nbsp;&nbsp;&nbsp;</span>
          <span>Sign Up</span>
        </h3>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="reg-log"
          name="reg-log"
        />
        <label htmlFor="reg-log"></label>
        <div className={styles.card_3d_wrap}>
          <div className={styles.card_3d_wrapper}>
            <div className={styles.card_front}>
              <div className={styles.center_wrap}>
                <div className={styles.section}>
                  <h4>Log In</h4>
                  <LogInForm />
                </div>
              </div>
            </div>
            <div className={styles.card_back}>
              <div className={styles.center_wrap}>
                <div className={styles.section}>
                  <h4>Sign Up</h4>
                  <CompanyRegistration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LogIn);
