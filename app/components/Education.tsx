"use client";
import React, { useState } from 'react';
import { GraduationCap, ChevronsUpDown, MapPin } from 'lucide-react';

interface EducationItem {
    id: number;
    institution: string;
    location: string;
    degree: string;
    grade: string;
    period: string;
    details?: string[];
    tags?: string[];
}

interface EducationProps {
    isDark: boolean;
}

const EducationItem = ({ item, isDark, isExpanded, onToggle, isLast }: {
    item: EducationItem;
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
                <GraduationCap size={20} />
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
                            {item.institution}
                        </h3>
                        <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            {item.period}
                        </p>
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
                        <div className={`font-medium mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {item.degree}
                        </div>
                        <div className={`flex items-center gap-2 text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <MapPin size={14} />
                            {item.location}
                        </div>
                        <div className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="font-semibold">Grade:</span> {item.grade}
                        </div>

                        {/* Details List */}
                        {item.details && (
                            <ul className={`list-disc list-inside space-y-2 mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {item.details.map((detail, index) => (
                                    <li key={index} className="leading-relaxed">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Tags */}
                        {item.tags && (
                            <div className="flex flex-wrap gap-2 mt-4">
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

export default function Education({ isDark }: EducationProps) {
    const [expandedId, setExpandedId] = useState<number | null>(0);

    const educationData: EducationItem[] = [
        {
            id: 0,
            institution: "Shifa Tameer-E-Millat University",
            location: "Islamabad, Pakistan",
            degree: "Bachelor’s in Computer Science",
            grade: "CGPA 3.57",
            period: "October 2023 – August 2027",
            details: [
                "Currently pursuing my Bachelor's degree, focusing on advanced computer science concepts.",
                "Mastered the full stack of technologies featured in this portfolio, including React, Next.js, Node.js, and Database Management.",
                "Actively applying theoretical knowledge to build real-world applications and projects."
            ],
            tags: ["Computer Science", "Full Stack Dev", "Algorithms", "Web Technologies"]
        },
        {
            id: 1,
            institution: "Superior Colleges",
            location: "Jahanian, Multan, Punjab",
            degree: "ICS (Computer)",
            grade: "72% Marks",
            period: "Sep 2021 – June 2023",
            details: [
                "Focused on the fundamentals of Computer Science and Mathematics.",
                "Developed strong time management skills and discipline while balancing academic responsibilities.",
                "Participated in college activities that fostered teamwork and leadership."
            ],
            tags: ["Computer Basics", "Time Management", "Mathematics", "Discipline"]
        },
        {
            id: 2,
            institution: "Government High School",
            location: "Multan, Punjab",
            degree: "Matric (Science)",
            grade: "86% Marks",
            period: "Aug 2019 – July 2021",
            details: [
                "Built a strong foundation in science subjects including Physics, Chemistry, and Mathematics.",
                "Learned the importance of consistent effort and dedication to achieve academic excellence.",
                "Cultivated a curiosity for technology and problem-solving."
            ],
            tags: ["Science Foundation", "Dedication", "Problem Solving"]
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
                        Education
                    </h2>
                </div>

                {/* Education Timeline */}
                <div className="mt-8">
                    {educationData.map((item, index) => (
                        <EducationItem
                            key={item.id}
                            item={item}
                            isDark={isDark}
                            isExpanded={expandedId === item.id}
                            onToggle={() => handleToggle(item.id)}
                            isLast={index === educationData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
