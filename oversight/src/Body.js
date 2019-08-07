import React from "react";
import Investors from "./Investors";
import Advertisers from "./Advertisers";
import FrontEndUsers from "./FrontEndUsers";

export default class Body extends React.Component {
  render() {
    if (this.props.pageName === "Investors") {
      return <Investors />;
    } else if (this.props.pageName === "Advertisers") {
      return <Advertisers />;
    } else if (this.props.pageName === "Front End Users") {
      return <FrontEndUsers />;
    }
  }
}
