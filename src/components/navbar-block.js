'use client';

import { useState, useEffect } from 'react';
import { PiListBold, PiX, PiArrowRight } from 'react-icons/pi';
import { ClipButton } from './ui/buttons';
import ThemeToggle from './ui/theme-toggle';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('#home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // lightweight scroll-spy for the active link
    useEffect(() => {
        const sections = navItems
            .map((i) => document.querySelector(i.href))
            .filter(Boolean);
        if (!sections.length || typeof IntersectionObserver === 'undefined') return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(`#${e.target.id}`);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 border-y transition-all duration-300 ${
                scrolled
                    ? 'border-stone-200/80 bg-background/80 shadow-[0_8px_30px_rgb(28_25_23_/0.06)] backdrop-blur-xl dark:border-white/10'
                    : 'border-transparent bg-background/55 backdrop-blur-md'
            }`}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Logo: square tile + wordmark */}
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, '#home')}
                        className="group flex flex-shrink-0 items-center gap-2.5"
                    >
                        <span className="font-geom text-base md:text-lg font-semibold tracking text-foreground">
                            Prince Khunt
                        </span>
                    </a>

                    {/* Center links */}
                    <div className="hidden items-center gap-0.5 xl:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`px-3.5 py-2 text-sm transition-colors ${
                                    active === item.href
                                        ? 'font-semibold text-primary'
                                        : 'text-stone-600 hover:text-primary dark:text-stone-300 dark:hover:text-primary'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex flex-shrink-0 items-center gap-2">
                        <ThemeToggle />
                        <a
                            href="/resume.pdf"
                            download
                            className="hidden rounded-full px-3.5 py-2 text-sm text-stone-600 transition-colors hover:bg-muted hover:text-foreground dark:text-stone-300 sm:inline-flex"
                        >
                            Resume
                        </a>
                        <ClipButton
                            href="#contact"
                            onClick={(e) => handleClick(e, '#contact')}
                            innerClassName="px-4 py-2 text-xs"
                            className="hidden sm:inline-flex"
                        > 
                            Get in touch
                            <PiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </ClipButton>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="inline-flex size-9 items-center justify-center text-foreground xl:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <PiX className="size-5" />
                            ) : (
                                <PiListBold className="size-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop overlay */}
            <div
                className={`fixed inset-0 z-[-1] bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-t transition-all duration-300 ease-in-out xl:hidden ${
                    mobileOpen
                        ? 'max-h-[600px] border-stone-200/80 opacity-100 dark:border-white/10'
                        : 'max-h-0 border-transparent opacity-0'
                }`}
            >
                <div className="bg-background/95 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`px-4 py-2.5 text-sm transition-colors ${
                                    active === item.href
                                        ? 'font-semibold text-primary'
                                        : 'text-stone-600 hover:text-primary dark:text-stone-300 dark:hover:text-primary'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            className="mt-2 px-4 py-2.5 text-sm text-stone-600 transition-colors hover:text-primary dark:text-stone-300 dark:hover:text-primary"
                        >
                            Download Resume
                        </a>
                        <div className="mt-2 px-4">
                            <ClipButton
                                href="#contact"
                                onClick={(e) => handleClick(e, '#contact')}
                                innerClassName="px-4 py-2 text-xs"
                            >
                                Get in touch
                                <PiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </ClipButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
