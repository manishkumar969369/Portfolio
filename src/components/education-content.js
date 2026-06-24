'use client';

import Image from 'next/image';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const EducationContent = () => {
    return (
        <section
            id="education"
            className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Education"
                    title="My academic journey"
                    subtitle="Where the foundations were built."
                />

                <Reveal className="mx-auto max-w-2xl">
                    <ClipCard
                        border="bg-amber-300 dark:bg-amber-400"
                        outerClassName="[--notch:20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.3)]"
                        className="bg-card p-7 [--notch:20px]"
                    >
                        <div className="flex items-start gap-5">
                            <div className="clip-mini-notch flex-shrink-0 bg-border p-[1.5px] [--notch:8px]">
                                <Image
                                    width={64}
                                    height={64}
                                    src="./marwadiuniversity.jpeg"
                                    alt="Marwadi University Logo"
                                    className="clip-mini-notch size-16 object-cover [--notch:8px]"
                                />
                            </div>
                            <div>
                                <h3 className="font-geom text-xl font-semibold tracking-tight text-foreground">
                                    Marwadi University
                                </h3>
                                <p className="mt-1 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text font-medium text-transparent">
                                    Bachelor&apos;s of Science in Data Science
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    July 2023 &ndash; Feb 2026
                                </p>
                            </div>
                        </div>
                    </ClipCard>
                </Reveal>
            </div>
        </section>
    );
};

export default EducationContent;
