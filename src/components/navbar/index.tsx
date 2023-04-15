import styled from "styled-components";
import tw from "twin.macro";
import { LinkScroll } from "./LinkScroll";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const NavContainer = styled.div`
  ${tw`
    z-20
    w-full
    h-20
    items-center
    justify-center
    fixed
    top-0
    bg-transparent
    transition-all
    duration-500
  `}
  &.active{
    ${tw`
      md:bg-white
    `}
`;

const NavIcon = styled.div`
  ${tw`
      absolute
      z-30
      top-5
      right-5
      cursor-pointer
      md:hidden
    `}

  svg {
    ${tw`
        w-7
        h-7
        text-text_dark
      `}
  }

  &.active {
    ${tw`

      `}
  }
`;
const NavMenu = styled.nav`
  ${tw`
    flex
    items-center
    justify-center
    p-5
  `}
`;

const NavList = styled.ul`
  ${tw`
      bg-white
      flex
      flex-col
      p-5
      w-full
      text-center
      absolute  
      top-[-500%]
      gap-8
      transition-all
      duration-500
       
      md:bg-transparent
      md:flex  
      md:flex-row
      md:justify-center
      md:visible
      md:pt-5
      md:gap-8
      md:top-0
      
  `}

  &.active {
    ${tw`
      visible
      top-0  
    `}
  }
`;

const NavItem = styled.li`
  ${tw`
      font-subtitle
      cursor-pointer
      p-2
  `}

  & .active {
    ${tw`
        border-b-2
    `}
  }
`;

function Navbar() {
  const [hasScrolled, sethasScrolled] = useState(false);
  const [navActive, setnavActive] = useState(false);

  window.onscroll = () => {
    if (window.scrollY === 0) {
      sethasScrolled(false);
    } else {
      sethasScrolled(true);
    }
  };

  return (
    <NavContainer className={hasScrolled ? "active" : ""}>
      <NavMenu>
        <NavIcon
          className={navActive ? "active" : ""}
          onClick={() => {
            setnavActive(!navActive);
          }}
        >
          {<TiThMenu />}
        </NavIcon>
        <NavList className={navActive ? "active" : ""}>
          <NavItem>
            <LinkScroll
              to="Profile"
              onClick={() => {
                setnavActive(false);
              }}
            />
          </NavItem>
          <NavItem>
            <LinkScroll
              to="Experience"
              onClick={() => {
                setnavActive(false);
              }}
            />
          </NavItem>
          <NavItem>
            <LinkScroll
              to="Education"
              onClick={() => {
                setnavActive(false);
              }}
            />
          </NavItem>
          <NavItem>
            <LinkScroll
              to="Projects"
              onClick={() => {
                setnavActive(false);
              }}
            />
          </NavItem>
          <NavItem>
            <LinkScroll
              to="Volunteer"
              onClick={() => {
                setnavActive(false);
              }}
            />
          </NavItem>
        </NavList>
      </NavMenu>
    </NavContainer>
  );
}

export default Navbar;
