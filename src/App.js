import "./App.css";
import AsideBar from "./components/AsideBar/AsideBar";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import authService from "./services/authService";

const handleTokenFromQueryParams = () => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  if (token != null) {
    authService.setToken(token);
    window.location.replace(window.location.origin);
  }
};

function App(props) {
  useEffect(() => {
    handleTokenFromQueryParams();
    authService.getMemberInformation(props.setMember);

    if (!props.member) {
      console.log(props.member);
      props.openLogIn();
    }

    if (props.member && !props.member.password) {
      props.openContinueRegistration();
    }
  }, []);

  return (
    <div className="App">
      <AsideBar />
    </div>
  );
}

const mapStateToProps = (state) => ({
  member: state.member,
});

const mapDispatchToProps = (dispatch) => ({
  setMember: (member) => dispatch({ type: "SET_MEMBER", payload: member }),
  closeLoginPage: () => dispatch({ type: "CLOSE_LOGIN" }),
  openContinueRegistration: () =>
    dispatch({ type: "OPEN_CONTINUE_REGISTRATION" }),
  openLogIn: () => dispatch({ type: "LOG_IN" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
