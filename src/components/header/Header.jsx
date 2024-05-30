import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  // Функция, которая определяет, должна ли ссылка быть активной
  const isLinkActive = (path) => {
    return pathname.includes(path);
  };

  return (
    <div className='header'>
      <p>LEARN TO PROTECT NATURE!</p>
      <div className='links'>
        <Link to="/" className={pathname === "/" ? "active" : ""}>Main</Link>
        <Link to="/game" className={pathname === "/game" ? "active" : ""}>Game</Link>
        <Link to="/instruction" className={isLinkActive("/instruction") ? "active" : ""}>Instruction</Link>
        <Link to="/information" className={pathname === "/information" ? "active" : ""}>About</Link>
      </div>
    </div>
  );
}
