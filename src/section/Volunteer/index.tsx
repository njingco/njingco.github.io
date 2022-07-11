import tw from "twin.macro";
import { BlobContainer, Body, Bold, Container, Desc, Section, SectionTitle, Title } from "../../components/base";
import { Volunteer, WiC } from "./VolunteerList";
import { Blob1, Blob2 } from "../../img/blobs";

const VolunteerContainer = tw.div`
    grid
    gap-10
    justify-center

    md:grid-cols-2
`

function VolunteerFormat(vol:Volunteer){
    return (
    <Body >
        <Title>{vol.title}</Title>
        <Desc style={Bold}>{vol.role}</Desc>
        <Desc>{vol.description}</Desc>
        <Desc>{vol.date}</Desc>
    </Body>)
}


export function Volunteers(){
    let lightBlob = {color:"#cdc9df", width:"80em", position:"top:-30em; right:55em", deg:"80deg", flipped:true};
    let blueBlob =  {color:"#d0e2ff", width:"30em", position:"top:25em; right:-5em", deg:"150deg", flipped:true};
   
    return (
        <Section id="Volunteer">
            <BlobContainer theme={lightBlob}>{Blob1()}</BlobContainer>
            <BlobContainer theme={blueBlob}>{Blob2()}</BlobContainer>
            <SectionTitle>Volunteer</SectionTitle>
            <Container>
                <VolunteerContainer >
                    {VolunteerFormat(WiC)}
                    {VolunteerFormat(WiC)}
                    {VolunteerFormat(WiC)}
                    {VolunteerFormat(WiC)}
                    {VolunteerFormat(WiC)}
                </VolunteerContainer>
            </Container>
        </Section>
    );
}