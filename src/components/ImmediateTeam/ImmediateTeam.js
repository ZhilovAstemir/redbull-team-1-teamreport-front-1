import React from 'react';
import styles from "./ImmediateTeam.module.css";

const ImmediateTeam = () => {
  return (
    <>
      <div className={styles.content__header}>
        <div></div>
        <div className={styles.header__group}>
          <div className={styles.header__item}>Morale</div>
          <div className={styles.header__item}>Stress</div>
          <div className={styles.header__item}>Workload</div>
        </div>
      </div>
      <div>

      </div>
    </>

  );
};

export default ImmediateTeam;