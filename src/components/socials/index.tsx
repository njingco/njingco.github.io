import styled from "styled-components";
import tw from "twin.macro";
import { Email, GithubInfo, LinkedIn, Social } from "./SocialInfo";

const Container=tw.div`
  flex
  gap-3
`
const SocialContainer = tw.div``

const Link = styled.a`
  & svg{
    ${tw`
        w-8
        h-8
    `}
    &.light{
      ${tw`
        text-text_light
      `}
    }
    &.dark{
      ${tw`
        text-text_dark
      `}
    }

  }

  
`
function SocialStyled(prop:Social, theme:string){
  return (
      <SocialContainer>
          <Link href={prop.url} target="_blank">
              {<prop.icon className={theme}/>}
          </Link>
      </SocialContainer>
  )
}

export function AllSocials(prop:any) {
  return (
    <Container>
       {SocialStyled(GithubInfo, prop.theme)}
       {SocialStyled(LinkedIn, prop.theme)}
       {SocialStyled(Email, prop.theme)}
    </Container>
  );
}

