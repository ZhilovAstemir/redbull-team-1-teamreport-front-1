import React, {memo} from 'react';
import styles from "./MyReports.module.css"

const MyReports = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h2>past weekly reports</h2>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default memo(MyReports);
