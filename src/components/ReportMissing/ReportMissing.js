import React from "react";
import styles from "./ReportMissing.module.css";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material";

const Accordion = styled((props) => <MuiAccordion disableGutters {...props} />)(
  () => ({
    width: "100%",
    border: "0",
    marginTop: "10px",
    borderRadius: "4px",
    zIndex: "0",
    boxShadow: "0 3px 5px 0 #e3e6e7",
  })
);

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  () => ({})
);

const ReportMissing = (props) => {
  return (
    <Accordion>
      <AccordionSummary>
        <div className={styles.accordion__content}>
          <div className={styles.accordion__date}>
            {props.report.firstName + " " + props.report.lastName}
          </div>
          <div className={styles.accordion__group}>
            <>{props.report.emptyStatistic}</>
          </div>
        </div>
      </AccordionSummary>
    </Accordion>
  );
};

export default ReportMissing;
