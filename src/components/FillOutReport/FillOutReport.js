import React, {memo} from 'react';
import styles from "./FillOutReport.module.css";
import veryLow from "../../images/very-sad.svg";
import low from "../../images/sad.svg";
import okay from "../../images/neutral.svg";
import happy from "../../images/happy.svg";
import veryHappy from "../../images/very-happy.svg";

const FillOutReport = () => {
  return (
    <div className={styles.fill_out_container}>
      <header>
        <h1 className={styles.title_name}>Welcome back, Anatoliy.</h1>
        <p className="p-4">
          Let your leader know where you're winning and struggling this week – in less than 10 minutes.
        </p>
      </header>
      <section className={styles.moral_container}>
        <h3 className={styles.title_of_moral}>How was your morale this week?</h3>
        <div className={styles.morale_box}>
          <div className={styles.icon_box}>
            <img src={veryLow} alt="sad emotion" className={styles.smile_icons}/>
            <p>Very Low</p>
          </div>
          <div className={styles.icon_box}>
            <img src={low} alt="low emotion" className={styles.smile_icons}/>
            <p>Low</p>
          </div>
          <div className={styles.icon_box}>
            <img src={okay} alt="okay emotion"className={styles.smile_icons}/>
            <p>Okay</p>
          </div>
          <div className={styles.icon_box}>
            <img src={happy} alt="good emotion" className={styles.smile_icons}/>
            <p>Good</p>
          </div>
          <div className={styles.icon_box}>
            <img src={veryHappy} alt="great emotion" className={styles.smile_icons}/>
            <p>Great</p>
          </div>
        </div>
      </section>
      <section className={styles.moral_container}>
        <h3 className={styles.title_of_moral}>How was your stress this week?</h3>
        <div className={styles.morale_box}>
          <div className={styles.icon_box}>
            <img src={veryLow} alt="sad" className={styles.smile_icons}/>
            <p>Too High</p>
          </div>
          <div className={styles.icon_box}>
            <img src={low} alt="low emotion" className={styles.smile_icons}/>
            <p>High</p>
          </div>
          <div className={styles.icon_box}>
            <img src={okay} alt="okay emotion"className={styles.smile_icons}/>
            <p>Okay</p>
          </div>
          <div className={styles.icon_box}>
            <img src={happy} alt="good emotion" className={styles.smile_icons}/>
            <p>Low</p>
          </div>
          <div className={styles.icon_box}>
            <img src={veryHappy} alt="great emotion" className={styles.smile_icons}/>
            <p>Healthy</p>
          </div>
        </div>
      </section>
      <section className={styles.moral_container}>
        <h3 className={styles.title_of_moral}>How was your morale this week?</h3>
        <div className={styles.morale_box}>
          <div className={styles.icon_box}>
            <img src={veryLow} alt="sad emotion" className={styles.smile_icons}/>
            <p>Very Low</p>
          </div>
          <div className={styles.icon_box}>
            <img src={low} alt="low" className={styles.smile_icons}/>
            <p>Low</p>
          </div>
          <div className={styles.icon_box}>
            <img src={okay} alt="okay emotion"className={styles.smile_icons}/>
            <p>Okay</p>
          </div>
          <div className={styles.icon_box}>
            <img src={happy} alt="good emotion" className={styles.smile_icons}/>
            <p>Good</p>
          </div>
          <div className={styles.icon_box}>
            <img src={veryHappy} alt="great emotion" className={styles.smile_icons}/>
            <p>Great</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(FillOutReport);
