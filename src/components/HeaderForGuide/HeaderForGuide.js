import React, { memo } from "react";
import styles from "./HeaderForGuide.module.css";
import logo from "../../images/main_logo.png";
import { connect } from "react-redux";

const HeaderForGuide = (props) => {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1>{props.member?.company.name ?? "ANKO Corp"}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  member: state.member,
});

export default connect(mapStateToProps)(memo(HeaderForGuide));
