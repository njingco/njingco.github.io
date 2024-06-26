import {
  Body,
  Container,
  Desc,
  Title,
  Section,
  SectionTitle,
  Bold,
  Italic,
  TopMargin,
} from "../../components/base";
import tw from "twin.macro";

const Credential = tw.div`
    flex
    flex-col
    gap-5
`;

export function Experience() {
  return (
    <Section id="Experience">
      <SectionTitle>Experience</SectionTitle>
      <Container>
        <Title>Produce8 | Front-End Developer </Title>
        <Credential>
          <Body>
            <Desc>
              In my role, I contributed to enhancing our SaaS product across
              multiple platforms, including web, mobile, browser plugins, and
              desktop applications. My responsibilities included building new
              features, ensuring they seamlessly integrated into our existing
              systems. I transformed wireframes into responsive components,
              ensuring optimal user experience across various devices.
              Additionally, I was involved in designing features, contributing
              to both the visual and functional aspects of our product to meet
              the evolving needs of our users.
            </Desc>
            <Desc style={{ ...Italic, ...TopMargin }}>
              React, React Native, Typescript, Styled Components, Electron,
              GraphQL, Apollo, AWS,
            </Desc>
            <Desc>August 2023 - Present</Desc>
          </Body>
        </Credential>
      </Container>
      <Container>
        <Title>MetroQuest | Front-End Developer & UX/UI Designer</Title>
        <Credential>
          <Body>
            <Desc>
              I had the opportunity to work in a team of five, where we
              collaborated to develop and maintain our Software-as-a-Service
              (SaaS) products. During this time, I was responsible for
              implementing wireframes into responsive and reusable components,
              as well as testing and debugging code to ensure
              cross-compatibility. Additionally, I had the chance to utilize my
              design skills to create wireframes and interactive prototypes
              using Figma.
            </Desc>
            <Desc style={{ ...Italic, ...TopMargin }}>
              React, Redux, HTML, TypeScript, SCSS, Jest, AngularJS, Azure
            </Desc>
            <Desc>October 2022 - June 2023</Desc>
          </Body>
        </Credential>
      </Container>
      <Container>
        <Title>Guava Girls NFT | Front-End Developer & UX/UI Designer</Title>
        <Credential>
          <Body>
            <Desc style={Bold}></Desc>
            <Desc>
              I worked with a back-end developer to create the Guava Girls
              Rewards website. My role in this project was to design the website
              using Figma and develop the front-end using React, TypeScript, and
              Redux. In addition, I developed a responsive design that ensured
              the website was easily accessible on desktop, tablet, and mobile
              screens. To enhance the website's security, I implemented login
              authentication using web3 and MetaMask.
            </Desc>
            <Desc style={{ ...Italic, ...TopMargin }}>
              React, Redux, TypeScript, Tailwind, Jest, Axios, AWS
            </Desc>
            <Desc>June 2022 - November 2022</Desc>
          </Body>
        </Credential>
      </Container>
    </Section>
  );
}
