import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineSegment } from 'react-icons/md';
import { LiaFilePdf } from 'react-icons/lia';
import { LiaCertificateSolid } from 'react-icons/lia';
import { PiNewspaperClippingLight } from 'react-icons/pi';
import { AiOutlineContacts } from 'react-icons/ai';
import { MdLaptopChromebook } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoGitNetworkSharp } from 'react-icons/io5';
import { RiStairsFill } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa6';

const Sidebar = ({ ml, setMl }) => {
    const location = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isText, setIsText] = useState(false);
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);

    const isActive = (path) =>
        location === path
            ? 'active-link text-white bg-gradient-to-r from-gray-400 to-gray-900/90'
            : '';

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            setTimeout(() => {
                setIsText(!isText);
            }, 200);
        } else {
            setIsText(!isText);
        }

        setMl(!isOpen ? 14 : 64);
    };

    const closeSidebarOnMobile = () => {
        if (isSmallDisplay) {
            setIsOpen(true);
            setIsText(true);
            setMl(14);
        }
    };

    const goToSection = (e, sectionHash) => {
        e.preventDefault();

        const id = sectionHash.replace('#', '');

        setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                const yOffset = -70; 
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth',
                });

                window.history.pushState(null, '', sectionHash);
            }
        }, 100);

        closeSidebarOnMobile();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setIsSmallDisplay(true);
                setIsOpen(true);
                setIsText(true);
                setMl(14);
            } else {
                setIsSmallDisplay(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setMl]);

    useEffect(() => {
        setMl(isOpen ? 14 : 64);
    }, [isOpen, setMl]);

    return (
        <div
            className={`z-50 min-w-14 h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white fixed top-0 flex flex-col transition-all duration-300 ${isSmallDisplay
                    ? !isOpen
                        ? 'w-full'
                        : 'w-14'
                    : isOpen
                        ? 'w-14'
                        : 'w-64'
                }`}
        >
            <div className="h-[70px] p-4 pb-2 flex items-center gap-3 relative">
                <button onClick={toggleMenu} className="cursor-pointer">
                    <MdOutlineSegment size={22} />
                </button>

                <h1
                    className={`text-2xl transition-all duration-300 transform absolute ${!isText
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-[-10px]'
                        }`}
                    style={{
                        visibility: !isText ? 'visible' : 'hidden',
                        left: '50px',
                    }}
                >
                    Manish Kumar
                </h1>
            </div>

            <ul className="flex-1">
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/')}`}>
                    <a href="#home" onClick={(e) => goToSection(e, '#home')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <IoMdHome size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Home
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/aboutme')}`}>
                    <a href="#about" onClick={(e) => goToSection(e, '#about')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <IoIosInformationCircleOutline size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            About Me
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/experience')}`}>
                    <a href="#experience" onClick={(e) => goToSection(e, '#experience')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <RiStairsFill size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Experience
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/resume')}`}>
                    <a href="/resume.pdf" onClick={closeSidebarOnMobile} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <LiaFilePdf size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Resume
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/skills')}`}>
                    <a href="#skills" onClick={(e) => goToSection(e, '#skills')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <IoGitNetworkSharp size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Skills
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/projects')}`}>
                    <a href="#projects" onClick={(e) => goToSection(e, '#projects')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <MdLaptopChromebook size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Projects
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/certifications')}`}>
                    <a href="#certifications" onClick={(e) => goToSection(e, '#certifications')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <PiNewspaperClippingLight size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Certifications
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/achivements')}`}>
                    <a href="#achievements" onClick={(e) => goToSection(e, '#achievements')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <LiaCertificateSolid size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Achievements
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/youtubegallery')}`}>
                    <a href="#youtube" onClick={(e) => goToSection(e, '#youtube')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <FaYoutube size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            YouTube Gallery
                        </span>
                    </a>
                </li>

                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/contact')}`}>
                    <a href="#contact" onClick={(e) => goToSection(e, '#contact')} className="flex items-center gap-3 w-full text-xl py-3 relative">
                        <AiOutlineContacts size={22} />
                        <span className={`absolute left-[35px] ${!isText ? 'opacity-100' : 'opacity-0'}`}>
                            Contact
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;