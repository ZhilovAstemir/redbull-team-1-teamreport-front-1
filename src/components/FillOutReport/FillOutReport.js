import React, { memo, useRef, useState } from "react";
import styles from "./FillOutReport.module.css";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
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
  const [value, setValue] = useState([null, null]);
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
  const token = useSelector((state) => state.token);
  const reportService = new ReportService(token);
  const [isReported, setIsReported] = useState(false);

  let reportErrors = {
    morale: false,
    stress: false,
    workload: false,
    highComment: false,
    lowComment: false,
    dateStart: false,
    dateEnd: false,
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

  const sendReport = (e) => {
    e.preventDefault();
    setIsReported(true);
    if(checkReport()) {
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
        week: {
          dateStart: new Date(value[0].$d),
          dateEnd: new Date(value[1].$d),
        },
      };
      reportService.sendReport(report);
    }
  };

  return (
    <div className={styles.fill_out_container}>
      <header>
        <h1 className={styles.title_name}>Welcome back, Anatoliy.</h1>
        <p className="p-4">
          Let your leader know where you're winning and struggling this week –
          in less than 10 minutes.
        </p>
      </header>
      <FillOutCard name={names.morale} setEmotion={setMorale} value={morale} />
      {props.isMoraleInput && (
        <textarea
          value={moraleComment}
          onChange={(e) => setMoraleComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
      {(isReported && morale === 0) && <p className={styles.required__message}>Morale is required</p>}
      <FillOutCard name={names.stress} setEmotion={setStress} value={stress} />
      {props.isStressInput && (
        <textarea
          value={stressComment}
          onChange={(e) => setStressComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
      {(isReported && stress === 0) && <p className={styles.required__message}>Stress is required</p>}
      <FillOutCard
        name={names.workload}
        setEmotion={setWorkload}
        value={workload}
      />
      {props.isWorkloadInput && (
        <textarea
          value={workloadComment}
          onChange={(e) => setWorkloadComment(e.target.value)}
          onBlur={() => dispatch({ type: "CLOSE_INPUT" })}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      )}
        {(isReported && workload === 0) && <p className={styles.required__message}>Workload is required</p>}
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
          {(isReported && highComment.length === 0) && <p className={styles.required__message}>Fill out your high</p>}
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
          {(isReported && lowComment.length === 0) && <p className={styles.required__message}>Fill out your high</p>}
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
          <label className={styles.form__label}>Choose date</label>
          <LocalizationProvider
            className={styles.week_picker}
            dateAdapter={AdapterDayjs}
            localeText={{ start: "start", end: "end" }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
            {(isReported && value.includes(null)) && <p className={styles.required__message}>Set date range</p>}
          <p className={styles.required}>
            All fields are required unless marked as optional.
          </p>
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
});

export default connect(mapStateToProps, null)(memo(FillOutReport));
