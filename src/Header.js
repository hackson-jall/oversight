import React from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import logo from "./img/logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <div class="nav-menu">
        <img src={logo} alt="Logo" class="logo" />
        <div class="inner-menu">
          <Button onClick={() => this.props.onClick("Investors")}>
            Investors
          </Button>
          <Button onClick={() => this.props.onClick("Advertisers")}>
            Advertisers
          </Button>
          <Button onClick={() => this.props.onClick("Front End Users")}>
            Front End Users
          </Button>
        </div>
      </div>
    );
  }
}
