import tw from "twin.macro";
import styled from "styled-components";

export const Filler = tw.div`
    flex-grow
`

export const Bold = tw`font-weight[bold]`

export const Section = tw.div`
    relative
    w-full
    max-w-6xl
    flex
    flex-col    
    pl-5
    pr-5
    mb-20
`

export const SectionTitle = tw.h1`
    font-title
    text-section_title
    mb-5
`

export const Container = tw.div`
    md:pl-[52px]
`

export const Body = tw.div`
    mb-5
`

export const Title = tw.p`
    font-body
    font-weight[bold]
    text-title_size
    mb-3
`
export const Desc = tw.p`
    font-body
    text-body_size
`



export const BlobContainer =  styled.div`
    ${tw`
        absolute
        z-[-1]
    `}
    ${prop => prop.theme.position};
    width:${prop => prop.theme.width};
    transform: rotate(${prop => prop.theme.deg}) scaleX(${prop => prop.theme.flipped?-1:1});
    svg{
        fill:${prop => prop.theme.color};
    }
    
`