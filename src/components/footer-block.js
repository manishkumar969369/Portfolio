'use client';

import { PiArrowUp } from 'react-icons/pi';
import { ClipOutlineButton } from './ui/buttons';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/30 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2.5">
                    <p className="text-sm md:text-base text-muted-foreground">
                        &copy; {new Date().getFullYear()} Prince Khunt. Built with ❤️.
                    </p>
                </div>

                <ClipOutlineButton
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    innerClassName="px-2 py-4"
                >
                    <PiArrowUp className="size-4"/>
                </ClipOutlineButton>
            </div>
        </footer>
    );
};

export default Footer;
