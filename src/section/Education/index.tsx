import {
  Body,
  Container,
  Desc,
  Title,
  Section,
  SectionTitle,
  Bold,
} from "../../components/base";
import tw from "twin.macro";

const Credential = tw.div`
    flex
    flex-col
    gap-5
`;

export function Education() {
  return (
    <Section id="Education">
      <SectionTitle>Education</SectionTitle>
      <Container>
        <Title>BrainStation</Title>
        <Credential>
          <Body>
            <Desc style={Bold}>User Experience Certification</Desc>
            <Desc>April 2023</Desc>
          </Body>
        </Credential>
      </Container>
      <Container>
        <Title>British Columbia Institute of Technology</Title>
        <Credential>
          <Body>
            <Desc style={Bold}>Bachelor of Technology in Computer Systems</Desc>
            <Desc>
              Specialization: Network Security Applications Development
            </Desc>
            <Desc>2020-2022</Desc>
          </Body>
          <Body>
            <Desc style={Bold}>Diploma in Computer Systems Technology</Desc>
            <Desc>Specialization: Data Communications and Internetworking</Desc>
            <Desc>2018-2020</Desc>
          </Body>
        </Credential>
      </Container>
    </Section>
  );
}
