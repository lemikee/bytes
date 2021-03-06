import React from 'react';
import NavBar from "./nav_bar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
