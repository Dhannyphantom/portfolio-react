import "./NavBar.css";
// import logo from "../../assets/logo-techlab.png";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>f</p>
        <p>i</p>
        <p>t</p>
      </div>
      <Logo />
      {/* <div className="logo-container">
        <img src={logo} alt="" width="60px" />
      </div> */}
      <div className="nav-links">
        <p>About</p>
        <p>Work</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
