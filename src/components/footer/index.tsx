import styled from "styled-components";
import tw from "twin.macro";
import {AllSocials} from "../socials";


const FooterContainer = styled.div`
  background-image: url("/img/blob/footer.svg");

  ${tw`
    bg-dark_purple
    w-full
    h-24
    flex
    justify-center
    items-center
    `
  }
`

function Footer() {
  return (
    <FooterContainer>
      <AllSocials theme="light"/>
    </FooterContainer>
  );
}

export default Footer;
