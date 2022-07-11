import tw from "twin.macro";
import { BlobContainer, Body, Bold,  Desc, Section, SectionTitle, TempImg, Title } from "../../components/base";
import { GuavaGirl, Project } from "./ProjectList";
import { Blob2, Blob3 } from "../../img/blobs";


const Container = tw.div`
    w-full
    gap-10
    flex
    flex-col
    justify-center
    md:flex-row
    md:pl-[52px]
`

const Bottom = tw`mb-10`

function ProjectFormat(prj:Project){
    return(
        <Container >
            <TempImg/>
            <Body style={Bottom}>
                <Title>{prj.project}</Title>
                <Desc style={Bold}>{prj.role}</Desc>
                <Desc>{prj.desc}</Desc>
                <br></br>
                <Desc style={Bold}> Technology Used: </Desc>
                <Desc>{prj.tech}</Desc>
            </Body>
        </Container>
    )

}


export function Projects(){
    let lightBlob = {color:"#cdc9df", width:"130em", position:"top:-30em; right:-80em", deg:"70deg", flipped:true};
    let blueBlob =  {color:"#d0e2ff", width:"18em", position:"top:40em; right:65em", deg:"150deg", flipped:true};
    let darkBlob =  {color:"#5d5682", width:"40em", position:"top:20em; right:60em", deg:"290deg", flipped:false};
   
    return (
        <Section id="Projects">
              <BlobContainer theme={lightBlob}>{Blob3()}</BlobContainer>
            <BlobContainer theme={darkBlob}>{Blob3()}</BlobContainer> 
            <BlobContainer theme={blueBlob}>{Blob2()}</BlobContainer>

            <SectionTitle>Projects</SectionTitle>
            {ProjectFormat(GuavaGirl)}
            {ProjectFormat(GuavaGirl)}
            {ProjectFormat(GuavaGirl)}
            {ProjectFormat(GuavaGirl)}
        </Section>
    );
}