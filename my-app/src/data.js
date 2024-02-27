import portfolioPic from "./images/aviportfoliowebsiteProjectPic.png"
import bpaPic from "./images/bpaProjectPic.png"
import blackjackPic from "./images/blackjackProjectPic.png"
import hsmnPic from "./images/hsmnProjectPic.png"
import trojanroboticsPic from "./images/trojanroboticsProjectPic.png"
import financialyearlyreportsPic from "./images/financialyearlyreportsProjectPic.png"
import youthVoterProjectPic from "./images/youthVoterProjectPic.png"
import counterzPic from "./images/counterzProjectPic.png"
import shecanPic from "./images/shecanProjectPic.png"
import braydenPic from "./images/brayden.jpg"
import deepakPic from "./images/deepak.jpg"


// Social links which are on here and the footer
const linkedinLink = "https://www.linkedin.com/in/avi-bandi-397279227/"
const githubLink = "https://github.com/aviBandi"


// Testimonial information
const testimonialInfo = [
    {
        personName:"Deepak Balasubramaniam",
        personTitle: "SheCan MN Director",
        imgSrc: deepakPic,
        testimonial:"The communication during the development was flawless and Avi did an amazing job, exceeding all of our expectations; his punctuality, meticulousness, and conscientiousness are unparalleled. "
    },
    {
        personName:"Brayden Wright",
        personTitle: "Web Developer",
        imgSrc: braydenPic,
        testimonial:"I've worked with Avi, and he is an very fast learner when something new is thrown at him. He is dedicated to getting the task done, and works well with people. I would highly recommend any of Avi's services."
    },    

]

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
        websiteLink: "",
        codeLink: ""
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
        imgSrc: portfolioPic,
        websiteLink: "https://www.avibandi.com/",
        codeLink: "https://github.com/aviBandi/aviPortfolioWebsite"
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

        title: "Youth Voter Project (In Development)",
        desc: "Connecting teens to democracy!",
        skills: ["React.js", "TailwindCSS", "HTML", "NPM", "Figma"],
        imgSrc: youthVoterProjectPic,
        websiteLink: "https://www.youthvoterproject.org/",
        codeLink: "https://github.com/aviBandi/youthVoterProject"
    },
    {

        title: "Blackjack",
        desc: "Blackjack game anyone can play for fun or to sharpen their skills... also my first project in Java.",
        skills: ["Java", "User Friendliness", "Error Checking", "Game Audio"],
        imgSrc: blackjackPic,
        websiteLink: "https://github.com/aviBandi/Blackjack-in-java",
        codeLink: "https://github.com/aviBandi/Blackjack-in-java"
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
        cost: "150",
        whyMe: ["100% Code Ownership", "1 Year Warranty", "Website Updates", "Satisfaction Gauranteed"]
    },
    {
        title: "Custom Code Script",
        description: "Custom script for your buisness tailored to your needs. Allows you to acheive new heights with technology to do the heavy lifting.",
        cost: "125",
        whyMe: ["100% Code Ownership", "Python or Java", "Effecient clean code", "Intuitive GUI"]
    }
]



export {projectInfo, linkedinLink, githubLink, servicesList, testimonialInfo};