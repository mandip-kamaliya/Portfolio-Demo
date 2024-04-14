import logo from "../../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} />
      <ul className="nav-menu">
        <li>Home</li>
        <li>about me</li>
        <li>servicees</li>
        <li>latest work</li>
        <li>contact</li>
      </ul>
      <div className="nav-contact">contact me</div>
    </div>
  );
}
