'use client';

import Image from 'next/image';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const certifications = [
    {
        title: 'Alpha C++ | Data Structures & Algorithms (DSA) ✅',
        issuedBy: 'APNA COLLEGE',
        issuedDate: 'JULY 2025',
        certificateImage: './certificates/certificate-1.png',
    },
    {
        title: 'Delta Full Stack Web Development ✅',
        issuedBy: 'APNA COLLEGE',
        issuedDate: 'Dec 2025',
        certificateImage: './certificates/certificate-2.png',
    },
    {
        title: ' Prime Artificial Intelligence & Machine Learning ✅',
        issuedBy: 'APNA COLLEGE',
        issuedDate: 'APR 2025',
        certificateImage: './certificates/certificate-3.png',
    },
    // {
    //     title: 'ML Model in Production with FastAPI and Docker - KGPTalkie',
    //     issuedBy: 'Udemy',
    //     issuedDate: 'Jun 2025',
    //     certificateImage: './certificates/certificate-11.jpg',
    // },
    {
        title: 'NPTEL – Philosophy and Critical Thinking ✅',
        issuedBy: 'NPTEL',
        issuedDate: 'Apr 2025',
        certificateImage: './certificates/certificate-4.png',
    },
   
    
];

const CertificationsContent = () => {
    return (
        <section
            id="certifications"
            className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Certifications"
                    title="Continuous learning"
                    subtitle="Professional development across AI, ML, and engineering."
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <Reveal key={index} delay={(index % 3) * 0.07} className="h-full">
                            <ClipCard
                                outerClassName="[--notch:18px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.25)]"
                                className="group flex h-full flex-col bg-card [--notch:18px]"
                            >
                                <div
                                    className="relative overflow-hidden bg-muted"
                                    style={{ paddingBottom: '70%' }}
                                >
                                    <Image
                                        width={500}
                                        height={375}
                                        src={cert.certificateImage}
                                        alt={cert.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-4">
                                    <h3 className="font-geom text-sm font-semibold leading-snug text-foreground">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                                        <span className="font-medium text-amber-600 dark:text-amber-400">
                                            {cert.issuedBy}
                                        </span>
                                        <span>{cert.issuedDate}</span>
                                    </div>
                                </div>
                            </ClipCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsContent;
