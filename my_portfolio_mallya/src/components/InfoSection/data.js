export const homeObjOne={
    id:'about',
    lightBg:false,
    lightText:true,
    lighttextDesc: true,
    topLine: "I am Vignesh Mallya",
    headline: 'A Fullstack Developer',
    description: "On a mission to create captivating web experiences. With a strong foundation in web development and expertise in React, I strive to create robust and user-friendly applications. My journey in the world of software development began from 2019, and I've been hooked ever since.",
    buttonLabel: 'Know more',
    imgStart: false,
    img: require(`../../images/about.svg`).default,
    alt: 'About',
    dark:true,
    primary:true,
    darkText:false,
    to:'work',
    animateText:true
}

export const homeObjTwo={
    id:'work',
    lightBg:true,
    lightText:false,
    lighttextDesc: false,
    topLine: 'Technology Analyst',
    headline: '3+ years of experience',
    description: "I believe that every line of code has a story to tell, and I'm here to craft those stories into seamless user experiences. After exploring various fields and undergoing training in diverse areas, I have discovered a profound affinity for React.",
    buttonLabel: 'Download CV',
    imgStart: true,
    img: require(`../../images/work.svg`).default,
    alt: 'Work',
    dark:false,
    primary:false,
    darkText:true,
    to:'',
    animateText:false
}