import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="brand display">Mohana Krishna</NavLink>
      <div className="navlinks">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
