import React, { useState } from 'react';
import NavbarContainer from './Nav';
import Sidebar from './Sidebar';

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <NavbarContainer toggleMenu={setIsOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
    </>
  );
}
