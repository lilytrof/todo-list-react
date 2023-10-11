import React from "react";
import { ReactComponent as GithubLogo } from "../../img/github.svg";

const Footer = () => {
  return (
    <footer>
      <div className="AboutMe">
        <a
          className="AboutMe-MyGitHubLink"
          href="https://github.com/lilytrof/todo-list/tree/main"
        >
          <GithubLogo className="AboutMe-MyGitHubSvg"/>
          <p>lilytrof</p>
        </a>
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;