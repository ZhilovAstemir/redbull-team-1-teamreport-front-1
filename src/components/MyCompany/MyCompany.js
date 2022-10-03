import React, {memo} from 'react';
import styles from "./MyCompany.module.css";
import {connect, useDispatch, useSelector} from "react-redux";
import HeaderForGuide from "../HeaderForGuide/HeaderForGuide";
import {updateTitle} from "../../redux/actions";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

const MyCompany = (props) => {
  const dispatch = useDispatch();
  const {title} = useSelector((state) => state.title);

  function handleEntailmentRequest(e) {
    e.preventDefault();
  }

  return (
    <>
      <HeaderForGuide/>
      <div className={styles.myCompany_container}>
        <div className={styles.myCompany_div}>
          <section>
            <h1>Edit ANKO Technologies Cors'p Information</h1>
            <p>
              You may edit the company name, as well as deactivate/activate the Weekly Report Tool
              functionality.
              If you need to edit a team member's information, you can access that information by seeing the
              list of team members.
            </p>
          </section>
          <section className={styles.second_flex}>
            <h3>RENAME ANKO TECHNOLOGIES CORP</h3>
            <form action="" onClick={(e) => handleEntailmentRequest(e)}>
              <hr/>
              <label>Change company name</label>
              <input type="text" onChange={(event) => dispatch(updateTitle(event.target.value))}/>
              <button onClick={props.changeTitle}>Save name change</button>
            </form>
          </section>
          <section className={styles.third_flex}>
            <h3>SEE A LIST OF ANKO TECHNOLOGIES CORP'S TEAM MEMBERS</h3>
            <hr/>
            <p>
              If you need to edit a particular team member, you can see a complete list of team members and
              visit their profile to
              make edits. <strong>You will not be able to see a team member's weekly report.</strong>
            </p>
            <a onClick={(e) => handleEntailmentRequest(e)}>
              <button
                onClick={props.openTeamMembers}
              >
                See All Team Members
              </button>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeTitle: () => dispatch({type: "CHANGE_TITLE"}),
})

export default connect(null, mapDispatchToProps)(memo(MyCompany));
