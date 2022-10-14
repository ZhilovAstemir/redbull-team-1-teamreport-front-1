import React, { useState } from "react";
import styles from "./ExtendedTeam.module.css";

const ExtendedTeam = () => {
  const [filter, setFilter] = useState("overall");

  return (
    <>
      <div className={styles.filter}>
        <div
          className={styles.filter__item}
          onClick={() => filter !== "overall" && setFilter("overall")}
          style={{
            color: filter === "overall" ? "#ffffff" : "inherit",
            border: filter === "overall" ? "1px solid #fad114" : "none",
            borderRadius: filter === "overall" ? "4px 0 0 4px" : "none",
          }}
        >
          Overall
        </div>
        <div
          className={styles.filter__item}
          onClick={() => filter !== "morale" && setFilter("morale")}
          style={{
            color: filter === "morale" ? "#ffffff" : "inherit",
            border: filter === "morale" ? "1px solid #fad114" : "none",
          }}
        >
          Morale
        </div>
        <div
          className={styles.filter__item}
          onClick={() => filter !== "stress" && setFilter("stress")}
          style={{
            color: filter === "stress" ? "#ffffff" : "inherit",
            border: filter === "stress" ? "1px solid #fad114" : "none",
          }}
        >
          Stress
        </div>
        <div
          className={styles.filter__item}
          onClick={() => filter !== "workload" && setFilter("workload")}
          style={{
            color: filter === "workload" ? "#ffffff" : "inherit",
            border: filter === "workload" ? "1px solid #fad114" : "none",
            borderRadius: filter === "workload" ? "0 4px 4px 0" : "none",
          }}
        >
          Workload
        </div>
      </div>
      <div>
        EXTENDED TEAM AVERAGE
      </div>
      <div>
        <div>

        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendedTeam;
