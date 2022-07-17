export interface Project{
    project:string,
    role:string,
    desc:string,
    tech:string,
    link:string|null,
    img:string
}

export const GuavaGirl:Project = {
    project:"Guava Girl Fruit Stand",
    role:"Front-End Developer",
    desc:"Earn daily $GUAVAS for holding your Guava Girl NFTs!",
    tech:"React, HTML5, SCSS, TypeScript, Tailwind, Redux, Node.js, web3",
    link:"https://guavagirlsrewards.com/",
    img:"./img/projects/gg_mockup.png"
}

const WiC:Project = {
    project:"WiC Club Website",
    role:"Full Stack Developer",
    desc:"BCIT's Women in Computing Club aims to empower, promote and connect female computings student. ",
    tech:"React, HTML5, CSS3, TypeScript, Firebase",
    link:"https://wic-bcit.github.io/WiC/#/",
    img:"./img/projects/wic_mockup.png"
}

const Goverlytics:Project = {
    project:"Goverlytics",
    role:"Full Stack Developer",
    desc:"Goverlytics is a web-based solution to visualize US Congressional data in an intuitive way for end users.",
    tech:"Python, Django, SQLite, JavaScript, HTML5, CSS3, ChartsJS",
    link:"https://ioto.ca/goverlytics.html",
    img:"./img/projects/gov.png"
}

const Stego :Project = {
    project:"Steganography Application",
    role:"Software Developer",
    desc:"Secure an image by storing it within another image with encryption. ",
    tech:"C, OpenSSL",
    link:"https://github.com/njingco/Steganography",
    img:"./img/projects/stego.png",
}

export const ProjectList:Project[] = [
    GuavaGirl, WiC, Goverlytics, Stego
]