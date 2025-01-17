import { useEffect, useState } from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {FaChevronDown, FaGithub, FaLinkedin, FaBook} from 'react-icons/fa'
import {LiaChevronDownSolid} from 'react-icons/lia'
import axios from "axios";
import ResumeItems from "./ResumeItems";
import resumeDoc from './assets/resume_122424.docx?url';
import meImg from './assets/me.jpg?url';
const MainContent = () => {
    const reposURL = 'https://api.github.com/users/justin-care/repos';
    const [repoData, setRepoData] = useState([]);
    const urls = {
        github: 'https://github.com/justin-care',
        linkedin: 'https://www.linkedin.com/in/justin-care/',
        personal: 'http://justincare.com'
    }

    useEffect(() => {
        getRepoData();
    },[])

    const getRepoData = async () => {
        const response = await axios.get(reposURL);
        setRepoData(response.data);
        //console.log(response.data)
    }
    return (
        <main className="main-content w-full flex-1 flex flex-col mt-4 gap-4">
            <section id="welcome" className="w-full mb-8"></section>
            <section id="about" className="w-full flex flex-col gap-4 mb-8">
                <h1 className="text-3xl font-bold mb-4">About Me:</h1>
                <div className="flex xsm:flex-col md:flex-row xsm:items-center justify-center xsm:gap-4 md:gap-24">
                    <img src={meImg} alt="it's me, justin" className="md:w-1/4 md:h-1/4 xsm:w-1/2 xsm:h-1/2 rounded-md shadow-lg" />
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <p className="text-xl leading-10">Hello, and welcome to justincare.io!</p>
                        <p className="text-xl leading-10">I'm Justin, and I've spent the last decade+ as a Frontend Developer of various stripes</p>
                        <p className="text-xl leading-10">This is a place for me to house and display various projects that I'm working/worked on. A sort of digital portfolio and resume if you will.</p>
                        <p className="text-xl leading-10">You can find me on my <button className="mx-2 rounded-sm bg-blue-500 hover:bg-blue-200 focus:bg-blue-200 text-slate-100 hover:text-slate-800 focus:text-slate-800 px-2" tabIndex={-1}><a href={urls.github} target="_blank">Github<FaGithub className="inline-block text-xl ml-2" /></a></button> and <button className="mx-2 rounded-sm bg-blue-500 hover:bg-blue-200 focus:bg-blue-200 text-slate-100 hover:text-slate-800 focus:text-slate-800 px-2" tabIndex={-1}><a href={urls.linkedin} target="_blank">LinkedIn<FaLinkedin className="inline-block text-xl ml-2" /></a></button> profiles </p>
                        <p className="text-xl leading-10">And, if by chance, you accidentally came to this site looking for my writing/books, you can head over to <button className="mx-2 rounded-sm bg-blue-500 hover:bg-blue-200 focus:bg-blue-200 text-slate-100 hover:text-slate-800 focus:text-slate-800 px-2 items-center" tabIndex={-1} target="_blank"><a href={urls.personal} target="_blank">my other site<FaBook className="inline-block text-xl ml-2" /></a></button></p>
                    </div>
                </div>
            </section>
            <section id="resume" className="w-full min-h-80 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">The short, TLDR; version:</h1>
                <p className="text-xl leading-10">I worked as an "Interactive Developer" for the same company for almost 13 years. What is an Interactive Developer you ask? Essentially, I was a specialized Frontend Developer working in a media team. I worked on a variety of projects, from VR/AR prototypes, to simulations, all the way down to your basic "click a series of images to view retlated text and images in a modal" kind of thing.</p>
                <p className="text-xl leading-10 mb-6">That being said, I'm not able to display most or any of that work, given it was all internal, for a former employer. In lieu of that, I'll be working on new projects that I can share on this site. If you'd like to view my detailed resume, click <ResumeButton /> to download the file, or keep scrolling to view it here.</p>
                <Resume />
            </section>
            <section id="projects" className="w-full min-h-80 flex flex-col my-4">
                <h1 className="text-3xl font-bold mb-6 mt-8">Projects:</h1>
                <p className="text-xl leading-10">This is a "coming soon" kind of list. I'm currently working on some personal projects, and will update here with more details when they are ready.</p>
                <p className="text-xl leading-10 mb-6 xsm:mb-10">For now, here are some of the projects I have on GitHub right now (mainly just this site right now 👀 😮‍💨):</p>
                <div className="flex flex-row flex-wrap xsm:justify-center md:justify-start align-center gap-4">
                    {
                        repoData.map((repo, index) => {
                            return (
                                <div key={index} className="xsm:w-60 w-80 h-60 flex flex-col justify-between rounded-md border-2 border-slate-400 dark:border-slate-600 bg-slate-200 dark:bg-slate-800 transition duration-150 hover:shadow-lg focus:shadow-lg ">
                                    <div className="">
                                        <h3 className="text-2xl font-bold px-4 p-2 text-center">{repo.name}</h3>
                                        <div className="w-full h-[2px] bg-slate-400 dark:bg-slate-600"></div>
                                    </div>
                                    <div className="flex-1 flex flex-row items-center justify-center">
                                    <h2 className="w-3/4 h-3/4 p-4 text-center text-xl">{repo.description}</h2>
                                    </div>
                                    <div>
                                        <div className="w-full h-[2px] bg-slate-400 dark:bg-slate-600"></div>
                                        <div className="flex flex-row justify-between xsm:px-0 px-4">
                                            <button className="p-4" tabIndex={-1}>
                                                <a href={repo.html_url} target="_blank">View Repo</a>
                                            </button>
                                            <div className="w-[2px] min-h-full bg-slate-400 dark:bg-slate-600"></div>
                                            <button className="p-4" tabIndex={-1}>
                                                {
                                                    repo.name === "justincare.io" ? <a href="#header">View Project</a> : <a>View Project</a>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

const ResumeButton = () => {
    return (
        <a href={resumeDoc} download className="mx-2 px-3 pt-1 pb-2 rounded-sm bg-blue-500 text-center text-slate-100 transition duration-150 hover:bg-blue-200 focus:bg-blue-200 hover:text-slate-800 focus:text-slate-800">here</a>
    )
}

const Resume = () => {
    const [accStatus, setAccStatus] = useState([false, false]);
    const handleAccOpen = (e) => {
        const index = parseInt(e.target.dataset.index);
        const newAccStatus = [...accStatus];
        newAccStatus[index] = !newAccStatus[index];
        if(e.key){
            if(e.key === "Enter" || e.key === " "){
                setAccStatus(newAccStatus);
            }
        } else{
            setAccStatus(newAccStatus);
        }
    }

    return (
        <div className=" flex flex-col gap-8">
            {
                ResumeItems.map((item, index) => {
                    return (
                        <Disclosure key={index}>
                            <DisclosureButton data-index={index} onClick={handleAccOpen} onKeyDown={handleAccOpen} className="flex flex-row items-center gap-2 text-xl cursor-pointer mb-2 dark:text-slate-100 w-full">
                                <div className="flex flex-row justify-between items-center gap-2 pointer-events-none w-full">
                                    <span className="pointer-events-none font-bold text-2xl">{item.title}</span>
                                    {
                                        accStatus[index] ? <LiaChevronDownSolid className="pointer-events-none rotate-180" /> : <FaChevronDown className="pointer-events-none " />
                                    }
                                </div>
                            </DisclosureButton>
                            <DisclosurePanel transition className="dark:text-slate-100 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-6 pb-6 flex flex-col gap-4">
                                <p className="text-2xl mt-4 font-bold">{item.company}</p>
                                <p className="text-2xl mb-6 font-bold">{item.dates}</p>
                                <p className="text-2xl underline">Role</p>
                                <ul className="list-disc list-inside text-xl">
                                    {
                                        item.duties.map((duty, dIndex) => <li key={dIndex} className="mb-2 leading-8">{duty}</li>)
                                    }
                                </ul>
                                <p className="text-2xl underline">Skills</p>
                                <div className="flex flex-row flex-wrap w-full text-center justify-start gap-2">
                                    {
                                        item.skills.map((skill, sIndex) => <p key={sIndex} className="text-2xl md:w-56 xsm:w-full sm:w-full py-4">{skill}</p>)
                                    }
                                </div>
                            </DisclosurePanel>
                            <div className="w-full h-1 bg-gray-300 dark:bg-slate-800"></div>
                        </Disclosure>
                    )
                })
            }
        </div>
    )
}

export default MainContent;
