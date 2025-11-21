import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import Link from 'next/link';

interface BlogPost {
  title: string;
  platform?: 'Medium' | 'Dev.to' | 'Personal' | 'Series'; // optional for internal posts
  url: string; // can be external link or internal route
  isInternal?: boolean; // true if it redirects to your website
}

interface BlogCardProps {
  post: BlogPost;
  isDark: boolean;
}

const BlogCard = ({ post, isDark }: BlogCardProps) => {
  const getPlatformIcon = () => {
    if (post.platform === 'Medium') {
      return <SiMedium size={16} />;
    }
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
      </svg>
    );
  };

  if (post.isInternal) {
    return (
      <Link
        href={post.url}
        className={`group block p-6 border border-dashed rounded-sm transition-all duration-300 hover:scale-[1.02] ${isDark
          ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
          : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
      >
        <h3 className={`text-lg font-semibold mb-4 leading-tight group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          {post.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            {getPlatformIcon()}
            Read on {post.platform}
          </span>

          <ArrowRight
            size={16}
            className={`group-hover:translate-x-1 transition-transform ${isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
          />
        </div>
      </Link>
    );
  }

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 border border-dashed rounded-sm transition-all duration-300 hover:scale-[1.02] ${isDark
        ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
        : 'bg-white border-gray-300 hover:border-gray-400'
        }`}
    >
      <h3 className={`text-lg font-semibold mb-4 leading-tight group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'
        }`}>
        {post.title}
      </h3>

      <div className="flex items-center justify-between">
        <span className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
          {getPlatformIcon()}
          Read on {post.platform}
        </span>

        <ExternalLink
          size={16}
          className={`group-hover:translate-x-1 transition-transform ${isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
        />
      </div>
    </a>
  );
};

interface BlogProps {
  isDark: boolean;
}

export default function Blog({ isDark }: BlogProps) {
  const blogPosts: BlogPost[] = [
    {
      title: "System Design Blog Series",
      platform: "Series",
      url: "/blog",
      isInternal: true
    },
    {
      title: "Next.js + Tailwind CSS + Prisma + PostgreSQL – My Fullstack Setup Guide",
      platform: "Medium",
      url: "https://medium.com/@waseemadil/nextjs-tailwind-prisma-postgresql"
    },
    {
      title: "Setting Up Prisma + PostgreSQL in a Monorepo (TurboRepo + PNPM + Node.js)",
      platform: "Dev.to",
      url: "https://dev.to/waseemadil/prisma-postgresql-monorepo"
    },
    {
      title: "5 Important Things to Secure Your Backend API (For Beginners)",
      platform: "Dev.to",
      url: "https://dev.to/waseemadil/secure-backend-api"
    }
  ];

  return (
    <div
      className={`w-full flex justify-center transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-10 md:py-16 px-4 md:px-10">
        {/* Main Heading */}
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          My Blog
        </h2>

        {/* Description */}
        <p className={`mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
          Sharing my journey in full-stack development, best practices, and technical tutorials.
        </p>

        {/* Blog Posts Grid */}
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}