import React, {memo} from 'react';
import styles from "./HeaderForGuide.module.css";
import logo from "../../images/main_logo.png"

const HeaderForGuide = () => {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logo"/>
        <h1>Launch Guide</h1>
      </div>
    </div>
  );
};

export default memo(HeaderForGuide);
