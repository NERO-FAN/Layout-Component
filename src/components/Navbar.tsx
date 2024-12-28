import "./Navbar.css";
import { Bell, UserRound, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="page-title">
            Dashboard
        </div>
        <div className="navbar-buttons">
            <Settings />
            <Bell />
            <UserRound />
        </div>
    </div>
  )
}

export default Navbar