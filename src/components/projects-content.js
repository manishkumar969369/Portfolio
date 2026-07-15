'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PiArrowUpRight, PiStar } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const projects = [
    {
        title: 'AI POWERED | ATTENDENCE',
        subtitle:'Student portal',
        projectImages: [
            './projects/11/ss1.png',
            './projects/11/ss5.png',
            './projects/11/ss2.png',
            './projects/11/ss3.png',
            './projects/11/enrollment.png',
            './projects/11/ss4.png',
            './projects/11/ss6.png',
            './projects/11/ss7.png',
        ],
        descriptionPoints: [
            'Developed an AI-powered attendance management system that automates attendance using Face Recognition and Voice Recognition, ensuring secure, accurate, and proxy-free attendance.',
            "Built an interactive platform where teachers can create subjects, manage attendance, and enroll students via QR codes or subject codes, while students can log in with Face ID and track their attendance in real time.",
        ],
        techstack: ['Supabase', 'OpenCV', 'dlib','scikit-learn (SVM)','Resemblyzer','Librosa','NumPy','HTML','CSS'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/manishkumar969369/snapclass-project',
            },
        ],
    },
    {
        title: 'Real-Time AI Gym Coach Using Computer Vision & LLMs',
        projectImages: ['./projects/12/ss2.png',
                        './projects/12/ss1.png',
                        './projects/12/ss3.png',
                        './projects/12/ss4.png',
                        './projects/12/ss5.png',
                        ],
        descriptionPoints: [
            'Developed an AI Real Gym Coach that uses MediaPipe Pose (pose_landmarker_full.task) and OpenCV to detect body landmarks, calculate joint angles, analyze exercise form, and accurately count repetitions in real time, ensuring users perform workouts with proper technique..',
            'Integrated the Groq API with the Llama-3.3-70B-Versatile model to generate personalized AI-powered voice feedback based on the users performance. This project provided hands-on experience in combining Computer Vision, Machine Learning, and Large Language Models (LLMs) to build a real-world intelligent fitness application.',
        ],
        techstack: ['Python', 'streamlit', 'MediaPipe Pose (pose_landmarker_full.task)','Llama-3.3-70B-Versatile','gTTS (Google Text-to-Speech)','NumPy','Groq API','HTML','CSS','Javascript','OpenCV'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/manishkumar969369/AI-Gym-Coach-landing-page?utm_source=chatgpt.com',
            },
        ],
    },
    {
        title: 'Full-Stack Real-Time Stock Trading & Monitoring Platform',
        projectImages: [
            './projects/1/ss1.png',
            './projects/1/ss6.png',
            './projects/1/ss5.png',
            './projects/1/ss2.png',
            './projects/1/ss4.png',
            './projects/1/ss3.png',
            './projects/1/ss7.png',
            './projects/1/ss8.png',
        ],
        descriptionPoints: [
            'Developed a full-stack Zerodha Clone that replicates the core functionality of the Zerodha trading platform, including secure user authentication, a responsive dashboard, portfolio management, holdings, positions, and order management. Built a modern and intuitive user interface to deliver a seamless trading experience.',
            "Designed and integrated a RESTful backend to manage user accounts, holdings, positions, and orders using MongoDB for data storage. Implemented CRUD operations, API integration, and responsive frontend components while gaining hands-on experience in full-stack web development and client-server architecture.",
        ],
        techstack: ['React.js', 'Material UI (MUI)', 'JavaScript (ES6+)', 'Node.js','MongoDB','Express','Mongoose','REST API','Axios'],
        links: [
            { title: 'GitHub', url: 'https://github.com/manishkumar969369/Zerodha-Backend' },
        ],
    },

];

const ProjectCard = ({ project, featured }) => {
    const [mainImage, setMainImage] = useState(project.projectImages[0]);

    return (
        <ClipCard
            border={featured ? 'bg-amber-300 dark:bg-amber-400' : 'bg-border'}
            outerClassName="[--notch:22px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(28_25_23_/0.3)]"
            className="group flex h-full flex-col bg-card [--notch:22px]"
        >
            {/* media */}
            <div className="relative overflow-hidden bg-muted">
                <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                    <Image
                        width={640}
                        height={400}
                        src={mainImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                {project.projectImages.length > 1 && (
                    <div className="absolute inset-x-0 bottom-0 flex gap-1 overflow-x-auto bg-foreground/50 p-2 backdrop-blur-sm">
                        {project.projectImages.slice(0, 6).map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setMainImage(img)}
                                aria-label={`Show screenshot ${i + 1}`}
                                className={`h-7 w-10 flex-shrink-0 overflow-hidden ring-1 transition-all ${
                                    mainImage === img
                                        ? 'opacity-100 ring-amber-400'
                                        : 'opacity-60 ring-transparent hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt=""
                                    width={40}
                                    height={28}
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                        {project.projectImages.length > 6 && (
                            <span className="flex items-center px-1 text-xs text-white/70">
                                +{project.projectImages.length - 6}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-geom text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                </h3>

                <ul className="mt-3 space-y-1.5">
                    {project.descriptionPoints.map((point, i) => (
                        <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                            <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-amber-500/70" />
                            {point}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techstack.map((tech) => (
                        <span
                            key={tech}
                            className="font-geom bg-accent/70 px-2.5 py-1 text-xs font-medium text-accent-foreground ring-1 ring-amber-500/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-orange-500"
                            >
                                {link.title}
                                <PiArrowUpRight className="size-3.5 text-orange-500" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </ClipCard>
    );
};

const ProjectsContent = () => {
    return (
        <section id="projects" className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Projects"
                    title="A showcase of AI-powered work"
                    subtitle="Real, shipped solutions across GenAI, computer vision, and full-stack."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={(index % 2) * 0.08}>
                            <ProjectCard project={project} featured={index < 2} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsContent;
