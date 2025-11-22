"use client";
import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle, Calendar } from 'lucide-react';

interface Book {
    title: string;
    author: string;
    coverImage: string;
    status: 'Reading' | 'To Read' | 'Read';
    category: string;
    description?: string;
    readDate?: string;
}

interface BookshelfProps {
    isDark: boolean;
}

const BookCard = ({ book, isDark }: { book: Book; isDark: boolean }) => {
    return (
        <div className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg flex flex-col h-full ${isDark
            ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
            : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
            <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 group/image">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                />
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm flex items-center gap-1 ${book.status === 'Reading'
                        ? 'bg-blue-500/90 text-white'
                        : book.status === 'Read'
                            ? 'bg-green-500/90 text-white'
                            : 'bg-amber-500/90 text-white'
                        }`}>
                        {book.status === 'Reading' && <BookOpen size={12} />}
                        {book.status === 'To Read' && <Clock size={12} />}
                        {book.status === 'Read' && <CheckCircle size={12} />}
                        {book.status}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className={`text-lg font-bold mb-1 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {book.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {book.author}
                </p>

                {book.description && (
                    <p className={`text-sm mb-4 line-clamp-3 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {book.description}
                    </p>
                )}

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-xs">
                    <span className={`px-2 py-1 rounded-md ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        {book.category}
                    </span>
                    {book.readDate && (
                        <span className={`flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            <Calendar size={12} />
                            {book.readDate}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Bookshelf({ isDark }: BookshelfProps) {
    const [activeTab, setActiveTab] = useState<'All' | 'Reading' | 'To Read' | 'Read'>('All');

    const books: Book[] = [
        // Currently Reading
        {
            title: "Clean Architecture",
            author: "Robert C. Martin",
            coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
            status: "Reading",
            category: "Software Engineering",
            description: "A craftsman's guide to software structure and design. Essential reading for building scalable systems."
        },
        {
            title: "The Pragmatic Programmer",
            author: "David Thomas, Andrew Hunt",
            coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
            status: "Reading",
            category: "Career Development",
            description: "Your journey to mastery. Filled with practical advice and best practices for software developers."
        },

        // Future (To Read)
        {
            title: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
            status: "To Read",
            category: "System Design",
            description: "The big ideas behind reliable, scalable, and maintainable systems."
        },
        {
            title: "Refactoring",
            author: "Martin Fowler",
            coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
            status: "To Read",
            category: "Software Engineering",
            description: "Improving the design of existing code. A classic guide to code quality."
        },
        {
            title: "You Don't Know JS Yet",
            author: "Kyle Simpson",
            coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            status: "To Read",
            category: "JavaScript",
            description: "Deep dive into the core mechanisms of the JavaScript language."
        },

        // Past (Read)
        {
            title: "Atomic Habits",
            author: "James Clear",
            coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
            status: "Read",
            category: "Self Improvement",
            description: "An easy & proven way to build good habits & break bad ones.",
            readDate: "2023"
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800",
            status: "Read",
            category: "Productivity",
            description: "Rules for focused success in a distracted world.",
            readDate: "2023"
        }
    ];

    const filteredBooks = activeTab === 'All'
        ? books
        : books.filter(book => book.status === activeTab);

    const tabs = ['All', 'Reading', 'To Read', 'Read'];

    return (
        <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        My Bookshelf
                    </h1>
                    <p className={`max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        A collection of books I'm reading, planning to read, and have enjoyed in the past.
                        Knowledge is power, and I love to learn.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className={`inline-flex p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab
                                        ? isDark
                                            ? 'bg-slate-700 text-white shadow-lg'
                                            : 'bg-white text-gray-900 shadow-sm'
                                        : isDark
                                            ? 'text-gray-400 hover:text-white'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book, index) => (
                        <BookCard key={index} book={book} isDark={isDark} />
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div className="text-center py-20">
                        <p className={`text-lg ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            No books found in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
