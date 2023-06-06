'use client';
import { useState } from 'react';

import Home from './components/Home';
import Contact from './components/Contact';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(<Home />);

  const handleNavClick = (component: JSX.Element) => {
    setCurrentPage(component);
  };
  return (
    <>
      <nav className="bg-black">
        <ul className="flex items-center justify-center gap-10">
          <li>
            <button onClick={() => handleNavClick(<Home />)}>home</button>
          </li>
          <li>
            <button onClick={() => handleNavClick(<Contact />)}>contact</button>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center">{currentPage}</main>
    </>
  );
}
