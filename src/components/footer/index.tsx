import styled from "styled-components";
import tw from "twin.macro";
import {AllSocials} from "../socials";


const FooterContainer = styled.div`
  ${tw`
      // bg-dark_purple
      h-44
      bg-top
      flex
      items-end
      pt-24
      bg-repeat-x
  `}
  background-image: url('/img/blob/footer2.svg');
`
const Content = tw.div`
  w-full
  h-full
  p-3
  flex
  justify-center
  bg-dark_purple
`


function Footer() {
  return (
    <FooterContainer>
      <Content>
        <AllSocials theme="light"/>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
