"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full bg-background shadow-lg fixed top-0 z-50 flex justify-between items-center py-6 px-8 lg:px-24">
      <h2>
        <a
          href="/"
          className="text-[24px] text-white font-bold tracking-wide hover:text-gray-300"
        >
          nzahfatimah
        </a>
      </h2>
      <ul className="hidden md:flex gap-12">
      <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="text-[16px] text-white hover:text-[#789DBC]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
            }}
            className="text-[16px] text-white hover:text-[#789DBC]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#certificate"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("certificate");
            }}
            className="text-[16px] text-white hover:text-[#789DBC]"
          >
            Certificate
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
            }}
            className="text-[16px] text-white hover:text-[#789DBC]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
            className="text-[16px] text-white hover:text-[#789DBC]"
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white text-[24px] focus:outline-none"
        aria-label="Open navigation menu"
      >
        ☰
      </button>
      <ul
        className={`flex flex-col gap-4 absolute top-full left-0 bg-background w-full py-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
              setMobileMenuOpen(false);
            }}
            className="text-[16px] text-white hover:text-[#789DBC] px-8"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
              setMobileMenuOpen(false);
            }}
            className="text-[16px] text-white hover:text-[#789DBC] px-8"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#certificate"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("certificate");
              setMobileMenuOpen(false);
            }}
            className="text-[16px] text-white hover:text-[#789DBC] px-8"
          >
            Certificate
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
              setMobileMenuOpen(false);
            }}
            className="text-[16px] text-white hover:text-[#789DBC] px-8"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
              setMobileMenuOpen(false);
            }}
            className="text-[16px] text-white hover:text-[#789DBC] px-8"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
