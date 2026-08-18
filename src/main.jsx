import { createRoot } from "react-dom/client";
import "./index.css";

import image from "./assets/venuk.jpeg";

function ProfileCard() {
  return (
    <div id="main1">
      <div id="card">
        <img id="img" src={image} alt="" />

        <h1>VenuKumar</h1>

        <h6>Web Developer</h6>

        <p>
          I am a Computer Science Engineering student and an aspiring Full
          Stack Developer. I am passionate about building web applications
          and currently learning Java, React, SQL, and Spring Boot. I enjoy
          learning new technologies and improving my programming skills.
        </p>

        <div className="link">
          <a href="https://www.linkedin.com/in/kummari-venu-4b409331b/">LinkedIn</a>
          <a href="https://github.com/VenuStack">GitHub</a>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <ProfileCard />
);