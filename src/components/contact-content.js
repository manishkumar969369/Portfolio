'use client';

import { toast } from 'sonner';
import { FaLinkedin, FaGithub, FaKaggle, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { PiPaperPlaneTilt } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { ClipButton } from './ui/buttons';

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prince-khunt-linked-in/', icon: <FaLinkedin />, color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/PrinceKhunt16/', icon: <FaGithub />, color: 'currentColor' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/princekhunt19', icon: <FaKaggle />, color: '#20BEFF' },
    { name: 'Twitter', url: 'https://x.com/princekhunt19', icon: <FaXTwitter />, color: 'currentColor' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/PRINCEKHUNT/', icon: <SiLeetcode />, color: '#FFA116' },
    { name: 'YouTube', url: 'https://www.youtube.com/@princekhuntYT', icon: <FaYoutube />, color: '#FF0000' },
];

const ContactContent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = (data.get('name') || '').toString().trim();
        const message = (data.get('message') || '').toString().trim();

        if (!name || !message) {
            toast.error('Please add your name and a message.');
            return;
        }

        const subject = encodeURIComponent(data.get('subject') || 'Portfolio Contact');
        const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
        window.open(
            `mailto:princekhunt1610@gmail.com?subject=${subject}&body=${body}`,
            '_blank'
        );
        toast.success('Opening your email client…');
        e.target.reset();
    };

    return (
        <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    eyebrow="Contact"
                    title="Let's build something"
                    subtitle="Reach out or connect with me on any platform — I usually reply fast."
                />

                {/* Socials */}
                <Reveal className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <ClipCard
                                outerClassName="[--notch:10px] h-full transition-transform duration-300 group-hover:-translate-y-1"
                                className="flex h-full flex-col items-center gap-2 bg-card p-4 text-center [--notch:10px]"
                            >
                                <span
                                    className="text-2xl text-muted-foreground transition-colors group-hover:text-foreground"
                                    style={{ color: social.color !== 'currentColor' ? social.color : undefined }}
                                >
                                    {social.icon}
                                </span>
                                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                                    {social.name}
                                </span>
                            </ClipCard>
                        </a>
                    ))}
                </Reveal>

                {/* Form */}
                <Reveal delay={0.1}>
                    <ClipCard
                        outerClassName="[--notch:22px]"
                        className="bg-card p-7 sm:p-9 [--notch:22px]"
                    >
                        <h3 className="font-geom text-center text-xl font-semibold tracking-tight text-foreground">
                            Send a message
                        </h3>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring/50 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring/50 focus:outline-none"
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                required
                                className="w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring/50 focus:outline-none"
                            />
                            <div className="flex justify-center pt-1">
                                <ClipButton type="submit" innerClassName="px-7 py-3.5">
                                    Send message
                                    <PiPaperPlaneTilt className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </ClipButton>
                            </div>
                        </form>
                    </ClipCard>
                </Reveal>
            </div>
        </section>
    );
};

export default ContactContent;
