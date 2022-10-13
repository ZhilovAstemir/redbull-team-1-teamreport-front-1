import React, {memo, useEffect, useState} from "react";
import styles from "./MyReports.module.css";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import ReportAccordion from "../ReportAccordion/ReportAccordion";
import ReportService from "../../services/reportService";
import {connect, useSelector} from "react-redux";

const MyReports = (props) => {
  const [reports, setReports] = useState([]);
  const token = useSelector((state) => state.token);
  const reportService = new ReportService(token);

  useEffect(() => {
    if(token.length) {
      reportService.getReports(token)
        .then((response) => {
          setReports(response.data)
        })
    }
  },[]);



  const renderReports = () => {
    return reports.map((report, index) => {
      return <ReportAccordion key={index} report={report} />
    })
  }

  return (
    <>
      <HeaderForGuide />
      <div className={styles.container}>
        <h3>PAST WEEKLY REPORTS</h3>
        <div className={styles.content}>
          <div className={styles.content__button}>Expand All</div>
          <div className={styles.content__header}>
            <div></div>
            <div className={styles.header__group}>
              <div className={styles.header__item}>Morale</div>
              <div className={styles.header__item}>Stress</div>
              <div className={styles.header__item}>Workload</div>
            </div>
          </div>
          {reports.length && renderReports()}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
})

export default connect(mapStateToProps, null)(memo(MyReports));
