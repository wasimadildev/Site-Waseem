
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Briefcase, FileText, Mail, Sun, Moon, Code, GraduationCap, Award, BookOpen } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModernNavbar({ isDark, setIsDark }: NavbarProps) {
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();
  const pathname = usePathname();

  const playClickSound = () => {
    const audio = new Audio('/click.wav');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  const handleThemeToggle = () => {
    playClickSound();
    setIsDark(!isDark);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'technologies', 'education', 'certifications', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'technologies', label: 'Technologies', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'bookshelf', label: 'Bookshelf', icon: BookOpen },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    playClickSound();

    if (id === 'bookshelf') {
      if (pathname !== '/bookshelf') {
        router.push('/bookshelf');
      } else {
        scrollToSection('bookshelf');
      }
      return;
    }

    if (id === 'home') {
      if (pathname !== '/') {
        router.push('/');
      } else {
        scrollToSection('home');
      }
      return;
    }

    if (id === 'blog') {
      if (pathname !== '/blog') {
        router.push('/blog');
      } else {
        scrollToSection('blog');
      }
      return;
    }

    // For other sections
    const element = document.getElementById(id);
    if (element) {
      scrollToSection(id);
    } else {
      // If element not found on current page, navigate to home with hash
      router.push(`/#${id}`);
    }
  };

  return (
    <div className={`${isDark ? 'bg-slate-950' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Desktop Navigation Bar */}
      {/* Desktop Navigation Bar */}
      <nav className="hidden lg:flex fixed top-8 left-0 right-0 justify-center z-50 px-4">
        <div className={`${isDark
          ? 'bg-slate-800/40 border-slate-700/50'
          : 'bg-white/40 border-gray-200/50'
          } backdrop-blur-xl border rounded-full w-full max-w-[1400px] px-6 py-3 shadow-2xl transition-all duration-300`}>
          <div className="flex items-center justify-between">
            {/* Logo / Name (Optional - adding for balance if needed, or just keeping links left/center) */}
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>WA</span>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      relative px-4 py-2 rounded-full flex items-center gap-2 
                      transition-all duration-300 font-medium text-sm
                      ${isActive
                        ? isDark
                          ? 'bg-slate-700/80 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-900 shadow-lg scale-105'
                        : isDark
                          ? 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/40 hover:scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 hover:scale-105'
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className={`transition-all duration-300 ${isActive ? 'rotate-[360deg]' : ''}`}
                    />
                    <span className="transition-all duration-300">{item.label}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className={`w-px h-8 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />
              <button
                onClick={handleThemeToggle}
                className={`
                  p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-180
                  ${isDark
                    ? 'text-gray-400 hover:text-white hover:bg-slate-700/60'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }
                `}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className={`${isDark
          ? 'bg-slate-800/90 border-slate-700/50'
          : 'bg-white/90 border-gray-200/50'
          } backdrop-blur-xl border rounded-2xl px-4 py-3 shadow-2xl transition-all duration-300`}>
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative p-2 rounded-xl flex flex-col items-center gap-1
                    transition-all duration-300
                    ${isActive
                      ? isDark
                        ? 'bg-slate-700/80 text-white shadow-lg scale-110'
                        : 'bg-white text-gray-900 shadow-lg scale-110'
                      : isDark
                        ? 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/40 hover:scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 hover:scale-105'
                    }
                  `}
                >
                  <Icon
                    size={20}
                    className={`transition-all duration-300 ${isActive ? 'rotate-[360deg]' : ''}`}
                  />
                  {isActive && (
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                  )}
                </button>
              );
            })}

            <div className={`w-px h-10 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />

            <button
              onClick={handleThemeToggle}
              className={`
                p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-180
                ${isDark
                  ? 'text-gray-400 hover:text-white hover:bg-slate-700/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                }
              `}
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}