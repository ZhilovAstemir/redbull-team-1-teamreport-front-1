import React, { memo, useState } from "react";
import styles from "./FillOutReport.module.css";
import clsx from "clsx";
import FillOutCard from "../FillOutCard/FillOutCard";
import { connect, useDispatch, useSelector } from "react-redux";
import ReportService from "../../services/reportService";

const names = {
  morale: "morale",
  stress: "stress",
  workload: "workload",
};

const FillOutReport = (props) => {
  const dispatch = useDispatch();
  const [countForHigh, setCountForHigh] = useState(600);
  const [countForLow, setCountForLow] = useState(600);
  const [countElse, setCountForElse] = useState(400);
  const [morale, setMorale] = useState(0);
  const [stress, setStress] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [moraleComment, setMoraleComment] = useState("");
  const [stressComment, setStressComment] = useState("");
  const [workloadComment, setWorkloadComment] = useState("");
  const [highComment, setHighComment] = useState("");
  const [lowComment, setLowComment] = useState("");
  const [elseComment, setElseComment] = useState("");
  const [period, setPeriod] = useState(0);
  const token = useSelector((state) => state.token);
  const reportService = new ReportService(token);
  const [isReported, setIsReported] = useState(false);

  let reportErrors = {
    morale: false,
    stress: false,
    workload: false,
    highComment: false,
    lowComment: false,
  };

  const checkReport = () => {
    if (morale === 0) {
      reportErrors.morale = true;
    }
    if (stress === 0) {
      reportErrors.stress = true;
    }
    if (workload === 0) {
      reportErrors.workload = true;
    }
    if (highComment.length === 0) {
      reportErrors.highComment = true;
    }
    if (lowComment.length === 0) {
      reportErrors.lowComment = true;
    }
    return !Object.values(reportErrors).includes(true);
  };

  const date = new Date();

  const currentDateStart = new Date(
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7))
  );
  const currentDateEnd = new Date(currentDateStart);
  currentDateEnd.setDate(currentDateStart.getDate() + 6);

  const previousDateStart = new Date(currentDateStart);
  previousDateStart.setDate(previousDateStart.getDate() - 7);
  const previousDateEnd = new Date(currentDateEnd);
  previousDateEnd.setDate(previousDateEnd.getDate() - 7);

  const formatDate = (dateStr) => {
    let dateToFormat = new Date(dateStr);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[dateToFormat.getMonth()]} ${dateToFormat.getDate()}`;
  };

  const getWeek = (period) => {
    if (period == 0) {
      return {
        dateStart: currentDateStart,
        dateEnd: currentDateEnd,
      };
    } else {
      return {
        dateStart: previousDateStart,
        dateEnd: previousDateEnd,
      };
    }
  };

  function clearFields() {
    setCountForHigh(600);
    setCountForLow(600);
    setCountForElse(400);
    setMorale(0);
    setStress(0);
    setWorkload(0);
    setMoraleComment("");
    setStressComment("");
    setWorkloadComment("");
    setHighComment("");
    setLowComment("");
    setElseComment("");
    setPeriod(0);
    setIsReported(false);
  }

  const sendReport = (e) => {
    e.preventDefault();
    setIsReported(true);
    if (checkReport()) {
      let report = {
        morale,
        moraleComment,
        stress,
        stressComment,
        workload,
        workloadComment,
        highComment,
        lowComment,
        elseComment,
        week: getWeek(period),
      };
      reportService.sendReport(report);

      clearFields();
    }
  };

  return (
    <div className={styles.fill_out_container}>
      <header>
        <h1 className={styles.title_name}>
          Welcome back, {props.member?.firstName ?? "User"}
        </h1>
        <p className="p-4">
          Let your leader know where you're winning and struggling this week –
          in less than 10 minutes.
        </p>
      </header>
      <FillOutCard name={names.morale} setEmotion={setMorale} value={morale} />
      {(props.isMoraleInput || moraleComment) && (
        <textarea
          value={moraleComment}
          onChange={(e) => setMoraleComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
      {isReported && morale === 0 && (
        <p className={styles.required__message}>Morale is required</p>
      )}
      <FillOutCard name={names.stress} setEmotion={setStress} value={stress} />
      {(props.isStressInput || stressComment) && (
        <textarea
          value={stressComment}
          onChange={(e) => setStressComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
      {isReported && stress === 0 && (
        <p className={styles.required__message}>Stress is required</p>
      )}
      <FillOutCard
        name={names.workload}
        setEmotion={setWorkload}
        value={workload}
      />
      {(props.isWorkloadInput || workloadComment) && (
        <textarea
          value={workloadComment}
          onChange={(e) => setWorkloadComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
      {isReported && workload === 0 && (
        <p className={styles.required__message}>Workload is required</p>
      )}
      <section
        className={clsx(styles.moral_container, styles.moral_container_high)}
      >
        <h3 className={styles.title_of_moral}>What was your high this week?</h3>
        <textarea
          value={highComment}
          onChange={(e) => {
            setHighComment(e.target.value);
            setCountForHigh(600 - e.target.value.length);
          }}
          className={styles.textarea_high}
          maxLength={600}
          placeholder="What was your personal or professional high this week? What's the one thing you accomplished at work this week?"
        ></textarea>
        <div className={styles.textarea_counter}>{countForHigh}</div>
        {isReported && highComment.length === 0 && (
          <p className={styles.required__message}>Fill out your high</p>
        )}
      </section>
      <section
        className={clsx(styles.moral_container, styles.moral_container_high)}
      >
        <h3 className={styles.title_of_moral}>What was your low this week?</h3>
        <textarea
          value={lowComment}
          onChange={(e) => {
            setLowComment(e.target.value);
            setCountForLow(600 - e.target.value.length);
          }}
          className={styles.textarea_high}
          maxLength={600}
          placeholder="What was your personal low this week?"
        ></textarea>
        <div className={styles.textarea_counter}>{countForLow}</div>
        {isReported && lowComment.length === 0 && (
          <p className={styles.required__message}>Fill out your high</p>
        )}
      </section>
      <section
        className={clsx(styles.moral_container, styles.moral_container_high)}
      >
        <h3 className={styles.title_of_moral}>Anything else?</h3>
        <textarea
          value={elseComment}
          onChange={(e) => {
            setElseComment(e.target.value);
            setCountForElse(400 - e.target.value.length);
          }}
          className={styles.textarea_high}
          maxLength={400}
          placeholder="Is there anything else you would like to share with your leader? *Optional"
        ></textarea>
        <div className={styles.textarea_counter}>{countElse}</div>
      </section>
      <section
        className={clsx(styles.moral_container, styles.moral_container_high)}
      >
        <h3 className={styles.title_of_moral}>Date range</h3>
        <form onSubmit={(e) => sendReport(e)}>
          <label className={styles.form__label}>Choose period</label>
          <select
            className={styles.week_picker}
            defaultValue={period}
            onChange={(event) => setPeriod(+event.target.value)}
          >
            <option value={0}>
              Current period (
              {formatDate(currentDateStart) +
                " - " +
                formatDate(currentDateEnd)}
              )
            </option>
            <option value={1}>
              Previous period (
              {formatDate(previousDateStart) +
                " - " +
                formatDate(previousDateEnd)}
              )
            </option>
          </select>
          {isReported ? (
            <p className={styles.required}>
              All fields are required unless marked as optional.
            </p>
          ) : (
            ""
          )}

          <input
            type="submit"
            value="Send Weekly Report"
            className={styles.sent_moral}
          />
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMoraleInput: state.isMoraleInput,
  isStressInput: state.isStressInput,
  isWorkloadInput: state.isWorkloadInput,
  member: state.member,
});

export default connect(mapStateToProps, null)(memo(FillOutReport));
