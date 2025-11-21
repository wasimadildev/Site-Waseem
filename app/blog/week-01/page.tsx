"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft, Database, Server, Globe, Clock, Shield, Zap,
    Cpu, Layers, HardDrive, Activity, CheckCircle, XCircle,
    AlertTriangle, Terminal, Network, HelpCircle, FileText,
    Scale, Lock, RefreshCw, Trash2, Save, Sun, Moon
} from "lucide-react";

export default function Week01Notes() {
    // Theme state management
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300 ${isDark ? "bg-[#0a0a0a] text-gray-100" : "bg-gray-50 text-gray-900"}`}>
            {/* Navigation Bar */}
            <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"}`}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
                    >
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-500 hidden md:flex">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Week 01: System Design
                        </div>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-all duration-300 ${isDark
                                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-12">
                <article className="space-y-20">

                    {/* Header Section */}
                    <header className={`space-y-8 text-center border-b pb-12 transition-colors duration-300 ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20 uppercase tracking-wider">
                            <Terminal size={12} />
                            Engineering Notes
                        </div>
                        <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent leading-tight ${isDark ? "bg-gradient-to-br from-white via-gray-200 to-gray-500" : "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500"}`}>
                            Foundations of <br className="hidden md:block" /> Scalable Systems
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500">
                            <span className={`flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                                <Clock size={14} className="text-blue-500" />
                                April 2, 2025
                            </span>
                            <span className={`flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                                <Activity size={14} className="text-green-500" />
                                System Design
                            </span>
                            <span className={`flex items-center gap-2 px-3 py-1 rounded-md border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                                <Database size={14} className="text-purple-500" />
                                Database Architecture
                            </span>
                        </div>
                    </header>

                    {/* Introduction */}
                    <section className="prose prose-invert max-w-none">
                        <div className={`text-xl md:text-2xl leading-relaxed font-light transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            <p>
                                System design is an iterative process. It's not about building the perfect system from day one, but about understanding <span className={`font-medium ${isDark ? "text-white" : "text-black"}`}>trade-offs</span>, anticipating <span className={`font-medium ${isDark ? "text-white" : "text-black"}`}>scale</span>, and building <span className={`font-medium ${isDark ? "text-white" : "text-black"}`}>incrementally</span>.
                            </p>
                        </div>

                        <div className={`mt-10 p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-gray-500">
                                <Zap className="text-yellow-500" size={18} />
                                Core Philosophy
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-2">
                                        <Layers size={20} />
                                    </div>
                                    <h4 className={`font-bold transition-colors duration-300 ${isDark ? "text-gray-100" : "text-gray-900"}`}>Incremental Building</h4>
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                        Start small. Don't over-engineer for a billion users when you have ten. Evolve the system as requirements grow.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                                        <Scale size={20} />
                                    </div>
                                    <h4 className={`font-bold transition-colors duration-300 ${isDark ? "text-gray-100" : "text-gray-900"}`}>Trade-offs</h4>
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                        There is no "best" database. Every choice (SQL vs NoSQL, Consistency vs Availability) has a cost.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-2">
                                        <Activity size={20} />
                                    </div>
                                    <h4 className={`font-bold transition-colors duration-300 ${isDark ? "text-gray-100" : "text-gray-900"}`}>The Cycle</h4>
                                    <p className={`text-sm leading-relaxed font-mono transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                        Design → Build → Measure → Improve
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Case Study: Presence System */}
                    <section className="scroll-mt-24" id="presence">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20">
                                <Activity size={28} />
                            </div>
                            <div>
                                <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>Case Study: User Presence</h2>
                                <p className="text-gray-500 mt-1">Designing a real-time Online/Offline indicator for millions of users.</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            {/* Problem & Solution */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <h3 className={`text-xl font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                        <AlertTriangle size={20} className="text-red-500" />
                                        The Problem
                                    </h3>
                                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                        We need to show if a user is online.
                                        <br />
                                        <span className="text-red-500 font-medium">Naive Approach (Pull):</span> The server polls the client every few seconds.
                                        <br />
                                        <span className="text-red-500 font-medium">Issue:</span> Extremely expensive. With 1M users, polling every 5s creates massive unnecessary load.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className={`text-xl font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                        <CheckCircle size={20} className="text-green-500" />
                                        The Solution (Heartbeat)
                                    </h3>
                                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                        <span className="text-green-500 font-medium">Push Model:</span> Clients send a "heartbeat" signal every X seconds.
                                        <br />
                                        <span className="text-green-500 font-medium">Logic:</span> If <code className={`px-1 py-0.5 rounded ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>last_seen &gt; 30s</code>, mark as Offline.
                                        <br />
                                        "Absence of signal is the signal."
                                    </p>
                                </div>
                            </div>

                            {/* Architecture Diagram */}
                            <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-black border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                <h4 className="text-xs font-bold text-gray-500 mb-8 uppercase tracking-widest text-center">System Architecture: The Pulse Table</h4>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                                    {/* Clients */}
                                    <div className="flex flex-col gap-6 items-center">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-sm font-bold shadow-lg transition-colors duration-300 ${isDark ? "bg-gray-800 border-black text-gray-300" : "bg-gray-100 border-white text-gray-700"}`}>U{i}</div>
                                            ))}
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-mono text-blue-500 mb-1">POST /heartbeat</div>
                                            <div className="text-xs text-gray-500">Every 10s</div>
                                        </div>
                                    </div>

                                    {/* Flow Animation */}
                                    <div className="hidden md:flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                                        <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" style={{ animationDelay: "0.5s" }}></div>
                                    </div>

                                    {/* Database */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                        <div className={`relative p-6 rounded-xl border w-64 transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
                                            <div className={`flex items-center justify-between mb-4 border-b pb-2 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                                <div className="flex items-center gap-2 text-purple-500">
                                                    <Database size={16} />
                                                    <span className="font-bold text-sm">Redis / DynamoDB</span>
                                                </div>
                                                <span className="text-[10px] text-gray-500 font-mono">TTL: 30s</span>
                                            </div>
                                            <div className="font-mono text-xs space-y-3">
                                                <div className="flex justify-between text-gray-500 px-2">
                                                    <span>user_id</span>
                                                    <span>last_seen</span>
                                                </div>
                                                <div className={`flex justify-between p-2 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700/50" : "bg-gray-50 border-gray-100"}`}>
                                                    <span className="text-blue-500">u_123</span>
                                                    <span className="text-green-500">1712034500</span>
                                                </div>
                                                <div className={`flex justify-between p-2 rounded border transition-colors duration-300 opacity-50 ${isDark ? "bg-gray-800/50 border-gray-700/50" : "bg-gray-50 border-gray-100"}`}>
                                                    <span className="text-gray-400">u_456</span>
                                                    <span className="text-red-400">1712034480</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scale Analysis */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-900/30 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <HardDrive size={16} />
                                        Storage Impact
                                    </div>
                                    <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>~8 GB</div>
                                    <div className="text-xs text-gray-500">
                                        For <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>1 Billion</span> Users
                                        <br />
                                        (8 bytes per user)
                                    </div>
                                </div>
                                <div className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-900/30 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <Zap size={16} />
                                        Throughput
                                    </div>
                                    <div className="text-3xl font-bold text-blue-500 mb-1">6M RPM</div>
                                    <div className="text-xs text-gray-500">
                                        For <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>1 Million</span> Active
                                        <br />
                                        (1 heartbeat / 10s)
                                    </div>
                                </div>
                                <div className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-900/30 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <Trash2 size={16} />
                                        Cleanup Strategy
                                    </div>
                                    <div className="text-xl font-bold text-purple-500 mb-1">TTL (Auto-Delete)</div>
                                    <div className="text-xs text-gray-500">
                                        Avoid CRON jobs. Use DB native expiry (Redis/DynamoDB).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Database Architecture */}
                    <section className="scroll-mt-24" id="database">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                <Database size={28} />
                            </div>
                            <div>
                                <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>Database Architecture</h2>
                                <p className="text-gray-500 mt-1">Schema design, data types, and soft deletion strategies.</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Schema Design */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold text-blue-500">User Table</h3>
                                        <span className="text-xs font-mono text-gray-500">Relational</span>
                                    </div>
                                    <ul className={`space-y-4 font-mono text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>id</span>
                                            <span className={`px-2 py-1 rounded text-xs ${isDark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-600"}`}>INT (PK)</span>
                                        </li>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span>name</span>
                                            <span className={`px-2 py-1 rounded text-xs ${isDark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-600"}`}>VARCHAR(255)</span>
                                        </li>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span>bio</span>
                                            <span className={`px-2 py-1 rounded text-xs ${isDark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-600"}`}>VARCHAR(500)</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 text-xs text-gray-500 italic">
                                        → One user can have multiple blogs.
                                    </div>
                                </div>

                                <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold text-green-500">Blogs Table</h3>
                                        <span className="text-xs font-mono text-gray-500">Relational</span>
                                    </div>
                                    <ul className={`space-y-4 font-mono text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>id</span>
                                            <span className={`px-2 py-1 rounded text-xs ${isDark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-600"}`}>INT (PK)</span>
                                        </li>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span>author_id</span>
                                            <span className={`px-2 py-1 rounded text-xs ${isDark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-600"}`}>INT (FK)</span>
                                        </li>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span>content</span>
                                            <span className="text-yellow-600 bg-yellow-500/10 px-2 py-1 rounded text-xs">LONGTEXT</span>
                                        </li>
                                        <li className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                                            <span>is_deleted</span>
                                            <span className="text-blue-500 bg-blue-500/10 px-2 py-1 rounded text-xs">BOOLEAN</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Deep Dive: Soft Delete */}
                            <div className={`p-8 rounded-2xl border relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Shield size={100} />
                                </div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Shield size={24} className="text-purple-500" />
                                    The Case for Soft Deletes
                                </h3>
                                <p className={`mb-8 max-w-2xl transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Never <span className="text-red-500 font-mono font-bold">DELETE</span> data immediately. Use an <span className="text-blue-500 font-mono font-bold">is_deleted</span> flag instead. This is industry standard (e.g., Google Drive Trash, Facebook Deactivation).
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className={`p-5 rounded-xl transition-colors duration-300 ${isDark ? "bg-black border border-gray-800" : "bg-gray-50 border border-gray-100"}`}>
                                        <div className={`flex items-center gap-2 font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                                            <RefreshCw size={16} className="text-blue-500" />
                                            Recoverability
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">Allows "Undo" functionality. Data can be restored instantly by flipping the flag back to false.</p>
                                    </div>
                                    <div className={`p-5 rounded-xl transition-colors duration-300 ${isDark ? "bg-black border border-gray-800" : "bg-gray-50 border border-gray-100"}`}>
                                        <div className={`flex items-center gap-2 font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                                            <FileText size={16} className="text-green-500" />
                                            Auditing
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">Maintain history. Who deleted it? When? Why? Essential for compliance and debugging.</p>
                                    </div>
                                    <div className={`p-5 rounded-xl transition-colors duration-300 ${isDark ? "bg-black border border-gray-800" : "bg-gray-50 border border-gray-100"}`}>
                                        <div className={`flex items-center gap-2 font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                                            <Cpu size={16} className="text-red-500" />
                                            Performance
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">Hard deletes force database B-Trees to rebalance, which is expensive. Soft delete is just a simple UPDATE.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Data Types Comparison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <FileText size={18} className="text-yellow-500" />
                                        LONGTEXT vs VARCHAR
                                    </h3>
                                    <div className="space-y-4">
                                        <div className={`p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                            <div className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>VARCHAR</div>
                                            <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>Stored <span className="text-green-500 font-medium">inline</span> with the row. Fast access. Use for short text (Bio, Name).</p>
                                        </div>
                                        <div className={`p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                            <div className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>LONGTEXT</div>
                                            <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>Stored <span className="text-blue-500 font-medium">externally</span> with a pointer. Slower read, but keeps the main table light. Use for heavy content (Blog Body).</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <Clock size={18} className="text-blue-500" />
                                        DateTime Strategy
                                    </h3>
                                    <div className="space-y-4">
                                        <div className={`flex items-center justify-between p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                            <div>
                                                <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Epoch (Integer)</div>
                                                <div className="text-xs text-gray-500">Seconds since 1970</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono text-green-500 text-sm">1712034500</div>
                                                <div className="text-[10px] text-gray-500">4 bytes (Efficient)</div>
                                            </div>
                                        </div>
                                        <div className={`flex items-center justify-between p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                            <div>
                                                <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>ISO 8601 (String)</div>
                                                <div className="text-xs text-gray-500">Human Readable</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono text-yellow-500 text-sm">2025-04-02T...</div>
                                                <div className="text-[10px] text-gray-500">More space</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Scaling & Optimization */}
                    <section className="scroll-mt-24" id="optimization">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>Scaling & Optimization</h2>
                                <p className="text-gray-500 mt-1">Connection pooling, caching strategies, and infrastructure.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Connection Pooling */}
                            <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Network size={20} className="text-blue-500" />
                                    Connection Pooling
                                </h3>
                                <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Establishing a TCP connection involves a 3-way handshake, which is expensive. Pooling maintains a set of open connections to be reused.
                                </p>
                                <div className={`p-4 rounded-xl border font-mono text-xs space-y-2 transition-colors duration-300 ${isDark ? "bg-black border-gray-800" : "bg-gray-50 border-gray-200"}`}>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Server size={14} />
                                        <span>App Server</span>
                                    </div>
                                    <div className="flex justify-center py-2">
                                        <div className="w-0.5 h-4 bg-gray-400"></div>
                                    </div>
                                    <div className={`p-3 rounded border text-center transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
                                        <div className="text-blue-500 font-bold mb-1">Connection Pool</div>
                                        <div className="text-[10px] text-gray-500">Min: 10 | Max: 100</div>
                                    </div>
                                    <div className="flex justify-center py-2">
                                        <div className="w-0.5 h-4 bg-gray-400"></div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Database size={14} />
                                        <span>Database</span>
                                    </div>
                                </div>
                            </div>

                            {/* Caching */}
                            <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Layers size={20} className="text-purple-500" />
                                    Caching
                                </h3>
                                <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    "Caches are just glorified Hash Tables." Use them to reduce database load for frequent reads.
                                </p>
                                <div className="space-y-3">
                                    <div className={`flex items-center gap-3 p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xs">1</div>
                                        <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Request arrives at API</div>
                                    </div>
                                    <div className={`flex items-center gap-3 p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                        <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-xs">2</div>
                                        <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Check Cache (Redis)</div>
                                    </div>
                                    <div className={`flex items-center gap-3 p-3 rounded border transition-colors duration-300 ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                                        <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">3</div>
                                        <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>If Miss → Query DB & Update Cache</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Engineering FAQ */}
                    <section className={`border-t pt-16 transition-colors duration-300 ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                        <div className="flex items-center gap-4 mb-10">
                            <div className={`p-3 rounded-xl border transition-colors duration-300 ${isDark ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-gray-100 text-gray-700 border-gray-200"}`}>
                                <HelpCircle size={28} />
                            </div>
                            <div>
                                <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>Engineering Insights & FAQ</h2>
                                <p className="text-gray-500 mt-1">Deep dive into specific questions and edge cases.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> Why not store cache in the DB?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Databases are optimized for durability (disk storage), while caches are optimized for speed (RAM). Mixing them degrades the performance of both.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> Redis vs DynamoDB?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Redis:</span> In-memory, sub-millisecond latency, volatile (data lost on restart unless persisted). Great for caching.
                                    <br />
                                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>DynamoDB:</span> SSD-based, managed, durable. Great for persistent key-value storage.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> What is Vendor Locking?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    When you build deeply on proprietary features (e.g., AWS DynamoDB Streams), it becomes extremely difficult to switch to another provider (like Google Cloud or Azure) later.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> Soft Delete vs Archival?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Soft Delete:</span> Keeps data in the active table (hidden via flag).
                                    <br />
                                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Archival:</span> Moves old data to cheaper, colder storage (e.g., S3 Glacier) to reduce DB size and cost.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> Unique Index & Soft Delete?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    If you have a unique email constraint and soft delete a user, they can't sign up again with the same email. Solution: Use a composite unique index `(email, is_deleted)` or hard delete for unique fields.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    <span className="text-blue-500">Q.</span> Compression in Caching?
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Trade-off between <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>CPU (Time)</span> and <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>RAM (Space)</span>. Compressing data saves memory but requires CPU cycles to decompress on every read.
                                </p>
                            </div>
                        </div>

                        <div className={`mt-16 p-8 rounded-2xl text-center relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-900/30" : "bg-blue-50 border border-blue-100"}`}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <p className={`text-xl md:text-2xl font-medium italic font-serif transition-colors duration-300 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                "Life is built of problems. Just find the optimal solution."
                            </p>
                            <div className="mt-4 text-sm text-gray-500 uppercase tracking-widest font-bold">
                                System Design Mantra
                            </div>
                        </div>
                    </section>

                </article>
            </main>
        </div>
    );
}
