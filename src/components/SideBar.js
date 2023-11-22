import { Link } from "react-router-dom";
import Profil from "../Images/Profil.jpg";
import "./Custom.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="inactive">
        <img className="circle" src={Profil} alt="Foto Saya" />
        <span className="textMRA">MRA</span>
      </div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      <div className="copyright">
        <p>Copyright © 2023</p>
      </div>
    </div>
  );
}

export default Sidebar;
