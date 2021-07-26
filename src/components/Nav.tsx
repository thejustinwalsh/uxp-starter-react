import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <nav>
      <Link style={navStyle} to="/">
        <div style={{ fontSize: '18px' }}>Home</div>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <div style={{ fontSize: '18px' }}>About</div>
        </Link>
      </ul>
    </nav>
  );
};

const navStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default Nav;