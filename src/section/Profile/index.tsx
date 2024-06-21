import tw from "twin.macro";
import styled from "styled-components";
import { Section, BlobContainer } from "../../components/base";
import { AllSocials } from "../../components/socials";
import { Blob3, Blob4, Blob5 } from "../../img/blobs";

const ProfileContainter = tw.div`
    flex
    flex-col
    items-center
    gap-10
    overflow-hidden
    md:flex-row
    md:pb-[50px]
    md:mt-10
    lg:justify-center
`;

const PicContainer = styled.div`
  ${tw`
        bg-text_dark
        w-72
        h-72
        rounded-full
        p-1
    `}
`;

const Picture = tw.img`
    rounded-full
`;

const DescContainer = tw.div`
    flex
    flex-col
    items-center
    md:mt-20
    md:items-start
`;

const Name = tw.div`
    font-title
    text-[56px]
    [line-height:72px]
    text-center
    md:text-left
    md:text-[72px]
`;
const Desc = tw.div`
    font-subtitle
    text-[20px]
    mb-3
    text-center
    md:text-left
    md:text-[22px]
`;

export function Profile() {
  let lightBlob = {
    color: "#cdc9df",
    width: "100em",
    position: "top:-20em; right:20em",
    deg: "-5deg",
    flipped: true,
  };
  let blueBlob = {
    color: "#d0e2ff",
    width: "15em",
    position: "top:25em; right:20em",
    deg: "10deg",
    flipped: false,
  };
  let darkBlob = {
    color: "#5d5682",
    width: "50em",
    position: "top:-40em; right:-40em",
    deg: "290deg",
    flipped: false,
  };

  return (
    <Section id="Profile" className="mt-28">
      <BlobContainer theme={lightBlob}>{Blob5()}</BlobContainer>
      <BlobContainer theme={blueBlob}>{Blob4()}</BlobContainer>
      <BlobContainer theme={darkBlob}>{Blob3()}</BlobContainer>
      <ProfileContainter>
        <PicContainer>
          <Picture src="./img/profile/portrait.png" />
        </PicContainer>
        <DescContainer>
          <Name>Nicole Jingco</Name>
          <Desc>Frontend Developer</Desc>
          <AllSocials theme="dark" />
        </DescContainer>
      </ProfileContainter>
    </Section>
  );
}
