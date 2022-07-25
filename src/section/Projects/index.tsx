import tw from "twin.macro";
import styled from "styled-components";
import { BlobContainer, Bold,  Section, SectionTitle, Title } from "../../components/base";
import { Project, ProjectList } from "./ProjectList";
import { Blob2, Blob3 } from "../../img/blobs";
import { FadeInUp } from "../../components/base/transition";
import { useInView } from "react-intersection-observer";

const ProjectContainer = styled.div`
    ${tw`
        grid
        grid-cols-1
        gap-5
        md:ml-10
        md:grid-cols-2
    `}    
`
const Container = styled.div`
    ${tw`
        items-start
        relative
        w-full
        h-full
    `}    

    &.inView {
        animation: .5s ${FadeInUp};
    }
`

const ContainerFade = styled.div`
    ${tw`
        w-full
        h-full
    `}
`

const ProjectInfo = styled.div`
    ${tw`
        absolute
        rounded-xl
        w-full
        h-full
        p-3
        bg-text_dark
        bg-opacity-80
        text-white

        opacity-0
        transition-all
        delay-75
    `}
    
    &:hover{
        ${tw`
            opacity-100
        `}
    }
    
`

const LinkContainer = styled.div`
    ${tw`
        absolute
        left-0
        bottom-0
        mb-[15%]
        
        flex
        justify-center

        w-full
        h-auto
    ` }

    &.nonactive{
        ${tw`
            hidden
        `}
    }
`

const Link = styled.a`
   ${tw`
        border-light_purple
     
        border-2
        rounded-md
        p-3

        text-light_purple
        text-center
        text-prj_text_size
        font-bold
        cursor-pointer
   ` }
   
    &.nonactive{
        ${tw`
            hidden
        `}
    }
    
`

export const ProjectImg = tw.img`
    bg-dark_purple
    rounded-xl
    h-full
    w-full
    self-center
`

export const Desc = tw.p`
    font-body
    text-prj_text_size
`

function ProjectFormat(prj:Project, key:number){   
    const [ref, inView] = useInView({
        threshold:0,
        triggerOnce:true
    });

    
    return(
        <ContainerFade ref={ref}  key={key} >
            <Container className={inView?"inView":""}>
                <ProjectInfo>
                    <Title >{prj.project}</Title>
                    <Desc style={Bold}>{prj.role}</Desc>
                    <Desc>{prj.desc}</Desc>
                    <br></br>
                    <Desc style={Bold}> Technology Used: </Desc>
                    <Desc>{ prj.tech}</Desc>
                    <br/>
                    <LinkContainer>
                        <Link className={prj.link == null?"nonactive":""} href={prj.link!} target="_blank"> 
                            Visit {prj.project}
                        </Link>
                    </LinkContainer>
                    
                </ProjectInfo>
                <ProjectImg className="mb-3" src={prj.img}/>
            </Container>
        </ContainerFade>
        
    )

}


export function Projects(){
    let lightBlob = {color:"#cdc9df", width:"130em", position:"top:-30em; right:-80em", deg:"70deg", flipped:true};
    let blueBlob =  {color:"#d0e2ff", width:"18em", position:"top:10em; right:65em", deg:"150deg", flipped:true};
    let darkBlob =  {color:"#5d5682", width:"40em", position:"top:-10em; right:60em", deg:"290deg", flipped:false};   
    

    return (
        <Section id="Projects">
            <BlobContainer theme={lightBlob}>{Blob3()}</BlobContainer>
            <BlobContainer theme={darkBlob}>{Blob3()}</BlobContainer> 
            <BlobContainer theme={blueBlob}>{Blob2()}</BlobContainer>

            <SectionTitle>Projects</SectionTitle>
            <ProjectContainer>
                {ProjectList.map((prj:Project, key:number) => {
                    return  ProjectFormat(prj, key)
                })}
            </ProjectContainer>
        </Section>
    );
}