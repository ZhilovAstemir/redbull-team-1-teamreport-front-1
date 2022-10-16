import React, { memo, useEffect } from "react";
import ReportAccordion from "../ReportAccordion/ReportAccordion";
import { nanoid } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import ReportMissing from "../ReportMissing/ReportMissing";
import ReportService from "../../services/reportService";

const ReportsList = (props) => {
  const reportService = new ReportService(props.token);

  useEffect(() => {
    reportService.getCurrentExtendedReports(
      props.member.company.id,
      props.setCurrentExtendedReports
    );
    reportService.getPreviousExtendedReports(
      props.member.company.id,
      props.setPreviousExtendedReports
    );
    reportService.getCurrentImmediateReports(
      props.member.id,
      props.setCurrentImmediateReports
    );
    reportService.getPreviousImmediateReports(
      props.member.id,
      props.setPreviousImmediateReports
    );
  }, []);

  useEffect(() => {
    if (props.team == "immediate") {
      if (props.week == "current") {
        reportService.getCurrentImmediateReports(
          props.member.id,
          props.setCurrentImmediateReports
        );
        props.setReportsCount(props.currentImmediateReports[0].length);
      } else {
        reportService.getPreviousImmediateReports(
          props.member.id,
          props.setPreviousImmediateReports
        );
        props.setReportsCount(props.previousImmediateReports[0].length);
      }
    } else {
      if (props.week == "current") {
        reportService.getCurrentExtendedReports(
          props.member.company.id,
          props.setCurrentExtendedReports
        );
        props.setReportsCount(props.currentExtendedReports[0].length);
      } else {
        reportService.getPreviousExtendedReports(
          props.member.company.id,
          props.setPreviousExtendedReports
        );
        props.setReportsCount(props.previousExtendedReports[0].length);
      }
    }
  }, [props.team, props.week]);

  return (
    <div>
      {props.team == "immediate" ? (
        props.week == "current" ? (
          <>
            {props.currentImmediateReports[0].map((report) => (
              <ReportAccordion
                key={nanoid()}
                report={report}
                isMyReports={false}
              />
            ))}
            {props.currentImmediateReports[1].map((report) => (
              <ReportMissing
                key={nanoid()}
                report={report}
                isMyReports={false}
              />
            ))}
          </>
        ) : (
          <>
            {props.previousImmediateReports[0].map((report) => (
              <ReportAccordion
                key={nanoid()}
                report={report}
                isMyReports={false}
              />
            ))}
            {props.previousImmediateReports[1].map((report) => (
              <ReportMissing
                key={nanoid()}
                report={report}
                isMyReports={false}
              />
            ))}
          </>
        )
      ) : props.week == "current" ? (
        <>
          {props.currentExtendedReports[0].map((report) => (
            <ReportAccordion
              key={nanoid()}
              report={report}
              isMyReports={false}
            />
          ))}
          {props.currentExtendedReports[1].map((report) => (
            <ReportMissing key={nanoid()} report={report} isMyReports={false} />
          ))}
        </>
      ) : (
        <>
          {props.previousExtendedReports[0].map((report) => (
            <ReportAccordion
              key={nanoid()}
              report={report}
              isMyReports={false}
            />
          ))}
          {props.previousExtendedReports[1].map((report) => (
            <ReportMissing key={nanoid()} report={report} isMyReports={false} />
          ))}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  member: state.member,
  token: state.token,
  currentImmediateReports: state.currentImmediateReports,
  previousImmediateReports: state.previousImmediateReports,
  currentExtendedReports: state.currentExtendedReports,
  previousExtendedReports: state.previousExtendedReports,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentImmediateReports: (currentImmediateReports) =>
    dispatch({
      type: "SET_CURRENT_IMMEDIATE_REPORTS",
      payload: currentImmediateReports,
    }),
  setPreviousImmediateReports: (previousImmediateReports) =>
    dispatch({
      type: "SET_PREVIOUS_IMMEDIATE_REPORTS",
      payload: previousImmediateReports,
    }),
  setCurrentExtendedReports: (currentExtendedReports) =>
    dispatch({
      type: "SET_CURRENT_EXTENDED_REPORTS",
      payload: currentExtendedReports,
    }),
  setPreviousExtendedReports: (previousExtendedReports) =>
    dispatch({
      type: "SET_PREVIOUS_EXTENDED_REPORTS",
      payload: previousExtendedReports,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ReportsList));
