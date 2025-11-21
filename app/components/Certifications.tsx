"use client";
import React, { useState } from 'react';
import { Award, ChevronsUpDown, ExternalLink } from 'lucide-react';

interface CertificationItem {
    id: number;
    title: string;
    issuer: string;
    date: string;
    link: string;
    details?: string[];
    tags?: string[];
}

interface CertificationsProps {
    isDark: boolean;
}

const CertificationItem = ({ item, isDark, isExpanded, onToggle, isLast }: {
    item: CertificationItem;
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
                <Award size={20} />
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
                            {item.title}
                        </h3>
                        <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            {item.date}
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
                        <div className={`font-medium mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {item.issuer}
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
                            <div className="flex flex-wrap gap-2 mb-4">
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

                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isDark
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                                }`}
                        >
                            View Certificate
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Certifications({ isDark }: CertificationsProps) {
    const [expandedId, setExpandedId] = useState<number | null>(0);

    const certifications: CertificationItem[] = [
        {
            id: 0,
            title: "Complete Web Development Course",
            issuer: "Udemy - Hitesh Choudhary",
            date: "July 2025",
            link: "#",
            details: [
                "Mastered full-stack development from scratch, covering HTML, CSS, JavaScript, and Node.js.",
                "Built complex backend systems using MongoDB, Mongoose, and modern backend practices.",
                "Developed advanced frontend applications with React, Redux Toolkit, and Tailwind CSS.",
                "Learned deployment strategies, Git version control, and working with Linux environments."
            ],
            tags: ["Full Stack", "MERN", "React", "Node.js", "MongoDB"]
        },
        {
            id: 1,
            title: "DSA in Java",
            issuer: "Apna College",
            date: "October 2024",
            link: "#",
            details: [
                "Comprehensive coverage of Data Structures and Algorithms using Java.",
                "Solved 300+ coding questions from top tech companies (MAANG).",
                "Mastered core concepts like Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and DP.",
                "Learned advanced algorithms including Greedy, Backtracking, and Segment Trees."
            ],
            tags: ["Java", "DSA", "Algorithms", "Problem Solving"]
        },
        {
            id: 2,
            title: "Fundamentals of Backend Engineering",
            issuer: "Udemy - Hussein Nasser",
            date: "January 2025",
            link: "#",
            details: [
                "Deep dive into backend communication patterns: Request-Response, Push, Polling, SSE, and WebSockets.",
                "Understood core protocols: TCP/UDP, HTTP/1.1, HTTP/2, HTTP/3, and TLS security.",
                "Learned about database engineering, ACID transactions, and database indexing.",
                "Explored proxying, load balancing, and OS-level backend execution patterns."
            ],
            tags: ["Backend Engineering", "System Design", "Networking", "Database Internals"]
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
            <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-20 px-4 md:px-10">
                {/* Header */}
                <div className="mb-12 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`} />
                    <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Certifications
                    </h2>
                </div>

                {/* Certifications Timeline */}
                <div className="mt-8">
                    {certifications.map((item, index) => (
                        <CertificationItem
                            key={item.id}
                            item={item}
                            isDark={isDark}
                            isExpanded={expandedId === item.id}
                            onToggle={() => handleToggle(item.id)}
                            isLast={index === certifications.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
