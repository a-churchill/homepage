import React from "react";
import Icon from "./Icon";
import me from "../imgs/andrew-churchill.jpg";

function Sidebar() {
  return (
    <div className="Sidebar-aside">
      <aside>
        <img className="Sidebar-image" src={me} alt="me" />
        <h1 className="Sidebar-name">
          Andrew
          <br />
          Churchill
        </h1>
        <nav className="Sidebar-nav">
          <ul>
            <li>About</li>
            <li>Places</li>
            <li>Projects</li>
            <li>Photos</li>
          </ul>
        </nav>
        <div className="Sidebar-footer">
          <ul>
            <Icon name="github" link="https://github.com/a-churchill" />
            <Icon name="twitter" link="https://twitter.com/AndrewChurchiII" />
            <Icon name="facebook" link="https://www.facebook.com/xxaxdxcxx" />
            <Icon
              name="instagram"
              link="https://www.instagram.com/andrewchurchil"
            />
            <Icon
              name="linkedin"
              link="https://www.linkedin.com/in/andrew-d-churchill/"
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
