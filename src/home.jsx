import React, { Component } from "react";
import axios from "axios";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import swiss from "./img/swiss.png";
import npm from "./img/npm.png";
import "./style.css";

class Home extends Component {
  state = {
    projects: [],
  };
  async componentDidMount() {
    var { data: projects } = await axios.get(
      "https://runnalls.s3.eu-central-1.amazonaws.com/project.json"
    );
    this.setState({ projects });
  }
  render() {
    document.title = "James Runnalls - Portfolio";
    return (
      <React.Fragment>
        <div className="main">
          <div className="sidebar">
            <div className="name">JAMES RUNNALLS</div>
            <div className="job-title">Scientific Software Engineer</div>
            <div className="location">
              Zurich <img src={swiss} alt="Swiss Flag" />
            </div>
            <div className="connect">
              <a
                href="https://www.linkedin.com/in/jamesrunnalls/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/JamesRunnalls"
                target="_blank"
                rel="noopener noreferrer"
                title="Check out my projects on GitHub"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.npmjs.com/~jamesrunnalls"
                target="_blank"
                rel="noopener noreferrer"
                title="Check out my projects on NPM"
              >
                <img src={npm} alt="NPM" />
              </a>
            </div>
            <div className="boundary" />
          </div>
          <div className="content">
            <div className="gallery">
              {this.state.projects.map((p) => (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to see project"
                  key={p.title}
                >
                  <div className="gallery-item">
                    <img src={p.img} alt={p.title} className="galley-img" />
                    <div className="overlay">
                      <div className="overlay-inner">
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        {p.badges.map((b) => (
                          <img src={b} alt="badge" key={b} />
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
