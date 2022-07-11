export interface Project{
    project:string,
    role:string,
    desc:string,
    tech:string[],
}

export const GuavaGirl:Project = {
    project:"Guava Girl Fruit Stand",
    role:"Front-End Developer",
    desc:"Worked in a team of 3 to develop the Guava Girls NFT Market Place. I developed the websites Front-end and implemented the Wallet Authentication.",
    tech:["Redux", "React"],
}

const WiC:Project = {
    project:"WiC Website",
    role:"",
    desc:"",
    tech:[],
}

const Goverlytics:Project = {
    project:"Goverlytics",
    role:"",
    desc:"",
    tech:[],
}

export const ProjectList:Project[] = [
    GuavaGirl, WiC,Goverlytics
]