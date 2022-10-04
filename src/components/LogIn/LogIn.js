import React, { memo } from "react";
import styles from "./LogIn.module.css";
import CompanyRegistration from "../CompanyRegistrationForm/CompanyRegistrationForm";
import LogInForm from "../LogInForm/LogInForm";

const LogIn = () => {
  return (
      <div className={styles.container}>
        <div>
          <div>
            <div className={styles.form}>
              <h3 className="mb-0 pb-3">
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
                        <h4 className="mb-4 pb-3 h4-sign">Log In</h4>
                        {/*<div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className={styles.formStyle}
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className={styles.formStyle}
                            placeholder="Your Password"
                            id="logpass-password"
                            autoComplete="off"
                          />
                        </div>
                        <a href="#" className="btn-sign mt-4 sign-link">
                          submit
                        </a>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link-in sign-link">
                            Forgot your password?
                          </a>
                        </p>*/}
                        <LogInForm />
                      </div>
                    </div>
                  </div>
                  <div className={styles.card_back}>
                    <div className={styles.center_wrap}>
                      <div className={styles.section}>
                        <h4 className="mb-4 pb-3 h4-sign">Sign Up</h4>
                        {/*<div className="form-group">
                          <input
                            type="text"
                            name="logname"
                            className={styles.formStyle}
                            placeholder="Your Full Name"
                            id="logname"
                            autoComplete="off"
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className={styles.formStyle}
                            placeholder="Your Email"
                            id="autocomplete"
                            autoComplete="off"
                          />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className={styles.formStyle}
                            placeholder="Your Password"
                            id="logpass-autocomplete"
                            autoComplete="off"
                          />
                        </div>
                        <a href="#" className="btn-sign mt-4 sign-link">
                          submit
                        </a>*/}
                        <CompanyRegistration/>
                      </div>
                    </div>
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
