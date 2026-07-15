'use client';

import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase } from 'react-icons/fa';
import {
    SiTensorflow,
    SiPytorch,
    SiMongodb,
    SiNextdotjs,
    SiFlask,
    SiKeras,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiLangchain,
    SiOpencv,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { DiJavascript1 } from 'react-icons/di';
import { BsBraces } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';
import { PiBrain, PiStack, PiCode, PiWrench, PiMathOperations } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import FeatureCard from './ui/feature-card';

const skillCategories = [
    {
        title: 'AI / ML',
        icon: <PiBrain />,
        skills: [
            { name: 'Machine Learning', icon: <MdOutlineScience /> },
            { name: 'Deep Learning', icon: <SiTensorflow /> },
            { name: 'Generative AI', icon: <BsBraces /> },
            { name: 'NLP', icon: <BsBraces /> },
            { name: 'Computer Vision', icon: <SiOpencv /> },
            { name: 'LangChain', icon: <SiLangchain /> },
            { name: 'LangGraph', icon: <BsBraces /> },
            { name: 'AI Agents / MCP', icon: <BsBraces /> },
        ],
    },
    {
        title: 'Libraries / Frameworks',
        icon: <PiStack />,
        skills: [
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            // { name: 'Keras', icon: <SiKeras /> },
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'Matplotlib / Seaborn', icon: <MdOutlineScience /> },
        ],
    },
    {
        title: 'Full-Stack Development',
        icon: <PiCode />,
        skills: [
            { name: 'Express', icon: <FaNodeJs /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Flask', icon: <SiFlask /> },
            { name: 'RESTful APIs', icon: <BsBraces /> },
        ],
    },
    {
        title: 'Programming & Tools',
        icon: <PiWrench />,
        skills: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'JavaScript', icon: <DiJavascript1 /> },
            { name: 'C / C++', icon: <TbBrandCpp /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'SQL', icon: <FaDatabase /> },
            // { name: 'Docker', icon: <FaDocker /> },
            { name: 'GitHub', icon: <FaGithub /> },
        ],
    },
    {
        title: 'Mathematics',
        icon: <PiMathOperations />,
        skills: [
            { name: 'Linear Algebra', icon: <MdOutlineScience /> },
            { name: 'Calculus', icon: <MdOutlineScience /> },
            { name: 'Probability', icon: <MdOutlineScience /> },
            { name: 'Statistics', icon: <MdOutlineScience /> },
        ],
    },
];

const SkillsContent = () => {
    return (
        <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Skills"
                    title="My stack & toolkit"
                    subtitle="Technologies and tools I reach for to ship."
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, i) => (
                        <Reveal key={category.title} delay={(i % 3) * 0.07} className="h-full">
                            <FeatureCard icon={category.icon} title={category.title}>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="font-geom inline-flex items-center gap-1.5 bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground/80 ring-1 ring-stone-200/70 dark:ring-white/10"
                                        >
                                            <span className="text-sm text-amber-600 dark:text-amber-400">
                                                {skill.icon}
                                            </span>
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </FeatureCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsContent;
