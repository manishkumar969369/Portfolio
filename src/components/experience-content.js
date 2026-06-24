'use client';

import { PiArrowUpRight, PiBriefcase } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const experiences = [
    {
        role: 'AI/ML Project Tutorial Instructor (Freelance)',
        company: 'Apna College',
        companyUrl: 'https://www.apnacollege.in/',
        location: 'India • Remote',
        duration: 'Mar 2026 – Apr 2026 (2 mon)',
        points: [
            'Developed practical AI projects for educational purposes, including a real-time exercise coaching system using computer vision and pose estimation.',
        ],
    },
    {
        role: 'AI Developer Intern',
        company: 'Vertical Systems',
        companyUrl: 'https://www.verticalsystems.io/',
        location: 'Vancouver, British Columbia, Canada • Remote',
        duration: 'Nov 2025 – Mar 2026 (5 mon)',
        points: [
            'Completed this internship during my 6th semester.',
            'Spearheaded the end-to-end development of a Full Stack AI Solution, managing the lifecycle from initial design to deployment and implementing AI-powered automation to optimize task efficiency.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'Rain Infotech',
        companyUrl: 'https://www.raininfotech.com/',
        location: 'Surat, Gujarat, India • Offsite',
        duration: 'Mar 2023 – Jun 2023 (3 mon)',
        points: [
            'Developed web applications using Next.js and modern frontend technologies.',
            'Mastered the MERN stack to deliver scalable web applications.',
            'Completed this internship just after finishing 12th grade, gaining early hands-on experience.',
        ],
    },
];

const ExperienceContent = () => {
    return (
        <section id="experience" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    eyebrow="Experience"
                    title="My professional journey"
                    subtitle="Roles where I shipped real, used software."
                />

                <div className="relative">
                    {/* timeline line */}
                    <div className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-amber-500 via-orange-400 to-transparent md:left-[19px]" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Reveal key={index} delay={index * 0.08} className="relative pl-12 md:pl-16">
                                {/* timeline node */}
                                <div className="absolute top-1 left-0 flex size-8 items-center justify-center rounded-full bg-background ring-1 ring-amber-400 md:size-10">
                                    <span className="flex size-6 items-center justify-center rounded-full bg-amber-400 text-foreground md:size-7">
                                        <PiBriefcase className="size-3.5" />
                                    </span>
                                </div>

                                <ClipCard
                                    outerClassName="[--notch:18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.25)]"
                                    className="bg-card p-6 [--notch:18px]"
                                >
                                    <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                                        <h3 className="font-geom text-lg font-semibold tracking-tight text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="font-geom flex-shrink-0 rounded-none bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text font-medium text-transparent hover:underline"
                                    >
                                        {exp.company}
                                        <PiArrowUpRight className="size-3.5 text-orange-500" />
                                    </a>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {exp.location}
                                    </p>

                                    <ul className="mt-4 space-y-2">
                                        {exp.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                            >
                                                <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </ClipCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceContent;
