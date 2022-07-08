import styled from "styled-components";
import tw from "twin.macro";
import { LinkScroll } from "./LinkScroll";

const NavContainer = tw.div`
    w-full
    h-24
    items-center
    justify-center
    sticky
    top-0
`
const NavMenu  = styled.nav`
  ${tw`
    flex
    items-center
    justify-center
    p-5
  `}

  &.active{
    ${tw``}
  }
`

const NavList  = styled.ul`
  ${tw`
      flex
      gap-8
  `}

  &.active{
    ${tw``}
  }
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
        border-dark_purple
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
      <NavItem><LinkScroll to="Contact"/></NavItem>
    </NavList>
  </NavMenu>

  return (
    <NavContainer>
        {Menu}
    </NavContainer>
  );
}

export default Navbar;
