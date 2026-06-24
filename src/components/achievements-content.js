'use client';

import Image from 'next/image';
import { PiArrowUpRight, PiTrophy } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { ClipOutlineButton } from './ui/buttons';

const achievements = [
    {
        title: "Triumphant Victory at SSIP 2023: First Place in Clean and Green Tech with Gujarat CM's Special Prize!",
        image: './achivements/achivement-1.jpeg',
        highlights: ['🏆 1st Place', "🏛️ Gujarat CM's Special Prize", '🌿 Clean & Green Tech'],
    },
];

const AchievementsContent = () => {
    return (
        <section id="achievements" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Achievements"
                    title="Milestones & recognition"
                    subtitle="A few moments I'm proud of."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <Reveal key={index}>
                            <ClipCard
                                border="bg-amber-300 dark:bg-amber-400"
                                outerClassName="[--notch:22px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(28_25_23_/0.3)]"
                                className="group flex h-full flex-col bg-card [--notch:22px]"
                            >
                                <div
                                    className="relative overflow-hidden bg-muted"
                                    style={{ paddingBottom: '66%' }}
                                >
                                    <Image
                                        width={500}
                                        height={375}
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="font-geom text-base font-semibold leading-relaxed text-foreground">
                                        {achievement.title}
                                    </h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {achievement.highlights.map((h, i) => (
                                            <span
                                                key={i}
                                                className="font-geom bg-accent/70 px-3 py-1 text-xs font-medium text-accent-foreground ring-1 ring-amber-500/10"
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ClipCard>
                        </Reveal>
                    ))}

                    {/* Kaggle Expert highlight */}
                    <Reveal delay={0.1}>
                        <ClipCard
                            outerClassName="[--notch:22px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(28_25_23_/0.3)]"
                            className="flex h-full flex-col items-center justify-center bg-card p-10 text-center [--notch:22px]"
                        >
                            <div className="flex size-16 items-center justify-center rounded-full bg-amber-400/15 text-3xl text-amber-500 ring-1 ring-amber-400/30">
                                <PiTrophy />
                            </div>
                            <h3 className="font-caprasimo mt-5 text-3xl text-foreground">
                                Kaggle 2x Expert
                            </h3>
                            <p className="mt-3 max-w-xs text-muted-foreground">
                                Recognized as a Kaggle Expert in Notebooks and Datasets.
                            </p>
                            <ClipOutlineButton
                                href="https://www.kaggle.com/princekhunt19"
                                target="_blank"
                                className="mt-6"
                                innerClassName="px-5 py-2.5"
                            >
                                <span className="font-geom font-semibold">View Kaggle Profile</span>
                                <PiArrowUpRight className="size-4 text-amber-500" />
                            </ClipOutlineButton>
                        </ClipCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AchievementsContent;
