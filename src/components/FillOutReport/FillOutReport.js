import React, {memo} from 'react';
import styles from "./FillOutReport.module.css";
import veryLow from "../../images/very-sad.svg";
import low from "../../images/sad.svg";
import okay from "../../images/neutral.svg";
import happy from "../../images/happy.svg";
import veryHappy from "../../images/very-happy.svg";
import clsx from "clsx";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro';

const FillOutReport = () => {
  const [value, setValue] = React.useState([null, null]);

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
            <img src={okay} alt="okay emotion" className={styles.smile_icons}/>
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
            <img src={okay} alt="okay emotion" className={styles.smile_icons}/>
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
        <h3 className={styles.title_of_moral}>How was your workload this week?</h3>
        <div className={styles.morale_box}>
          <div className={styles.icon_box}>
            <img src={veryLow} alt="sad emotion" className={styles.smile_icons}/>
            <p>Overwhelming</p>
          </div>
          <div className={styles.icon_box}>
            <img src={low} alt="low" className={styles.smile_icons}/>
            <p>Heavy</p>
          </div>
          <div className={styles.icon_box}>
            <img src={okay} alt="okay emotion" className={styles.smile_icons}/>
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
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your high this week?</h3>
        <textarea
          className={styles.textarea_high}
          placeholder="What was your personal or professional high this week? What's the one thing you accomplished at work this week?"
        >
        </textarea>
        <div className={styles.textarea_counter}>600</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your low this week?</h3>
        <textarea
          className={styles.textarea_high}
          placeholder="What was your personal low this week?"
        >
        </textarea>
        <div className={styles.textarea_counter}>600</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>What was your low this week?</h3>
        <textarea
          className={styles.textarea_high}
          placeholder="Is there anything else you would like to share with your leader?"
        >
        </textarea>
        <div className={styles.textarea_counter}>400</div>
      </section>
      <section className={clsx(styles.moral_container, styles.moral_container_high)}>
        <h3 className={styles.title_of_moral}>Date range</h3>
        <form action="">
          <label>Choose date</label>
          <LocalizationProvider
            className={styles.week_picker}
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'start', end: 'end' }}
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
          <p className={styles.required}>All fields are required unless marked as optional.</p>
        </form>
        <input type="submit" value="Send Weekly Report" className={styles.sent_moral}/>

      </section>
    </div>
  );
};

export default memo(FillOutReport);
