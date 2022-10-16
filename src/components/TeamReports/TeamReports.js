import React, { memo, useEffect, useState } from "react";
import styles from "./TeamReports.module.css";
import ImmediateTeam from "../ImmediateTeam/ImmediateTeam";
import ExtendedTeam from "../ExtendedTeam/ExtendedTeam";
import { connect } from "react-redux";
import teamService from "../../services/teamService";

const TeamReports = (props) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [reportsCount, setReportsCount] = useState(0);
  const [isImmediateTeam, setIsImmediateTeam] = useState(true);
  const [period, setPeriod] = useState("current");

  useEffect(() => {
    if (props.token) {
      teamService.setToken(props.token);
      teamService.getMembers(props.setMembers);
      teamService.getReporters(props.member.id, props.setReporters);
    }
  }, []);

  useEffect(() => {
    if (isImmediateTeam) {
      setTeamMembers(
        props.reporters.map(
          (member) => member.firstName[0] + member.lastName[0]
        )
      );
    } else {
      setTeamMembers(
        props.members.map((member) => member.firstName[0] + member.lastName[0])
      );
    }
  }, [props.members]);

  useEffect(() => {
    if (isImmediateTeam) {
      setTeamMembers(
        props.reporters.map(
          (member) => member.firstName[0] + member.lastName[0]
        )
      );
    } else {
      setTeamMembers(
        props.members.map((member) => member.firstName[0] + member.lastName[0])
      );
    }
  }, [isImmediateTeam]);

  const renderTeamMembers = (teamMembers) => {
    return teamMembers.map((teamMember, index) => {
      if (teamMembers.length <= 4) {
        return (
          <div
            style={{ zIndex: 10 - index }}
            className={styles.teamMembers__item}
            key={index}
          >
            {teamMember}
          </div>
        );
      } else {
        if (index <= 3) {
          return (
            <div
              style={{ zIndex: 10 - index }}
              className={styles.teamMembers__item}
              key={index}
            >
              {teamMember}
            </div>
          );
        }
        if (index === 4) {
          return (
            <div
              style={{ zIndex: 10, background: "#fad114" }}
              className={styles.teamMembers__item}
              key={index}
            >
              +{teamMembers.length - index}
            </div>
          );
        }
      }
    });
  };

  return (
    <>
      <header className={styles.teamReports__header}>
        <div className={styles.header__switch}>
          <div
            className={styles.switch__item}
            style={{
              border: isImmediateTeam ? "1px solid #fad114" : "none",
              borderRadius: isImmediateTeam ? "4px 0 0 4px" : "0",
            }}
            onClick={() => {
              !isImmediateTeam && setIsImmediateTeam(!isImmediateTeam);
            }}
          >
            Immediate Team
          </div>
          <div
            className={styles.switch__item}
            style={{
              border: !isImmediateTeam ? "1px solid #fad114" : "none",
              borderRadius: !isImmediateTeam ? "0 4px 4px 0" : "0",
            }}
            onClick={() => {
              isImmediateTeam && setIsImmediateTeam(!isImmediateTeam);
            }}
          >
            Extended Team
          </div>
        </div>
        <div className={styles.header__teamMembers}>
          {renderTeamMembers(teamMembers)}
        </div>
        {period !== "older" ? (
          <div className={styles.header__title}>
            Your team has {reportsCount > 0 ? reportsCount : "not"} submitted
            reports this week
          </div>
        ) : (
          <div className={styles.header__title}>
            Get a bigger picture of how your team has been doing over time
          </div>
        )}
      </header>
      <div className={styles.container}>
        <div className={styles.periodSwitch}>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if (period !== "prev") {
                setPeriod("prev");
              }
            }}
            style={{
              color: period === "prev" ? "#ffffff" : "inherit",
              border: period === "prev" ? "1px solid #fad114" : "none",
              borderRadius: period === "prev" ? "4px 0 0 4px" : "none",
            }}
          >
            Previous Period
          </div>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if (period !== "current") {
                setPeriod("current");
              }
            }}
            style={{
              color: period === "current" ? "#ffffff" : "inherit",
              border: period === "current" ? "1px solid #fad114" : "none",
            }}
          >
            Current Period
          </div>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if (period !== "older") {
                setPeriod("older");
              }
            }}
            style={{
              color: period === "older" ? "#ffffff" : "inherit",
              border: period === "older" ? "1px solid #fad114" : "none",
              borderRadius: period === "older" ? "0 4px 4px 0" : "0",
            }}
          >
            Older Periods
          </div>
        </div>
        {isImmediateTeam && (
          <ImmediateTeam period={period} setReportsCount={setReportsCount} />
        )}
        {!isImmediateTeam && (
          <ExtendedTeam period={period} setReportsCount={setReportsCount} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  members: state.members,
  token: state.token,
  member: state.member,
  reporters: state.reporters,
  currentImmediateReports: state.currentImmediateReports,
  previousImmediateReports: state.previousImmediateReports,
  currentExtendedReports: state.currentExtendedReports,
  previousExtendedReports: state.previousExtendedReports,
});

const mapDispatchToProps = (dispatch) => ({
  setMembers: (members) => dispatch({ type: "SET_MEMBERS", payload: members }),
  setReporters: (reporters) =>
    dispatch({ type: "SET_REPORTERS", payload: reporters }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(TeamReports));
