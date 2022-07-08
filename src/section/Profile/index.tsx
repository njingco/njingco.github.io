import styled from "styled-components";
import tw from "twin.macro";

const Section = tw.div`
    bg-light_purple
    w-full
    h-52
`

export function Profile(){
    return (
        <Section id="Profile">
            Profile
        </Section>
    );
}