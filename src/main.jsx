import { createRoot } from "react-dom/client";
import "./index.css";
import image from "./assets/venu.jpeg";


function Header()
{
  return(
     <nav className="navbar">
                <h2>VenuKumar</h2>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
  )
}

function MainContent()
{
  return(
     <main id="home">
                <section className="profile-section">

                    <div className="profile-card">

                        <img
                            src={image}
                            alt="Venu Kumar"
                            className="profile-image"
                        />

                        <h1>VenuKumar</h1>
                        <h2>Web Developer</h2>

                        <p>
                            I am a Computer Science Engineering graduate
                            and an aspiring Full Stack Developer. I am
                            passionate about building web applications
                            and currently learning Java, React, SQL,
                            and Spring Boot.
                        </p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/" target="_blank">
                                LinkedIn
                            </a>

                            <a href="https://github.com/VenuStack" target="_blank">
                                GitHub
                            </a>
                        </div>

                    </div>

                </section>
            </main>
  )
}

function Footer()
{
  return(
      <footer id="contact">
                <p>© 2026 Venu Kumar | All Rights Reserved</p>
            </footer>
  )
}



function ProfileCard() {
    return (
        <>
          <Header/>
          <MainContent/>
          <Footer/>
        </>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<ProfileCard />);