"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    images: string[];
    liveUrl?: string;
    sourceUrl?: string;
    status: 'Completed' | 'In Progress';
}

interface ProjectsProps {
    isDark: boolean;
}

const ProjectCard = ({ project, isDark }: { project: Project; isDark: boolean }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${isDark
            ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
            : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
            {/* Image Carousel */}
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 group/image">
                <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70"
                        >
                            <ChevronRight size={16} />
                        </button>

                        {/* Dots Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${project.status === 'Completed'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-amber-500/90 text-white'
                        }`}>
                        {project.status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                    }`}
                                title="View Live"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                    }`}
                                title="View Source"
                            >
                                <Github size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className={`px-2.5 py-1 text-xs font-medium rounded-full border ${isDark
                                ? 'bg-gray-800 border-gray-700 text-gray-300'
                                : 'bg-gray-50 border-gray-200 text-gray-700'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Projects({ isDark }: ProjectsProps) {
    const projects: Project[] = [
        {
            title: "Real-Time Chat & Media App",
            description: "Full-stack messaging app with JWT authentication and WebSocket communication. Features real-time messaging, audio/video communication, and cross-device compatibility.",
            techStack: ["Node.js", "React", "MongoDB", "WebSockets", "Redux"],
            images: ["/projects/chat-app.png", "/projects/chat-app.png", "/projects/chat-app.png"], // Dummy images
            liveUrl: "#",
            sourceUrl: "#",
            status: "In Progress"
        },
        {
            title: "Netflix-GPT",
            description: "AI-powered movie recommendation platform with dynamic search functionality. Integrates GPT API for personalized recommendations and Firebase for authentication.",
            techStack: ["React", "Firebase", "GPT API", "Tailwind CSS"],
            images: ["/projects/netflix-gpt.png", "/projects/netflix-gpt.png"], // Dummy images
            liveUrl: "#",
            sourceUrl: "#",
            status: "In Progress"
        },
        {
            title: "Blog API with Authentication",
            description: "Secure REST API with comprehensive authentication and CRUD operations. Implements JWT authentication, email OTP verification, and security best practices.",
            techStack: ["Node.js", "Express", "MongoDB", "JWT"],
            images: ["/projects/blog-api.png"], // Single image example
            liveUrl: "#",
            sourceUrl: "#",
            status: "Completed"
        },
        {
            title: "Q&A Platform",
            description: "Interactive platform with real-time voting and user interactions. Built with Next.js and Appwrite for real-time updates and a modern UI/UX.",
            techStack: ["Next.js", "Appwrite", "Tailwind CSS", "Real-time"],
            images: ["/projects/qa-platform.png", "/projects/qa-platform.png"], // Dummy images
            liveUrl: "#",
            sourceUrl: "#",
            status: "In Progress"
        }
    ];

    return (
        <div
            className={`w-full flex justify-center transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-10 md:py-20 px-4 md:px-10">
                {/* Header */}
                <div className="mb-12">
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Featured Projects
                    </h2>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        A selection of projects that demonstrate my expertise in full-stack development, real-time systems, and AI integration.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} isDark={isDark} />
                    ))}
                </div>
            </div>
        </div>
    );
}
