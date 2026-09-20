import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/modals/AddProjectModal';
import { AddServiceModal } from './components/modals/AddServiceModal';
import { EditProfileModal } from './components/modals/EditProfileModal';
import { InquiriesModal } from './components/modals/InquiriesModal';
import { MouseReflection } from './components/effects/MouseReflection';
import { PortfolioProject } from './types';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isInquiriesOpen, setIsInquiriesOpen] = useState(false);
  const [contactService, setContactService] = useState('SEO');

  const handleSelectService = (serviceName: string) => {
    setContactService(serviceName);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactFromCaseStudy = (projectTitle: string) => {
    setContactService(`Inquiry regarding ${projectTitle}`);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white selection:text-zinc-950 antialiased overflow-hidden">
      {/* Global Interactive Mouse Reflection Effect */}
      <MouseReflection />

      {/* Navigation */}
      <Navbar
        onOpenAddProject={() => setIsAddProjectOpen(true)}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
      />

      {/* Main Content Sections: About Me, Services, Portfolio, Contact Me */}
      <main>
        {/* Minimal Hero */}
        <Hero
          onOpenAddProject={() => setIsAddProjectOpen(true)}
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />

        {/* 1. About Me */}
        <AboutMe
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />

        {/* 2. Services */}
        <Services
          onSelectService={handleSelectService}
          onOpenAddService={() => setIsAddServiceOpen(true)}
        />

        {/* 3. Portfolio Showcase */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAddProject={() => setIsAddProjectOpen(true)}
        />

        {/* 4. Contact Me */}
        <Contact
          initialService={contactService}
          onOpenInquiries={() => setIsInquiriesOpen(true)}
        />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactFromCaseStudy}
      />

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddProjectOpen}
        onClose={() => setIsAddProjectOpen(false)}
      />

      {/* Add Service Modal */}
      <AddServiceModal
        isOpen={isAddServiceOpen}
        onClose={() => setIsAddServiceOpen(false)}
      />

      {/* Edit About Me / Profile Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />

      {/* Client Inquiries Drawer Modal */}
      <InquiriesModal
        isOpen={isInquiriesOpen}
        onClose={() => setIsInquiriesOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
