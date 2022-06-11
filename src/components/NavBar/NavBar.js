import "./NavBar.css";
import logo from "../../assets/logo-techlab.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="" width="60px" />
      </div>
      <div className="nav-links">
        <p>About</p>
        <p>Work</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
