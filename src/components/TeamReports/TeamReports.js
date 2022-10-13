import React, { memo, useState } from "react";
import styles from "./TeamReports.module.css";

const TeamReports = () => {
  const [isImmediateTeam, setIsImmediateTeam] = useState(true);
  const [period, setPeriod] = useState("current");

  let teamMembers = ["AK", "AK", "AK", "AK", "AK", "AK", "AK"]
  const renderTeamMembers = (teamMembers) => {
    return teamMembers.map((teamMember, index) => {
      if(teamMembers.length <= 4) {
        return <div style={{zIndex: 10 - index}} className={styles.teamMembers__item} key={index}>{teamMember}</div>
      } else {
        if(index <= 3) {
          return <div style={{zIndex: 10 - index}} className={styles.teamMembers__item} key={index}>{teamMember}</div>
        }
        if(index === 4) {
          return <div style={{zIndex: 10,background: "#fad114"}} className={styles.teamMembers__item} key={index}>+{teamMembers.length - index}</div>
        }
      }
    })
  }

  return (
    <>
      <header className={styles.teamReports__header}>
        <div className={styles.header__switch}>
          <div
            className={styles.switch__item}
            style={{
              border: isImmediateTeam ? "1px solid #fad114" : "none",
              borderRadius: isImmediateTeam ? "4px 0 0 4px" : "0"
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
              borderRadius: !isImmediateTeam ? "0 4px 4px 0" : "0"
            }}
            onClick={() => {
              isImmediateTeam && setIsImmediateTeam(!isImmediateTeam);
            }}
          >
            Extended Team
          </div>
        </div>
        {isImmediateTeam && (
          <div className={styles.header__teamMembers}>
            {renderTeamMembers(teamMembers)}
          </div>
        )}
        {!isImmediateTeam && <div>Weekly Report History</div>}
      </header>
      <div className={styles.container}>
        <div className={styles.periodSwitch}>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if(period !== "prev") {
                setPeriod("prev");
              }
            }}
            style={{
              color: period === "prev" ? "#ffffff" : "inherit",
              border: period === "prev" ? "1px solid #fad114" : "none",
              borderRadius: period === "prev" ? "4px 0 0 4px" : "none",
            }}
          >
            Previous Period:
          </div>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if(period !== "current") {
                setPeriod("current");
              }
            }}
            style={{
              color: period === "current" ? "#ffffff" : "inherit",
              border: period === "current" ? "1px solid #fad114" : "none",
            }}
          >
            Current Period:
          </div>
          <div
            className={styles.periodSwitch__item}
            onClick={() => {
              if(period !== "older") {
                setPeriod("older");
              }
            }}
            style={{
              color: period === "older" ? "#ffffff" : "inherit",
              border: period === "older" ? "1px solid #fad114" : "none",
              borderRadius: period === "older" ? "0 4px 4px 0" : "0"
            }}
          >
            Older Periods
          </div>
        </div>
        <div className={styles.content__header}>
          <div></div>
          <div className={styles.header__group}>
            <div className={styles.header__item}>Morale</div>
            <div className={styles.header__item}>Stress</div>
            <div className={styles.header__item}>Workload</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TeamReports);
