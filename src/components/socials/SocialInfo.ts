import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { ImMail } from 'react-icons/im';

export interface Social{
    name:string,
    url:string,
    icon:any,
}

export const GithubInfo:Social = {
    name:"Github",
    url:"https://github.com/njingco",
    icon:FaGithubSquare,
}

export const LinkedIn:Social = {
    name:"LinkedIn",
    url:"https://www.linkedin.com/in/nicole-jingco/",
    icon:FaLinkedin,
}

export const Email:Social = {
    name:"Email",
    url:"mailto: jingco.nicole@gmail.com",
    icon:ImMail,
}
