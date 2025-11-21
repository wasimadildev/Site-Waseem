"use client";
import Link from 'next/link';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { FileText, Send, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from "react-icons/si";
import ModernContactPage from './Contact';


const TechBadge = ({ icon, name, isDark }: { icon: React.ReactNode; name: string; isDark: boolean }) => (
  <span className={`inline-flex items-center gap-2 px-2 py-0.5 border-1 border-dashed rounded-sm text-sm font-small transition-colors  ${isDark
    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
    }`}>
    {icon && <span>{icon}</span>}
    {name}
  </span>
);

interface SocialIconProps {
  icon: React.ComponentType;
  label: string;
  href: string;
}


const SocialIcon = ({ icon: Icon, label, href }: SocialIconProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={label}
      >
        <Icon />
      </a>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
          {label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
        </div>
      )}
    </div>
  );
};

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="8" y1="11" x2="8" y2="16" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <circle cx="8" cy="8" r="0.5" fill="currentColor" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <polygon points="10,9 15,12 10,15" fill="currentColor" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 16c1-2 2-4 3-6 0-1 0-2 1-2s1 1 1 2c0 2-1 4-2 5" />
  </svg>
);

const MediumIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 12c0 3.31-2.46 6-5.5 6S2.5 15.31 2.5 12 4.96 6 8 6s5.5 2.69 5.5 6zm5.5 0c0 3.1-1.23 5.62-2.75 5.62S13.5 15.1 13.5 12s1.23-5.62 2.75-5.62S19 8.9 19 12zm2.5 0c0 2.78-.44 5.03-.97 5.03-.54 0-.97-2.25-.97-5.03s.43-5.03.97-5.03c.53 0 .97 2.25.97 5.03z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3,7 12,13 21,7" />
  </svg>
);
interface HeroProps {
  isDark: boolean;
}


export default function PortfolioHero({ isDark }: HeroProps) {

  const socialIcons = [
    { icon: XIcon, label: 'X (Twitter)', href: 'https://twitter.com/waseemadil' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/waseemadil' },
    { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/waseemadil' },
    { icon: YouTubeIcon, label: 'YouTube', href: 'https://youtube.com/@waseemadil' },
    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/waseemadil' },
    { icon: PinterestIcon, label: 'Pinterest', href: 'https://pinterest.com/waseemadil' },
    { icon: MediumIcon, label: 'Medium', href: 'https://medium.com/@waseemadil' },
    { icon: EmailIcon, label: 'Email', href: 'mailto:waseemadicode@gmail.com' },
  ];

  return (
    <div
      className={`w-full flex justify-center transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
    >

      <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-20 px-4 md:px-10 mt-10">
        {/* Avatar */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Waseem Adil Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-black">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          Hi, I'm Waseem — <span className="text-gray-500">A Full-Stack Developer creating thoughtful, high-quality digital products.</span>
        </h1>

        {/* Description */}
        <div className={` mb-4 space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="leading-relaxed">
            I build interactive web apps using{' '}

            <TechBadge icon={<SiTypescript size={10} />} name="TypeScript" isDark={isDark} />
            <TechBadge icon={<SiReact size={10} />} name="React" isDark={isDark} />
            <TechBadge icon={<SiNodedotjs size={10} />} name="Node.js" isDark={isDark} />
            <TechBadge icon={<SiMongodb size={10} />} name="MongoDB" isDark={isDark} />

          </p>
          <p className="leading-relaxed">
            and{' '}
            <TechBadge icon={<SiPostgresql size={14} />} name="PostgreSQL" isDark={isDark} />

            . With a focus on <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>UI</span> design. Enthusiastic about{' '}
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Three.js</span>, driven by a keen eye for design.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Link href="/resume">
            <button className={`flex items-center gap-1 px-2 py-2 border rounded-sm transition-colors ${isDark
              ? 'bg-transparent border-gray-700 text-white hover:bg-gray-900'
              : 'bg-transparent border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}>
              <FileText size={14} />
              Resume / CV
            </button>
          </Link>

          <Link href="/contact">

            <button className={`flex items-center gap-1 px-2 py-2 border rounded-sm transition-colors  ${isDark
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
              <Send size={14} />
              Get in touch
            </button>
          </Link>
        </div>


        {/* Social Icons */}
        <div className="flex flex-wrap gap-2">
          {socialIcons.map((item, index) => (
            <SocialIcon key={index} {...item} />
          ))}
        </div>
      </div>

    </div>


  );
}