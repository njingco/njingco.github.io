export interface Volunteer{
    title:string,
    role:string,
    description:string,
    date:string,
}

export const WiC:Volunteer = {
    title:"BCIT's Women in Computing Club",
    role:"President/Executive",
    description:
        `The Women in Computing Club is ran by female computing students with the goal to build a safe space for the female computing students in BCIT. The club organized and host events such as Mock Interview Workshops, company office tours, Networking Night, and Social Mixer. As the President and Executive member, I organize and host events, deligated tasks, and communicate with local Vancouver Tech Industries to join with our Events.`,
    date:"January 2019 - May 2022"
}

const HTB22:Volunteer = {
    title:"Hack the Break 2022",
    role:"Organizer & Host",
    description:
        "Hack the Break 2022 is second annual student club ran Hackathon in BCIT. I was a part of the organization team in-charge of the advertisements, event slides, hourly challanges and hosting the Kick Off presentation. The event had 95 participants and had a 21 submitted projects.",
    date:"March 2022"
}

const HTB21:Volunteer = {
    title:"Hack the Break 2021",
    role:"Organizer, Host & Judge",
    description:
        "Hack the Break 2021 is first annual student club ran Hackathon in BCIT. I was a part of the founding team where I shared my experience from previous Hackathons I volunteered in as well as creating the advertisements for the event. During the Hackathon I was the Host for the Kick Off presentation and the Project viewing, and one of the Judges.The event had over 100 participants and had a 19 submitted projects.",
    date:"March 2021"
}

const LAN:Volunteer = {
    title:"BCIT's LAN Party",
    role:"Game Admin",
    description:
        "The BCIT LAN Party is annual game night ran by the BCITSA's Chair of Computing hosting competitive tournaments and casual games from Leauge of Legends and Dota 2 to Board Games and more. I ran a team to setup and the computers ensure all the games are running. As the Dota 2 Game Admin, I created the Dota 2 tournament lobbies, and instruct the teams of their next matches.",
    date:"January 2020"
}

export const VolunteerList:Volunteer[] = [
    WiC, HTB22, HTB21, LAN
];