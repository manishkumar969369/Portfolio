'use client';

import Navbar from '@/components/navbar-block';
import HeroContent from '@/components/hero-content';
import AboutContent from '@/components/about-content';
import EducationContent from '@/components/education-content';
import ExperienceContent from '@/components/experience-content';
import ProjectsContent from '@/components/projects-content';
import SkillsContent from '@/components/skills-content';
import CertificationsContent from '@/components/certifications-content';
import AchievementsContent from '@/components/achievements-content';
import YouTubeContent from '@/components/youtube-content';
import ContactContent from '@/components/contact-content';
import Footer from '@/components/footer-block';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroContent />
                <AboutContent />
                <EducationContent />
                {/* <ExperienceContent /> */}
                <ProjectsContent />
                <SkillsContent />
                <CertificationsContent />
                {/* <AchievementsContent /> */}
                {/* <YouTubeContent /> */}
                <ContactContent />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
