import styled from "styled-components";
import tw from "twin.macro";
import { LinkScroll } from "./LinkScroll";
import React, { useState } from 'react';

const NavContainer = styled.div`
  ${tw`
    z-20
    w-full
    h-24
    items-center
    justify-center
    fixed
    top-0
    bg-transparent
  `}
  &.active{
    ${tw`
      transition-all
      duration-500
      bg-white
    `}
`
const NavMenu  = styled.nav`
  ${tw`
    flex
    items-center
    justify-center
    p-5
  `}
`

const NavList  = styled.ul`
  ${tw`
      flex
      gap-8
  `}
`

const NavItem  = styled.li`
  ${tw`
      font-subtitle
      cursor-pointer
      p-2
  `}

   & .active{
      ${tw`
        border-b-2
    `}
   }
`
  
function Navbar() {
  const Menu = 
  <NavMenu>
    <NavList>
      <NavItem><LinkScroll to="Profile"/></NavItem>
      <NavItem><LinkScroll to="Education"/></NavItem>
      <NavItem><LinkScroll to="Projects"/></NavItem>
      <NavItem><LinkScroll to="Volunteer"/></NavItem>
    </NavList>
  </NavMenu>
 
  const [hasScrolled, sethasScrolled] = useState(false);
  
  window.onscroll = () => {
    if (window.scrollY == 0){
      sethasScrolled(false);
    } else{
      sethasScrolled(true);
    }
   
  };
  

  return (
    <NavContainer className={hasScrolled? "active":""}>
        {Menu}
    </NavContainer>
  );
}

export default Navbar;
