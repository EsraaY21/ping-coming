import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <main>
        <img src="./resources/images/logo.svg" alt="Logo" className="logo" />
        <h1>
          We are launching <span>soon!</span>
        </h1>

        <h2>Subscribe and get notified</h2>

        <form action="">
          <input type="text" placeholder="Your email address…" />
          <button type="submit">Notify Me</button>
        </form>

        <img
          src="./resources/images/illustration-dashboard.png"
          alt="Hero Image"
          className="hero_image"
        />

        <div className="footer">
          <div className="icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}

export default App;
