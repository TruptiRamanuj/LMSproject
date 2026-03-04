import logo from '../../app/components/img/logo-icon.svg';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className='navbar'>
            <div className='left'>
                <img src={logo} alt="Logo" className="logo-image" /><div className="logo">SkillForge</div>

            </div>

            <label for="menu-toggle" class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div className="nav-links">
                <Link className='lnk' to="/Home">Home</Link>
                <Link className='lnk' to="/Courses">About</Link>
                <Link className='lnk' to="/">Add Courses</Link>|
                <Link className='lnk' to="/">Login</Link>
                <button type="button"><span></span>Create Account</button>
            </div>
        </nav>

    );
}