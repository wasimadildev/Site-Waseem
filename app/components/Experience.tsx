"use client";
import React, { useState } from 'react';
import { Briefcase, ChevronsUpDown, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    location?: string;
    details: string[];
    tags?: string[];
}

interface ExperienceProps {
    isDark: boolean;
}

const ExperienceItem = ({ item, isDark, isExpanded, onToggle, isLast }: {
    item: ExperienceItem;
    isDark: boolean;
    isExpanded: boolean;
    onToggle: () => void;
    isLast: boolean;
}) => (
    <div className="flex gap-4 relative">
        {/* Timeline Line */}
        {!isLast && (
            <div className={`absolute left-[19px] top-10 bottom-[-24px] w-[2px] ${isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`} />
        )}

        {/* Icon */}
        <div className="relative z-10">
            <button
                onClick={onToggle}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${isDark
                    ? 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
            >
                <Briefcase size={20} />
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
            <button
                onClick={onToggle}
                className="w-full text-left group"
            >
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className={`text-lg font-semibold transition-colors ${isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'
                            }`}>
                            {item.role}
                        </h3>
                        <div className={`text-sm mt-1 font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {item.company}
                        </div>
                    </div>
                    <div className={`transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                        <ChevronsUpDown size={20} />
                    </div>
                </div>
            </button>

            {/* Expandable Details */}
            <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className="overflow-hidden">
                    <div className={`p-4 rounded-lg border ${isDark
                        ? 'bg-gray-900/50 border-gray-800'
                        : 'bg-gray-50 border-gray-200'
                        }`}>

                        <div className={`flex items-center gap-4 text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {item.period}
                            </div>
                            {item.location && (
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {item.location}
                                </div>
                            )}
                        </div>

                        {/* Details List */}
                        <ul className={`list-disc list-inside space-y-2 mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            {item.details.map((detail, index) => (
                                <li key={index} className="leading-relaxed">
                                    {detail}
                                </li>
                            ))}
                        </ul>

                        {/* Tags */}
                        {item.tags && (
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-2.5 py-1 text-xs font-medium rounded-full border ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-gray-400'
                                            : 'bg-gray-100 border-gray-200 text-gray-600'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Experience({ isDark }: ExperienceProps) {
    const [expandedId, setExpandedId] = useState<number | null>(0);

    const experiences: ExperienceItem[] = [
        {
            id: 0,
            role: "Full-Stack Web Developer",
            company: "Freelance",
            period: "Present", // Assuming present as it wasn't specified, or I can leave it generic
            location: "Remote",
            details: [
                "Developed full-featured web application for graphic designer with document editing services.",
                "Built responsive data collection platform with OCR scanning and WhatsApp integration.",
                "Created Task & Project Management System using Django with role-based access control."
            ],
            tags: ["Full-Stack", "Web Development", "OCR", "Django", "WhatsApp Integration"]
        }
    ];

    const handleToggle = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div
            className={`w-full flex justify-center transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-10 md:py-20 px-4 md:px-10">
                {/* Header */}
                <div className="mb-12 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`} />
                    <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Professional Experience
                    </h2>
                </div>

                {/* Experience Timeline */}
                <div className="mt-8">
                    {experiences.map((item, index) => (
                        <ExperienceItem
                            key={item.id}
                            item={item}
                            isDark={isDark}
                            isExpanded={expandedId === item.id}
                            onToggle={() => handleToggle(item.id)}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
