'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PiArrowUpRight, PiStar } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';

const projects = [
    {
        title: 'Customer Care — AI Support Assistant',
        projectImages: [
            './projects/11/ss1.png',
            './projects/11/ss2.png',
            './projects/11/ss3.png',
            './projects/11/ss4.png',
            './projects/11/ss5.png',
            './projects/11/ss6.png',
            './projects/11/ss7.png',
        ],
        descriptionPoints: [
            'Built an ecommerce support chatbot with an Agentic RAG workflow (LangGraph planner → executor → synthesizer) that answers product, order-tracking, and shipping/returns queries.',
            "Streamed the agent's thinking, tool calls, and final answer live to the UI over WebSockets, backed by JWT auth, Postgres + pgvector retrieval, and Redis short-term memory.",
        ],
        techstack: ['LangGraph', 'Gemini', 'pgvector'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Ecommerce-AI-Assistant-AGENTIC',
            },
        ],
    },
    {
        title: 'Wed-IMG-Finder — Wedding Photo Finder',
        projectImages: ['./projects/12/ss1.jpeg', './projects/12/ss2.jpeg'],
        descriptionPoints: [
            'Built a face-recognition wedding photo finder that lets guests instantly find every photo they appear in by uploading a single selfie.',
            'Engineered an async pipeline with FastAPI, Celery, and Redis to detect faces and generate embeddings in the background, storing them in PostgreSQL + pgvector for fast vector similarity search.',
            'Developed a Next.js 15 / React 19 frontend and integrated InsightFace for face detection.',
        ],
        techstack: ['FastAPI', 'InsightFace', 'pgvector'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Wed-IMG-Finder',
            },
        ],
    },
    {
        title: 'Job Genie - One click job search tool',
        projectImages: [
            './projects/1/ss1.png',
            './projects/1/ss2.png',
            './projects/1/ss3.png',
            './projects/1/ss4.png',
            './projects/1/ss5.png',
            './projects/1/ss6.png',
            './projects/1/ss7.png',
        ],
        descriptionPoints: [
            'Job Genie uses an intelligent job search agent powered by CrewAI to automate finding job listings on company career pages.',
            "Users select a company's URL and specify a list of job roles they are interested in.",
            'The agent crawls the selected career page and extracts relevant job details.',
        ],
        techstack: ['CrewAI', 'FastAPI', 'Next.js', 'MongoDB'],
        links: [
            { title: 'GitHub', url: 'https://github.com/PrinceKhunt16/Job-Genie-AI-Next-FastAPI' },
        ],
    },
    {
        title: 'Gmail AI Assistant - Chrome Extension',
        projectImages: [
            './projects/10/ss1.png',
            './projects/10/ss2.png',
            './projects/10/ss3.png',
            './projects/10/ss4.png',
        ],
        descriptionPoints: [
            'Gmail AI Assistant Extension is a productivity tool designed to enhance your mail writing experience.',
            'It provides AI-generated responses in real-time, helping you craft mails more efficiently.',
        ],
        techstack: ['GroqCloudAPI', 'Next.js'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Gmail-AI-Assistant-Chrome-Extension',
            },
            {
                title: 'Download',
                url: 'https://chromewebstore.google.com/detail/gmail-ai-assistant/jibmoeefcmpaaiebbhdfocogbinlmkhg?',
            },
        ],
    },
    {
        title: 'LinkedIn Chat Assistant - Chrome Extension',
        projectImages: [
            './projects/2/ss1.png',
            './projects/2/ss2.jpeg',
            './projects/2/ss3.jpeg',
            './projects/2/ss4.jpeg',
            './projects/2/ss5.jpeg',
            './projects/2/ss6.jpeg',
        ],
        descriptionPoints: [
            'LinkedIn Chat Assistant Extension is a productivity tool designed to enhance your LinkedIn messaging experience.',
            'It provides AI-generated responses in real-time, helping you craft messages more efficiently.',
        ],
        techstack: ['GroqCloudAPI', 'Next.js'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Linkedin-Chat-Assistant-Chrome-Extension',
            },
            {
                title: 'Download',
                url: 'https://chromewebstore.google.com/detail/linkedin-chat-assistant/lponolgdemijgndelchhnmnnhmdfblih',
            },
        ],
    },
    {
        title: 'Chat to Order - Order food through chat',
        projectImages: [
            './projects/3/ss1.png',
            './projects/3/ss2.png',
            './projects/3/ss3.png',
            './projects/3/ss4.png',
            './projects/3/ss5.png',
            './projects/3/ss6.png',
            './projects/3/ss7.png',
            './projects/3/ss8.png',
            './projects/3/ss9.png',
            './projects/3/ss10.png',
            './projects/3/ss11.png',
        ],
        descriptionPoints: [
            'Chat to Order is an AI-powered web application that allows users to order food through a conversational interface.',
            'The chatbot leverages BERT for intent detection and spaCy for NER to understand user queries and process orders.',
        ],
        techstack: ['NLP', 'Langchain', 'MERN', 'Huggingface', 'BERT', 'NER', 'Spacy'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Chat-to-Order-GenAI-NLP-Flask-React',
            },
        ],
    },
    {
        title: 'Smart Kitchen Helper Chat Assistant',
        projectImages: ['./projects/9/ss1.png', './projects/9/ss2.png', './projects/9/ss3.png'],
        descriptionPoints: [
            'Developed a domain-specific chatbot using Agentic RAG and open-source LLMs to answer recipe-related queries.',
            'Integrated LangGraph, GroqCloud, FastAPI, and Streamlit to build an interactive cooking assistant.',
        ],
        techstack: ['LangGraph', 'RAG', 'GroqCloud'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Smart-Kitchen-Helper-AgenticRAG',
            },
        ],
    },
    {
        title: 'Self Drive Car - Computer Vision',
        projectImages: ['./projects/5/ss1.png'],
        descriptionPoints: [
            'Built a Self-Drive Car project mastering road detection, lane segmentation, and steering angle prediction.',
            'Merged multiple datasets, trained three models, and developed a UI using OpenCV to simulate real-time driving.',
        ],
        techstack: ['YOLO', 'OpenCV', 'Python', 'Computer Vision', 'Deep Learning'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Self-Drive-Car-Computer-Vision-YOLOv11',
            },
            {
                title: 'Steering Angle Model',
                url: 'https://www.kaggle.com/code/princekhunt19/keras-model-steering-angle-prediction',
            },
            {
                title: 'Lane Segmentation',
                url: 'https://www.kaggle.com/code/princekhunt19/yolov11-road-lane-segmentation',
            },
            {
                title: 'Object Detection',
                url: 'https://www.kaggle.com/code/princekhunt19/yolov11-object-detection-road-visualization',
            },
        ],
    },
    {
        title: 'Vehicles Insurance Prediction',
        projectImages: ['./projects/7/ss1.png'],
        descriptionPoints: [
            'End-to-end MLOps pipeline for vehicle insurance prediction, automating from data ingestion to deployment.',
            'Used MongoDB, DVC, MLflow, Docker, and AWS with automated CI/CD.',
        ],
        techstack: ['MLOps', 'AWS', 'Docker', 'CICD'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Vehicle-Insuerance-MLOps-AWS',
            },
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
