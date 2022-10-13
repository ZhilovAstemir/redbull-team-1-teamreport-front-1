import React, { useState } from "react";
import styles from "./ReportAccordion.module.css";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import veryHappy from "../../images/very-happy.svg";
import happy from "../../images/happy.svg";
import neutral from "../../images/neutral.svg";
import sad from "../../images/sad.svg";
import verySad from "../../images/very-sad.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters {...props} />
))(() => ({
  width: "100%",
  border: "0",
  marginTop: "10px",
  borderRadius: "4px",
  zIndex: "0",
  boxShadow: "0 3px 5px 0 #e3e6e7"
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreRounded />} {...props} />
))(() => ({

}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({

}));

const ReportAccordion = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderEmotion = (grade) => {
    switch (grade) {
      case 1: {
        return <img src={verySad} className={styles.group__item} width="45px" height="45px" alt="very sad"/>
      }
      case 2: {
        return <img src={sad} className={styles.group__item} width="45px" height="45px" alt="sad"/>
      }
      case 3: {
        return <img src={neutral} className={styles.group__item} width="45px" height="45px" alt="neutral"/>
      }
      case 4: {
        return <img src={happy} className={styles.group__item} width="45px" height="45px" alt="happy"/>
      }
      case 5: {
        return <img src={veryHappy} className={styles.group__item} width="45px" height="45px" alt="very happy"/>
      }
    }
  }

  const accordionChangeHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateStr) => {
    let dateToFormat = new Date(dateStr);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[dateToFormat.getMonth()]} ${dateToFormat.getDay()}`
  }

  return (
    <Accordion expanded={isExpanded} onChange={accordionChangeHandler}>
      <AccordionSummary
        expanded={isExpanded}
        expandIcon={<ExpandMoreRounded />}
      >
        <div className={styles.accordion__content}>
          <div className={styles.accordion__date}>
            {formatDate(props.report.week.dateStart)} - {formatDate(props.report.week.dateEnd)}
          </div>
          <div className={styles.accordion__group}>
            {
              !isExpanded &&
              <>
                {renderEmotion(props.report.morale)}
                {renderEmotion(props.report.stress)}
                {renderEmotion(props.report.workload)}
              </>
            }
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.accordionDetails__content}>
          <div className={styles.badge__group}>
            <div
              style={{
                background:
                props.report.morale < 3 ? "#f38231" : props.report.morale === 3 ? "#fdc85e" : "#90e0a1"
              }}
              className={styles.badge}
            >
              {renderEmotion(props.report.morale)}
              <div className={styles.badge__title}>
                MORALE
              </div>
            </div>
            <div className={styles.badge__comment}>
              {props.report.moraleComment.length ? props.report.moraleComment : "There were no comments added about morale"}
            </div>
          </div>
          <div className={styles.badge__group}>
            <div
              style={{
                background:
                  props.report.stress < 3 ? "#f38231" : props.report.stress === 3 ? "#fdc85e" : "#90e0a1"
              }}
              className={styles.badge}
            >
              {renderEmotion(props.report.stress)}
              <div className={styles.badge__title}>
                STRESS
              </div>
            </div>
            <div className={styles.badge__comment}>
              {props.report.stressComment.length ? props.report.stressComment : "There were no comments added about morale"}
            </div>
          </div>
          <div className={styles.badge__group}>
            <div
              style={{
                background:
                  props.report.workload < 3 ? "#f38231" : props.report.workload === 3 ? "#fdc85e" : "#90e0a1"
              }}
              className={styles.badge}
            >
              {renderEmotion(props.report.workload)}
              <div className={styles.badge__title}>
                WORKLOAD
              </div>
            </div>
            <div className={styles.badge__comment}>
              {props.report.workloadComment.length ? props.report.workloadComment : "There were no comments added about morale"}
            </div>
          </div>
          <div className={styles.comment__group}>
            <div>
              Weekly High
            </div>
            <div className={styles.comment__text}>
              {props.report.high}
            </div>
          </div>
          <div className={styles.comment__group}>
            <div>
              Weekly Low
            </div>
            <div className={styles.comment__text}>
              {props.report.low}
            </div>
          </div>
          <div className={styles.comment__group}>
            <div>
              Anything Else
            </div>
            <div className={styles.comment__text}>
              {props.report.else}
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReportAccordion;
