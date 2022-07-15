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
    desc:"Worked in a team of 3 to develop the Guava Girls Market Place. I developed the websites from the main group's artist wireframes Front-end and implemented the Wallet Authentication.",
    tech:"React, HTML5, SCSS, TypeScript, Tailwind, Redux, Node.js, web3",
    link:null,
    img:"./img/projects/gg.png"
}

const WiC:Project = {
    project:"WiC Club Website",
    role:"Full Stack Developer",
    desc:"I designed and developed the BCIT's Women in Computing website. I create the design using Figma, implemented the database using Firebase and built the website using React and Typescript.",
    tech:"React, HTML5, CSS3, TypeScript, Firebase",
    link:"https://wic-bcit.github.io/WiC/#/",
    img:"./img/projects/wic.png"
}

const Goverlytics:Project = {
    project:"Goverlytics",
    role:"Full Stack Developer",
    desc:"Worked in a team of five to develop a web-based solution to visualize US Congressional data in an intuitive way for end users. My role was visualizing the political data using tables and graphs.",
    tech:"Python, Django, SQLite, JavaScript, HTML5, CSS3, ChartsJS",
    link:"https://ioto.ca/goverlytics.html",
    img:"./img/projects/gov.png"
}

export const ProjectList:Project[] = [
    GuavaGirl, WiC,Goverlytics
]