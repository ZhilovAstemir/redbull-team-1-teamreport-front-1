import "./App.css";
import AsideBar from "./components/AsideBar/AsideBar";
import { connect } from "react-redux";
import React, { memo, useEffect } from "react";
import authService from "./services/authService";

function App(props) {
  const handleTokenFromQueryParams = () => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    if (token != null) {
      props.setToken(token);
      authService.setToken(token);
    }
  };

  useEffect(() => {
    handleTokenFromQueryParams(props.setToken);
    if (props.token) {
      authService.setToken(props.token);
      authService.getMemberInformation(props.setMember);
    }
  }, []);

  useEffect(() => {
    authService.getMemberInformation(props.setMember);
  }, []);

  useEffect(() => {
    if (!props.member) {
      props.openLogIn();
    }

    if (props.member && !props.member.password) {
      props.openContinueRegistration();
    }
  }, [props.member]);

  return (
    <div className="App">
      <AsideBar />
    </div>
  );
}

const mapStateToProps = (state) => ({
  member: state.member,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setMember: (member) => dispatch({ type: "SET_MEMBER", payload: member }),
  setToken: (token) => dispatch({ type: "SET_TOKEN", payload: token }),
  openContinueRegistration: () => dispatch({ type: "CONTINUE_REGISTRATION" }),
  openLogIn: () => dispatch({ type: "LOG_IN" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
