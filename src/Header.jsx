import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Switch, Popover, PopoverButton, PopoverPanel, CloseButton} from '@headlessui/react'
import { use } from 'react';
const Header = ({darkMode ,setDarkMode}) => {
    const [enabled, setEnabled] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const localDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    useEffect(() => {
        if(localDarkMode) {
            setEnabled(true);
            setDarkMode(true);
        } else {
            setEnabled(false);
            setDarkMode(false);
        }
    })
    const toggleDarkMode = () => {
        setEnabled(!enabled);
        setDarkMode(!enabled);
        localStorage.setItem('darkMode', JSON.stringify(!enabled));
        document.documentElement.classList.toggle('dark');
    }
    return (
        <nav id="header" className="header w-full h-36  flex flex-row py-4 items-center justify-between mb-4 font-sans">
            <h2 className="text-6xl font-bold tracking-wider font-teko">justincare.io</h2>
            <div className="flex flex-row items-center gap-4 justify-between">
                {isMobile ? <MobileMenu enabled={enabled} toggleDarkMode={toggleDarkMode} /> : <FullMenu enabled={enabled} toggleDarkMode={toggleDarkMode} />}
            </div>
        </nav>
    )
}

const FullMenu = ({enabled, toggleDarkMode}) => {
    return (
        <>
            <label className='flex flex-row items-center gap-2 text-lg cursor-pointer'>
                    Toggle Dark Mode
                <Switch checked={enabled} onChange={toggleDarkMode} className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600">
                        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
            </label>
            <button className="text-xl rounded-md px-6 py-2 pb-3 bg-gray-300 dark:bg-slate-800 transition duration-150 hover:bg-gray-400 focus:bg-gray-400 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#about">About</a></button>
            <button className="text-xl rounded-md px-6 py-2 pb-3 bg-gray-300 dark:bg-slate-800 transition duration-150 hover:bg-gray-400 focus:bg-gray-400 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#resume">Resume</a></button>
            <button className="text-xl rounded-md px-6 py-2 pb-3 bg-gray-300 dark:bg-slate-800 transition duration-150 hover:bg-gray-400 focus:bg-gray-400 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#projects">Projects</a></button>
        </>
    )
}

const MobileMenu = ({enabled, toggleDarkMode}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <Popover className="relative">
                <PopoverButton className="text-xl rounded-md px-4 py-4 bg-gray-300 transition duration-150 dark:bg-slate-800  hover:bg-gray-400 focus:bg-gray-400 dark:hover:bg-slate-600 dark:focus:bg-slate-600">
                    <GiHamburgerMenu className="text-3xl" />
                </PopoverButton>
                <PopoverPanel transition anchor="bottom end" className="mt-1 flex flex-col gap-4 px-4 py-2 bg-gray-200 dark:bg-slate-800 rounded-md transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                    <CloseButton className="text-lg rounded-md dark:text-slate-100 py-2 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#about">About</a></CloseButton>
                    <CloseButton className="text-lg rounded-md dark:text-slate-100 py-2 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#resume">Resume</a></CloseButton>
                    <CloseButton className="text-lg rounded-md dark:text-slate-100 py-2 dark:hover:bg-slate-600 dark:focus:bg-slate-600"><a href="#projects">Projects</a></CloseButton>
                    <div>
                    <label className='flex flex-row items-center gap-2 text-md cursor-pointer mb-2 dark:text-slate-100'>
                    Toggle Dark Mode
                        <Switch checked={enabled} onChange={toggleDarkMode} className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600">
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                        </Switch>
                    </label>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    )
}


export default Header;
