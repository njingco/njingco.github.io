import tw from "twin.macro";
import styled from "styled-components";
import { BlobContainer, Body, Bold,  Desc, Section, SectionTitle, Img, Title } from "../../components/base";
import { Project, ProjectList } from "./ProjectList";
import { Blob2, Blob3 } from "../../img/blobs";
import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeInRight } from "../../components/base/transition";

const Container = styled.div`
    ${tw`
        w-full
        h-full
        max-w-4xl
        grid
        gap-3
        items-start
        
        md:grid-cols-2
        md:pl-[52px]
        md:gap-10
    `}

    &.inView {
        animation: .5s ${FadeInRight};
    }
    
`

const ContainerFade = styled.div`
    ${tw`
        w-full
        h-full
    `}
`

const ProjectContainer = styled.div`
    ${tw`
        flex
        flex-col
        gap-10
    `}    
`

const Link = styled.a`
   ${tw`
        w-full
        h-full
        text-dark_purple
        font-bold
        border-b-2
        border-dark_purple
        visible
   ` }

   &.nonactive{
    ${tw`
        hidden
    `}
`

function ProjectFormat(prj:Project, key:number){   
    const ref = useRef();
    const [inViewRef, inView] = useInView();

    const setRefs = useCallback(
        (node:any) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef],
    );

    return(
        <ContainerFade ref={setRefs}  key={key} >
            <Container className={inView?"inView":""}>
                <Img className="mb-3" src={prj.img}/>
                <Body>
                    <Title>{prj.project}</Title>
                    <Desc style={Bold}>{prj.role}</Desc>
                    <Desc>{prj.desc}</Desc>
                    <br></br>
                    <Desc style={Bold}> Technology Used: </Desc>
                    <Desc>{ prj.tech}</Desc>
                    <br/>
                    <Link className={prj.link == null?"nonactive":""} href={prj.link!} target="_blank"> Visit {prj.project}</Link>
                </Body>
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