import React, {memo} from 'react';
import styles from "./HeaderForGuide.module.css";
import logo from "../../images/main_logo.png"
import {connect} from "react-redux";


const HeaderForGuide = (props) => {
  console.log(props.title);
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logo"/>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.title,
})

export default connect(mapStateToProps)(memo(HeaderForGuide));
