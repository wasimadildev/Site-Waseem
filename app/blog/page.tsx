"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import ModernNavbar from '../components/Navbar';

interface BlogWeek {
    id: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    slug: string;
    status: 'Published' | 'Coming Soon';
}

export default function BlogListing() {
    const [isDark, setIsDark] = useState(true);

    const weeks: BlogWeek[] = [
        {
            id: "01",
            title: "Foundation topics in system design I",
            description: "Introduction to distributed systems, vertical vs horizontal scaling, and the CAP theorem trade-offs.",
            date: "Nov 20, 2023",
            readTime: "10 min read",
            slug: "/blog/week-01",
            status: "Published"
        },
        {
            id: "02",
            title: "Foundation topics in system design II",
            description: "Deep dive into load balancing algorithms, sticky sessions, and consistent hashing for distributed caches.",
            date: "Coming Soon",
            readTime: "12 min read",
            slug: "#",
            status: "Coming Soon"
        },
        {
            id: "03",
            title: "Week 03: Database Sharding & Replication",
            description: "Understanding database partitioning strategies, master-slave replication, and eventual consistency.",
            date: "Coming Soon",
            readTime: "15 min read",
            slug: "#",
            status: "Coming Soon"
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <ModernNavbar isDark={isDark} setIsDark={setIsDark} />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-10 md:pt-32 md:pb-20">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className={`inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                            }`}
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        System Design Series
                    </h1>
                    <p className={`text-base md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        A weekly journey through the complexities of large-scale distributed systems.
                        From basic concepts to advanced architectural patterns.
                    </p>
                </div>

                {/* Weeks Grid */}
                <div className="grid gap-6">
                    {weeks.map((week) => (
                        <div
                            key={week.id}
                            className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 ${isDark
                                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900'
                                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                                }`}
                        >
                            {week.status === 'Published' ? (
                                <Link href={week.slug} className="block p-5 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                WEEK {week.id}
                                            </span>
                                            <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {week.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {week.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {week.title}
                                    </h2>

                                    <p className={`text-sm md:text-base mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {week.description}
                                    </p>

                                    <div className={`flex items-center gap-2 font-medium ${isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'
                                        }`}>
                                        Read Chapter
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ) : (
                                <div className="p-6 md:p-8 opacity-60 cursor-not-allowed">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${isDark ? 'bg-gray-800 text-gray-500' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            WEEK {week.id}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${isDark ? 'bg-amber-500/10 text-amber-500' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            COMING SOON
                                        </span>
                                    </div>

                                    <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {week.title}
                                    </h2>

                                    <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                                        {week.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}