import React, {memo} from 'react';
import styles from "../FillOutReport/FillOutReport.module.css";
import veryLow from "../../images/very-sad.svg";
import low from "../../images/sad.svg";
import okay from "../../images/neutral.svg";
import happy from "../../images/happy.svg";
import veryHappy from "../../images/very-happy.svg";
import {connect} from "react-redux";

const FillOutCard = (props) => {

  const checkInput = () => {
    switch (props.name) {
      case "morale": props.openMoraleInput(); break;
      case "stress": props.openStressInput(); break;
      case "workload": props.openWorkloadInput(); break;
    }
  };

  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  return (
    <div>
      <section className={styles.moral_container} onClick={e => handleEntailmentRequest(e)}>
        <h3 className={styles.title_of_moral}>How was your {props.name} this week?</h3>
        <div className={styles.morale_box} onClick={e => handleEntailmentRequest(e)}>
          <div className={styles.icon_box} onClick={checkInput}>
            <img src={veryLow} alt="sad emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Very Low</p> : (props.name === "stress" ? <p>Too High</p> :
              <p>Overwhelming</p>)}
          </div>
          <div className={styles.icon_box}  onClick={checkInput}>
            <img src={low} alt="low emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Low</p> : (props.name === "stress" ? <p>High</p> :
              <p>Heavy</p>)}
          </div>
          <div className={styles.icon_box}  onClick={checkInput}>
            <img src={okay} alt="okay emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Okay</p> : (props.name === "stress" ? <p>Okay</p> :
              <p>Okay</p>)}
          </div>
          <div className={styles.icon_box}  onClick={checkInput}>
            <img src={happy} alt="good emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Good</p> : (props.name === "stress" ? <p>Low</p> :
              <p>Good</p>)}
          </div>
          <div className={styles.icon_box}  onClick={checkInput}>
            <img src={veryHappy} alt="great emotion" className={styles.smile_icons}/>
            {props.name === "morale" ? <p>Great</p> : (props.name === "stress" ? <p>Healthy</p> :
              <p>Great</p>)}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMoraleInput: state.isMoraleInput,
  isStressInput: state.isStressInput,
  isWorkloadInput: state.isWorkloadInput,
})

const mapDispatchToProps = (dispatch) => ({
  openMoraleInput: () => dispatch({type: "MORALE_INPUT"}),
  openStressInput: () => dispatch({type: "STRESS_INPUT"}),
  openWorkloadInput: () => dispatch({type: "WORKLOAD_INPUT"}),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(FillOutCard));
