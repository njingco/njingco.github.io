export interface Volunteer{
    title:string,
    role:string,
    description:string,
    date:string,
}

export const WiC:Volunteer = {
    title:"BCIT's Women in Computing Club",
    role:"President",
    description:"Worked in a team of 3 to develop the Guava Girls NFT Market Place. I developed the websites Front-end and implemented the Wallet Authentication.",
    date:"2019-2022"
}

const HTB22:Volunteer = {
    title:"",
    role:"",
    description:"",
    date:""
}

const HTB21:Volunteer = {
    title:"",
    role:"",
    description:"",
    date:""
}

const QDS:Volunteer = {
    title:"",
    role:"",
    description:"",
    date:""
}

const LAN:Volunteer = {
    title:"",
    role:"",
    description:"",
    date:""
}

export const VolunteerList:Volunteer[] = [
    WiC, HTB22, HTB21, QDS, LAN
];