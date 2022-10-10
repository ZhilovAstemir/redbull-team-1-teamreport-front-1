import React, {memo} from 'react';
import {Dialog} from "@mui/material";
import styles from "./EditMembersModal.module.css";
import CloseIcon from '@mui/icons-material/Close';


const EditMembersModal = (props) => {

  return (
    <Dialog
      open={props.open}
      TransitionComponent={props.TransitionComponent}
      keepMounted
      onClose={props.onClose}
      aria-describedby="alert-dialog-slide-description"
      className={styles.modal_main}
    >
      <div className={styles.modal_container}>
        <div className={styles.title_flex}>
          <h1>Edit {props.title}(s).</h1>
          <CloseIcon className={styles.modal_icon_close} onClick={props.onClose}/>
        </div>
        <p>By default, the person who sent you the invite will receive your weekly report. You may also select the
          person you report to directly as an additional leader.</p>
        <p>Pro Tip: You can change who sees your report in your profile settings.</p>
        <div className={styles.modal_flex}>
          {props.people.map((leader) => (
            <div className={styles.box_flex} key={leader.id}>
              <button className={styles.modal_btn}>{leader.name}</button>
              <CloseIcon className={styles.modal_icon}/>
            </div>)
          )}
        </div>
        <textarea
          placeholder=". . ."
          maxLength={200}
          className={styles.modal_textarea}
        >
        </textarea>
        <button className={styles.modal_save_btn}>Save Changes</button>
      </div>
    </Dialog>
  );
};

export default memo(EditMembersModal);
