import {createRoot} from "react-dom/client"

import "./index.css";

import image from './assets/venuk.jpeg'
function ProfileCard()
{
  return(
    <div id="main1">
    <div id="card">
      <img id="img" src={image} alt="" />
      <h1>VenuKumar</h1>
      <h6>Web Developer</h6>
      <p>I am a Computer Science Engineering student and an aspiring Full Stack Developer. 
        I am passionate about building web applications and currently learning 
        Java, React, SQL, and Spring Boot. I enjoy learning new technologies and 
        improving my programming skills.</p>
          <div className="link">
          <a href="http://linkedin.com">linkedin</a>
          <a href="google.com">google</a>
          <a href="twitter.com">twitter</a>
          </div>
    </div>
    </div>
  )
}

const root=createRoot(document.getElementById("root")).

render(

  <ProfileCard />


)