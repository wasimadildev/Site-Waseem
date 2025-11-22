"use client";

import React, { useState } from "react";
import ModernNavbar from "../components/Navbar";
import Bookshelf from "../components/Bookshelf";
import ContactPage from "../components/Contact";

export default function BookshelfPage() {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className="max-w-[1400px] mx-auto flex flex-col w-full">
            <ModernNavbar isDark={isDark} setIsDark={setIsDark} />

            <section id="bookshelf" className="pt-20">
                <Bookshelf isDark={isDark} />
            </section>

            <section id="contact">
                <ContactPage isDark={isDark} />
            </section>
        </div>
    );
}
