import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            STUDENTSKI DOMOVI
            <i class="fas fa-dom"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Početna
              </Link>
            </li>
            <li>
              <Link
                to='/locations'
                className='nav-links'>
                Lokacije
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;