import React, { Component } from "react";
import "./style.css"

class Home extends Component {
  state = {
    open: true,
  };

  toggleSidebar = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    document.title = "James Runnalls - Portfolio";
    return (
      <React.Fragment>
        <div>
          Hello world
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
