import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioProject, ServiceItem } from '../types';
import { MARKETER_INFO as defaultInfo, SERVICES_DATA as defaultServices, PORTFOLIO_PROJECTS as defaultProjects } from '../data/portfolioData';

export interface MarketerProfile {
  name: string;
  title: string;
  tagline: string;
  subheadline: string;
  bio: string;
  experienceYears: string;
  adSpendManaged: string;
  avgRoas: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  photoUrl: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
  date: string;
}

interface PortfolioContextType {
  profile: MarketerProfile;
  services: ServiceItem[];
  projects: PortfolioProject[];
  inquiries: ContactInquiry[];
  updateProfile: (updated: Partial<MarketerProfile>) => void;
  addProject: (project: Omit<PortfolioProject, 'id'>) => void;
  deleteProject: (id: string) => void;
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  deleteService: (id: string) => void;
  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'date'>) => void;
  resetDefaults: () => void;
}

const STORAGE_KEYS = {
  PROFILE: 'portfolio_user_profile_v2',
  SERVICES: 'portfolio_user_services_v2',
  PROJECTS: 'portfolio_user_projects_v2',
  INQUIRIES: 'portfolio_user_inquiries_v2'
};

const initialProfile: MarketerProfile = {
  name: defaultInfo.name,
  title: defaultInfo.title,
  tagline: defaultInfo.tagline,
  subheadline: defaultInfo.subheadline,
  bio: defaultInfo.bio,
  experienceYears: defaultInfo.experienceYears,
  adSpendManaged: defaultInfo.adSpendManaged,
  avgRoas: defaultInfo.avgRoas,
  email: defaultInfo.email,
  phone: defaultInfo.phone,
  location: defaultInfo.location,
  linkedin: defaultInfo.linkedin,
  twitter: defaultInfo.twitter,
  instagram: defaultInfo.instagram,
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<MarketerProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : defaultServices;
    } catch {
      return defaultServices;
    }
  });

  const [projects, setProjects] = useState<PortfolioProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }, [inquiries]);

  const updateProfile = (updated: Partial<MarketerProfile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const addProject = (projectData: Omit<PortfolioProject, 'id'>) => {
    const newProject: PortfolioProject = {
      ...projectData,
      id: `proj-${Date.now()}`
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addService = (serviceData: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...serviceData,
      id: `srv-${Date.now()}`
    };
    setServices(prev => [...prev, newService]);
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const addInquiry = (inquiryData: Omit<ContactInquiry, 'id' | 'date'>) => {
    const newInquiry: ContactInquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const resetDefaults = () => {
    setProfile(initialProfile);
    setServices(defaultServices);
    setProjects(defaultProjects);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        services,
        projects,
        inquiries,
        updateProfile,
        addProject,
        deleteProject,
        addService,
        deleteService,
        addInquiry,
        resetDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
