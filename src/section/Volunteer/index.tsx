import styled from "styled-components";
import tw from "twin.macro";
import { BlobContainer, Body, Bold, Container, Desc, Section, SectionTitle, Title } from "../../components/base";
import { Volunteer, VolunteerList } from "./VolunteerList";
import { Blob1, Blob2 } from "../../img/blobs";
import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from "../../components/base/transition";

const VolunteerContainer = styled.div`
    ${tw`
        grid
        gap-10
        justify-center

        md:grid-cols-2
    `}    
`

const ContainerFade = styled.div`
    ${tw`
        mb-5
    `}
    &.inView {
        animation: 1s ${FadeIn};
    }
`

function VolunteerFormat(vol:Volunteer, key:number){
    const ref = useRef();
    const [inViewRef, inView] = useInView();

    const setRefs = useCallback(
        (node:any) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef],
    );

    return (
        <Body ref={setRefs} key={key} >
            <ContainerFade className={inView?"inView":""}>
                <Title>{vol.title}</Title>
                <Desc className="mb-3" style={Bold}>{vol.role} ({vol.date})</Desc>
                <Desc>{vol.description}</Desc>
            </ContainerFade>
        </Body>
    )
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
                    {
                        VolunteerList.map((vol:Volunteer, key:number)=>{
                            return VolunteerFormat(vol, key)
                        })
                    }
                </VolunteerContainer>
            </Container>
        </Section>
    );
}