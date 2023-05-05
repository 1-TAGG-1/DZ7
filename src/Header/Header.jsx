import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/About'>О нас</Link></li>
        <li><Link to='/Contact'>Контакты</Link></li>
      </ul>
    </>
  );
};