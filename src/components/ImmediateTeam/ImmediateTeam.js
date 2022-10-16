import React from "react";
import styles from "./ImmediateTeam.module.css";
import ReportsList from "../ReportsList/ReportsList";

const ImmediateTeam = (props) => {
  return (
    <>
      {props.period != "older" ? (
        <>
          <div className={styles.content__header}>
            <div></div>
            <div className={styles.header__group}>
              <div className={styles.header__item}>Morale</div>
              <div className={styles.header__item}>Stress</div>
              <div className={styles.header__item}>Workload</div>
            </div>
          </div>
          <div className={styles.content__container}>
            <ReportsList
              week={props.period}
              team={"immediate"}
              setReportsCount={props.setReportsCount}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ImmediateTeam;
