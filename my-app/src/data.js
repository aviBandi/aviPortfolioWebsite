import image from "./images/testing.png"
import bpaPic from "./images/bpaProjectPic.png"
import blackjackPic from "./images/blackjackProjectPic.png"
import hsmnPic from "./images/hsmnProjectPic.png"
import trojanroboticsPic from "./images/trojanroboticsProjectPic.png"
import financialyearlyreportsPic from "./images/financialyearlyreportsProjectPic.png"
import counterzPic from "./images/counterzProjectPic.png"
import shecanPic from "./images/shecanProjectPic.png"

// Social links which are on here and the footer
const linkedinLink = "https://www.linkedin.com/in/avi-bandi-397279227/"
const githubLink = "https://github.com/aviBandi"

// Project info which is on the Portfolio pages and the first three on home page
const projectInfo = [
    {
        title: "Counterz",
        desc: "Desktop application that analyzes and reports traffic data analytics.",
        skills: ["Python", "OpenCV", "Machine Learning", "Convolutional Neural Networks", "Kivy", "(New GUI in development)"],
        imgSrc: counterzPic,
        websiteLink: "https://github.com/aviBandi/Counterz-Desktop-Application",
        codeLink: "https://github.com/aviBandi/Counterz-Desktop-Application"
    },
    {
        title: "Trojan Robotics Website",
        desc: "Website for my high school robotics team... also my first website I ever built!",
        skills: ["React.js", "TailwindCSS", "CSS", "HTML", "Vercel", "NPM"],
        imgSrc: trojanroboticsPic,
        websiteLink: "https://www.trojanrobotics.com/home",
        codeLink: "https://github.com/aviBandi/RoboticsWebsite"
    },
    {

        title: "SheCan MN Website",
        desc: "State website that empowers women to explore STEM careers and fields.",
        skills: ["React.js", "TailwindCSS", "HTML", "Figma", "Vercel", "NPM"],
        imgSrc: shecanPic,
        websiteLink: "https://braydentw.io/projects",
        codeLink: "https://braydentw.io/projects"
    },
    {

        title: "Financial Yearly Reports",
        desc: "Donation statement analyzer, creater, and sender based on IRS regulations for 501(c)(3) nonprofits. Code and demo hidden as proprietary to my nonprofit internship.",
        skills: ["Python", "MongoDB", "PyGUI", "Google API's", "Miro",],
        imgSrc: financialyearlyreportsPic,
        websiteLink: "",
        codeLink: ""
    },
    {

        title: "My Portfolio Website!",
        desc: "Can't make all those websites without one for myself! Check it out.",
        skills: ["TailwindCSS", "React.js", "Figma", "Vercel", "HTML", "NPM"],
        imgSrc: image,
        websiteLink: "https://braydentw.io/projects",
        codeLink: "https://braydentw.io/projects"
    },
    {

        title: "HSMN Website",
        desc: "Website for a multimillion dollar MN hindu nonprofit organization.",
        skills: ["Search Engine Optimization", "Teamwork", "Timley Delivery", "HTML", "UI/UX Design"],
        imgSrc: hsmnPic,
        websiteLink: "https://www.hindutemplemn.org/",
        codeLink: ""
    },
    {

        title: "Blackjack",
        desc: "Blackjack game anyone can play for fun or to sharpen their skills... also my first project in Java.",
        skills: ["Java", "User Friendliness", "Error Checking", "Game Audio"],
        imgSrc: blackjackPic,
        websiteLink: "https://www.hindutemplemn.org/",
        codeLink: "https://braydentw.io/projects"
    },
    {

        title: "BPA Records Keeper",
        desc: "Transitioned google sheets crosscheck from forty minute process to one minute automated process.",
        skills: ["Python", "Google Sheets API", "Problem Solving", "Tkinter (in process of creating GUI)"],
        imgSrc: bpaPic,
        websiteLink: "https://github.com/aviBandi/BPA-Automation",
        codeLink: "https://github.com/aviBandi/BPA-Automation"
    },

]

// On services page
const servicesList = [
    {
        title: "Company Website",
        description: "Custom company website with no hidden fees. Created by a world class designer, this website can scale your buisness to the next level.",
        cost: "70",
        whyMe: ["100% Code Ownership", "1 Year Warranty", "Website Updates", "Satisfaction Gauranteed"]
    },
    {
        title: "Custom Code Script",
        description: "Custom script for your buisness tailored to your needs. Allow you to acheive new heights with technology to do the heavy lifting.",
        cost: "60",
        whyMe: ["100% Code Ownership", "Python or Java", "Effecient clean code", "Intuitive GUI"]
    }
]

export {projectInfo, linkedinLink, githubLink, servicesList};