import React from 'react';
import styles from "./LaunchGuide.module.css";
import circles from "../../images/circles.png";
import profile from "../../images/profile.png";
import mobile from "../../images/mobile.png";
import laptop from "../../images/laptop.png";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";

const LaunchGuide = () => {
  return (
    <>
      <HeaderForGuide/>
      <div className={styles.launchGuide_container}>
        <div className={styles.flex}>
          <article className={styles.invite}>
            <div className={styles.invite_flex}>
              <h2>Invite Your Team</h2>
              <p>
                Click on the link below and <strong>invite</strong> the team members who directly report to you.
              </p>
              <a href="">
                <button>Invite Your Team</button>
              </a>
            </div>
            <img src={circles} alt="circles"/>
          </article>
          <article className={styles.encourage}>
            <div className={styles.encourage_flex}>
              <h2>Encourage Your Team to Accept Your Invitation</h2>
              <p>
                When they receive your invitation, <strong>team members</strong> will be prompted to complete their
                profiles.
                If a team member hasn't created their
                profile within 24 hours, follow up with them!
              </p>
            </div>
            <img src={profile} alt="profile"/>
          </article>
          <article className={styles.invite}>
            <div className={styles.invite_flex}>
              <h2>Remind Your Team</h2>
              <p>
                Every Friday, we'll automatically send your team members an email reminding them to fill out
                their Weekly Report. But we also encourage <strong> you</strong> to constantly request
                their Weekly Reports, so they realize the importance of this new habit.
              </p>
            </div>
            <img src={mobile} alt="mobile"/>
          </article>
          <article className={styles.encourage}>
            <div className={styles.encourage_flex}>
              <h2>Read Their Reports</h2>
              <p>
                Set aside some time on Monday to read all the reports. Then reach out to any team members who need to be
                acknowledged for a success or
                supported during a difficult time. (And yes, we'll send you a reminder to read your reports each week
                too.)
              </p>
            </div>
            <img src={laptop} alt="laptop"/>
          </article>
        </div>
      </div>
    </>
  );
};

export default LaunchGuide;
