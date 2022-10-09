import React, {memo, useState} from 'react';
import styles from "./FillOutReport.module.css";
import clsx from "clsx";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro';
import FillOutCard from "../FillOutCard/FillOutCard";
import {connect, useDispatch} from "react-redux";

const names = {
  morale: "morale",
  stress: "stress",
  workload: "workload"
}

const FillOutReport = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([null, null]);
  const [countForHigh, setCountForHigh] = useState(600);
  const [countForLow, setCountForLow] = useState(600);
  const [countElse, setCountForElse] = useState(400);

  return (
    <div className={styles.fill_out_container}>
      <header>
        <h1 className={styles.title_name}>Welcome back, Anatoliy.</h1>
        <p className="p-4">
          Let your leader know where you're winning and struggling this week – in less than 10 minutes.
        </p>
      </header>
      <FillOutCard name={names.morale}/>
      {props.isMoraleInput &&
        <textarea
          onBlur={() => dispatch({type: "CLOSE_INPUT"})}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      }
      <FillOutCard name={names.stress}/>
      {props.isStressInput &&
        <textarea
          onBlur={() => dispatch({type: "CLOSE_INPUT"})}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      }
      <FillOutCard name={names.workload}/>
      {props.isWorkloadInput &&
        <textarea
          onBlur={() => dispatch({type: "CLOSE_INPUT"})}
          className={clsx(styles.textarea_high, styles.comments)}
          placeholder="your comments . . ."
        />
      }
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your high this week?</h3>
        <textarea
          onChange={e => setCountForHigh(600 - e.target.value.length)}
          className={styles.textarea_high}
          maxLength={600}
          placeholder="What was your personal or professional high this week? What's the one thing you accomplished at work this week?"
        >
        </textarea>
        <div className={styles.textarea_counter}>{countForHigh}</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your low this week?</h3>
        <textarea
          onChange={e => setCountForLow(600 - e.target.value.length)}
          className={styles.textarea_high}
          maxLength={600}
          placeholder="What was your personal low this week?"
        >
        </textarea>
        <div className={styles.textarea_counter}>{countForLow}</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your low this week?</h3>
        <textarea
          onChange={e => setCountForElse(400 - e.target.value.length)}
          className={styles.textarea_high}
          maxLength={400}
          placeholder="Is there anything else you would like to share with your leader?"
        >
        </textarea>
        <div className={styles.textarea_counter}>{countElse}</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>Date range</h3>
        <form action="">
          <label className={styles.form__label}>Choose date</label>
          <LocalizationProvider
            className={styles.week_picker}
            dateAdapter={AdapterDayjs}
            localeText={{start: 'start', end: 'end'}}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{mx: 2}}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <p className={styles.required}>All fields are required unless marked as optional.</p>
        </form>
        <input type="submit" value="Send Weekly Report" className={styles.sent_moral}/>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMoraleInput: state.isMoraleInput,
  isStressInput: state.isStressInput,
  isWorkloadInput: state.isWorkloadInput,
})

export default connect(mapStateToProps, null)(memo(FillOutReport));
