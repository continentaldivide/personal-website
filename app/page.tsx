'use client';
import { useState } from 'react';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navitem from './components/Navitem';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(<Home />);

  const handleNavClick = (component: JSX.Element) => {
    setCurrentPage(component);
  };
  return (
    <>
      <nav className="p-4 fixed top-0 left-0 right-0">
        <ul className="flex items-center justify-center gap-10">
          <Navitem
            itemName={'home'}
            handleNavClick={() => handleNavClick(<Home />)}
          />
          <Navitem
            itemName={'portfolio'}
            handleNavClick={() => handleNavClick(<Portfolio />)}
          />
          <Navitem
            itemName={'contact'}
            handleNavClick={() => handleNavClick(<Contact />)}
          />
        </ul>
      </nav>
      <main className="flex flex-col items-center">{currentPage}</main>
    </>
  );
}
