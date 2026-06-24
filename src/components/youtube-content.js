'use client';

import { PiYoutubeLogo, PiArrowUpRight } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { ClipOutlineButton } from './ui/buttons';

const videos = [
    {
        name: 'LinkedIn Chat Assistant Extension / Demo / Features Explained / prince khunt',
        url: 'https://www.youtube.com/embed/k2ERRWbyfc8',
        watchUrl: 'https://www.youtube.com/watch?v=k2ERRWbyfc8',
    },
    {
        name: 'AI Code Agent with Gemini / Demo / prince khunt',
        url: 'https://www.youtube.com/embed/rSYPTN6u0XY',
        watchUrl: 'https://www.youtube.com/watch?v=rSYPTN6u0XY',
    },
];

const YouTubeContent = () => {
    return (
        <section id="youtube" className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="YouTube"
                    title="Demos & walkthroughs"
                    subtitle="Video tours of the things I build."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {videos.map((video, index) => (
                        <Reveal key={index} delay={index * 0.08}>
                            <ClipCard
                                outerClassName="[--notch:20px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.25)]"
                                className="flex h-full flex-col bg-card [--notch:20px]"
                            >
                                <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                                    <iframe
                                        src={video.url}
                                        title={video.name}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="flex items-center justify-between gap-4 p-5">
                                    <p className="line-clamp-2 text-sm text-foreground">
                                        {video.name}
                                    </p>
                                    <ClipOutlineButton
                                        href={video.watchUrl}
                                        target="_blank"
                                        border="bg-red-500/20 dark:bg-red-500/30 group-hover:bg-red-500/50"
                                        innerClassName="bg-red-500/5 px-3.5 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/10 gap-1.5"
                                        notch="8px"
                                    >
                                        <PiYoutubeLogo className="size-4" weight="fill" />
                                        <span className="font-geom">Watch</span>
                                        <PiArrowUpRight className="size-3" />
                                    </ClipOutlineButton>
                                </div>
                            </ClipCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouTubeContent;
