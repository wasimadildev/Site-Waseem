"use client";
import React from 'react';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiPrisma,
  SiPostgresql,
  SiJsonwebtokens,
  SiDocker,
  SiFirebase,
  SiFigma,
  SiSocketdotio,
  SiJest,
  SiMocha,
  SiAndroidstudio,

  SiCplusplus
} from 'react-icons/si';
import { Code, Database, Shield, Server, Layout, Smartphone, TestTube, ShoppingCart, Utensils, BookOpen } from 'lucide-react';

interface TechBadgeProps {
  icon?: React.ReactNode;
  name: string;
  isDark: boolean;
}

const TechBadge = ({ icon, name, isDark }: TechBadgeProps) => (
  <span className={`inline-flex items-center gap-2 px-3 py-1.5 border border-dashed rounded-sm text-sm transition-colors ${isDark
    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
    }`}>
    {icon && <span className="flex items-center">{icon}</span>}
    {name}
  </span>
);

interface CategorySectionProps {
  title: string;
  icon: React.ReactNode;
  items: { icon?: React.ReactNode; name: string }[];
  isDark: boolean;
}

const CategorySection = ({ title, icon, items, isDark }: CategorySectionProps) => (
  <div className="mb-8">
    <h3 className={`flex items-center gap-2 text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
      }`}>
      {icon}
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <TechBadge key={index} icon={item.icon} name={item.name} isDark={isDark} />
      ))}
    </div>
  </div>
);

interface TechToolsProps {
  isDark: boolean;
}

export default function TechnologiesTools({ isDark }: TechToolsProps) {
  const categories = [
    {
      title: "Core Stack",
      icon: <Server size={20} />,
      items: [
        { icon: <SiMongodb size={14} />, name: "MongoDB" },
        { icon: <SiExpress size={14} />, name: "Express.js" },
        { icon: <SiReact size={14} />, name: "React.js" },
        { icon: <SiNodedotjs size={14} />, name: "Node.js" },
        { icon: <SiNextdotjs size={14} />, name: "Next.js" },
        { icon: <SiTypescript size={14} />, name: "TypeScript" },
        { icon: <SiTailwindcss size={14} />, name: "Tailwind CSS" },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={20} />,
      items: [
        { icon: <SiReact size={14} />, name: "React.js" },
        { icon: <SiHtml5 size={14} />, name: "HTML" },
        { icon: <SiCss3 size={14} />, name: "CSS" },
        { icon: <SiJavascript size={14} />, name: "JavaScript" },
        { icon: <SiFigma size={14} />, name: "Figma to Web" },
        { name: "Responsive Design" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Code size={20} />,
      items: [
        { icon: <SiNodedotjs size={14} />, name: "Node.js" },
        { icon: <SiExpress size={14} />, name: "Express.js" },
        { name: "REST APIs" },
        { icon: <SiSocketdotio size={14} />, name: "Socket.io" },
        { name: "API Integration" },
      ]
    },
    {
      title: "Database Management",
      icon: <Database size={20} />,
      items: [
        { icon: <SiMongodb size={14} />, name: "MongoDB" },
        { icon: <SiMysql size={14} />, name: "MySQL" },
        { icon: <SiPrisma size={14} />, name: "Prisma" },
        { icon: <SiPostgresql size={14} />, name: "PostgreSQL" },
        { name: "SQL Queries" },
        { name: "Database Design" },
      ]
    },
    {
      title: "Authentication & Security",
      icon: <Shield size={20} />,
      items: [
        { icon: <SiJsonwebtokens size={14} />, name: "JWT" },
        { name: "OAuth" },
        { name: "OTP Verification" },
        { name: "Email Verification" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Server size={20} />,
      items: [
        { icon: <SiDocker size={14} />, name: "Docker" },
        { name: "Containerization" },
        { icon: <SiFirebase size={14} />, name: "Firebase" },
        { name: "DevOps Basics" },
      ]
    },
    {
      title: "Testing",
      icon: <TestTube size={20} />,
      items: [
        { icon: <SiJest size={14} />, name: "Jest" },
        { name: "Chai" },
        { icon: <SiMocha size={14} />, name: "Mocha" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={20} />,
      items: [
        { name: "React Native (Expo)" },
        { icon: <SiAndroidstudio size={14} />, name: "Android Studio" },
      ]
    },
    {
      title: "Programming & Concepts",
      icon: <Code size={20} />,
      items: [

        { icon: <SiCplusplus size={14} />, name: "C++" },
        { name: "OOP Concepts" },
        { name: "Algorithms" },
        { name: "Linear Algebra" },
      ]
    },

  ];

  return (
    <div
      className={`w-full flex justify-center transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-10 md:py-16 px-4 md:px-10">
        {/* Main Heading */}
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          Technologies & Tools
        </h2>

        {/* Description */}
        <p className={`mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
          A comprehensive toolkit for building modern, scalable web applications from frontend to backend, with expertise in full-stack development and deployment.
        </p>

        {/* Categories */}
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            icon={category.icon}
            items={category.items}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}