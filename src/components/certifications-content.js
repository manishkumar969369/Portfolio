'use client';

import Image from 'next/image';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const certifications = [
    {
        title: 'Fine Tune LLM with HF Transformers for NLP - KGPTalkie',
        issuedBy: 'Udemy',
        issuedDate: 'Feb 2025',
        certificateImage: './certificates/certificate-1.jpg',
    },
    {
        title: 'DL for Computer Vision',
        issuedBy: 'CampusX',
        issuedDate: 'Dec 2024',
        certificateImage: './certificates/certificate-2.jpg',
    },
    {
        title: 'ML Specialization',
        issuedBy: 'Coursera',
        issuedDate: 'Jun 2024',
        certificateImage: './certificates/certificate-8.jpg',
    },
    {
        title: 'ML Model in Production with FastAPI and Docker - KGPTalkie',
        issuedBy: 'Udemy',
        issuedDate: 'Jun 2025',
        certificateImage: './certificates/certificate-11.jpg',
    },
    {
        title: 'NPTEL - Introduction to Machine Learning',
        issuedBy: 'NPTEL',
        issuedDate: 'Apr 2025',
        certificateImage: './certificates/certificate-12.jpg',
    },
    {
        title: 'Build Apps with Gemini Pro',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        certificateImage: './certificates/certificate-3.jpg',
    },
    {
        title: 'Complete Generative AI',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        certificateImage: './certificates/certificate-4.jpg',
    },
    {
        title: 'Complete ML, DL and NLP Bootcamp',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        certificateImage: './certificates/certificate-5.jpg',
    },
    {
        title: 'Introduction to NoSQL databases',
        issuedBy: 'Infosys Springboard',
        issuedDate: 'Mar 2025',
        certificateImage: './certificates/certificate-10.jpg',
    },
    {
        title: 'SQL (Basic)',
        issuedBy: 'HackerRank',
        issuedDate: 'Aug 2024',
        certificateImage: './certificates/certificate-6.jpg',
    },
    {
        title: 'SQL (Intermediate)',
        issuedBy: 'HackerRank',
        issuedDate: 'Aug 2024',
        certificateImage: './certificates/certificate-7.jpg',
    },
    {
        title: 'New India Vibrant Hackathon 2023',
        issuedBy: 'SSIP Gujarat',
        issuedDate: 'Nov 2023',
        certificateImage: './certificates/certificate-9.jpg',
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
