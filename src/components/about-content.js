'use client';

import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import { PiCheck } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { ClipOutlineButton } from './ui/buttons';

const stats = [
    { value: '2x', label: 'Internships', tone: 'amber' },
    { value: '9+', label: 'Shipped projects', tone: 'blue' },
    { value: '2x', label: 'Kaggle Expert', tone: 'green' },
    { value: '1x', label: 'Hackathon win', tone: 'purple' },
];

const highlights = [
    'B.Sc Data Science graduate',
    'AI / ML focused developer',
    'MERN + GenAI full-stack builder',
    'Building real-world AI products',
];

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prince-khunt-linked-in/', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/PrinceKhunt16/', icon: <FaGithub /> },
    { name: 'Kaggle', url: 'https://www.kaggle.com/princekhunt19', icon: <FaKaggle /> },
];

const toneMap = {
    amber: 'bg-metric-amber-bg text-metric-amber-fg',
    blue: 'bg-metric-blue-bg text-metric-blue-fg',
    green: 'bg-metric-green-bg text-metric-green-fg',
    purple: 'bg-metric-purple-bg text-metric-purple-fg',
};

const AboutContent = () => {
    return (
        <section id="about" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="About"
                    title="Turning data into things people actually use"
                    subtitle="Get to know me a little better."
                />

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left — text */}
                    <Reveal>
                        <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
                            Hello! I&apos;m{' '}
                            <span className="font-medium text-foreground">Prince Khunt</span>, a
                            B.Sc Data Science graduate passionate about{' '}
                            <span className="font-medium text-foreground">Data Science</span> and{' '}
                            <span className="font-medium text-foreground">AI</span>.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
                            I&apos;m skilled in{' '}
                            <span className="font-medium text-foreground">
                                ML, DL, GenAI, MLOps, and the MERN stack
                            </span>
                            . I enjoy solving real-world problems with data-driven insights and
                            shipping full-stack applications.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
                            Currently seeking an{' '}
                            <span className="font-medium text-foreground">AI / ML Engineer role</span>{' '}
                            to gain industry experience and contribute to impactful work.
                        </p>

                        <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                            {highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-center gap-2.5 text-sm text-foreground/90"
                                >
                                    <span className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/30 dark:text-emerald-400">
                                        <PiCheck className="size-3" />
                                    </span>
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socials.map((s) => (
                                <ClipOutlineButton
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    innerClassName="px-4 py-2"
                                >  
                                    <span className="text-base text-muted-foreground">{s.icon}</span>
                                    <span className='font-geom'>{s.name}</span>
                                </ClipOutlineButton>
                            ))}
                        </div>
                    </Reveal>

                    {/* Right — stat tiles */}
                    <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <ClipCard
                                key={s.label}
                                border={i === 0 ? 'bg-amber-300 dark:bg-amber-400' : 'bg-border'}
                                outerClassName="[--notch:18px] transition-transform duration-300 hover:-translate-y-1"
                                className={`${toneMap[s.tone]} flex flex-col justify-center p-6 [--notch:18px]`}
                            >
                                <div className="font-merriweather text-4xl font-bold leading-none">
                                    {s.value}
                                </div>
                                <div className="mt-2 text-sm font-medium font-geom opacity-80">{s.label}</div>
                            </ClipCard>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
