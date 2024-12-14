import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please provide a valid email address");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please check your email");
    } else {
      setError("");
      console.log("Email submitted:", email);
    }
  };

  return (
    <>
      <main>
        <img src="./resources/images/logo.svg" alt="Logo" className="logo" />
        <h1>
          We are launching <span>soon!</span>
        </h1>

        <h2>Subscribe and get notified</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your email address…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "error" : ""}
            />
            {error && <p className="error">{error}</p>}
          </div>

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
