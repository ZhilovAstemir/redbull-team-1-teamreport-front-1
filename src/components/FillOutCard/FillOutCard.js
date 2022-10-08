import React, {memo} from 'react';
import styles from "../FillOutReport/FillOutReport.module.css";
import veryLow from "../../images/very-sad.svg";
import low from "../../images/sad.svg";
import okay from "../../images/neutral.svg";
import happy from "../../images/happy.svg";
import veryHappy from "../../images/very-happy.svg";

const FillOutCard = (props) => {
  return (
    <div>
      <section className={styles.moral_container}>
        <h3 className={styles.title_of_moral}>How was your {props.name} this week?</h3>
        <div className={styles.morale_box}>
          <div className={styles.icon_box}>
            <img src={veryLow} alt="sad emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Very Low</p> : (props.name === "stress" ? <p>Too High</p> :
              <p>Overwhelming</p>)}
          </div>
          <div className={styles.icon_box}>
            <img src={low} alt="low emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Low</p> : (props.name === "stress" ? <p>High</p> :
              <p>Heavy</p>)}
          </div>
          <div className={styles.icon_box}>
            <img src={okay} alt="okay emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Okay</p> : (props.name === "stress" ? <p>Okay</p> :
              <p>Okay</p>)}
          </div>
          <div className={styles.icon_box}>
            <img src={happy} alt="good emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Good</p> : (props.name === "stress" ? <p>Low</p> :
              <p>Good</p>)}
          </div>
          <div className={styles.icon_box}>
            <img src={veryHappy} alt="great emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Great</p> : (props.name === "stress" ? <p>Healthy</p> :
              <p>Great</p>)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(FillOutCard);
