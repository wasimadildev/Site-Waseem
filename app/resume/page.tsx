// pages/resume.tsx
"use client"; // ensures this page is client-side

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:opacity-80 transition-opacity duration-200">
              <ArrowLeft size={16} /> Back
            </button>
          </Link>
          <h1 className="text-2xl font-bold">My Resume</h1>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="flex-1 p-6">
        <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            src="/waseemadil.pdf"
            className="w-full h-[80vh] md:h-[90vh]"
            title="Resume"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Waseem Adil. All rights reserved.
      </footer>
    </div>
  );
}
