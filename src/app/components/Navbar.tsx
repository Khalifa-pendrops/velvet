"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type MenuChild = {
  label: string;
  link: string;
};

type MenuItem = {
  label: string;
  link: string;
  children?: MenuChild[]; 
  subMenu?: MenuItem[]; 
};

const menu: MenuItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "#about",
  },

  {
    label: "Services",
    link: "#services",
    subMenu: [
      {
        label: "For Schools",
        link: "#about",
        children: [
          { label: "Curriculum Development", link: "#about" },
          { label: "Teacher Training", link: "#about" },
          { label: "Classroom Support", link: "#about" },
        ],
      },
      {
        label: "For Individuals",
        link: "#about",
        children: [
          { label: "Tutoring", link: "#about" },
          { label: "Cultural Immersion", link: "#about" },
        ],
      },
      // { label: "Social Media", link: "#footer" },
    ],
  },

  {
    label: "Clientele",
    link: "#clientele",
  },
  {
    label: "Products",
    link: "#home",
    subMenu: [
      { label: "Budgeting and other Tracking Templates", link: "#about" },
      { label: "Igbo Language Learning Resources ", link: "#about" },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<{
    parent: string;
    child: string;
  } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlScroll = () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handlScroll);
    return () => window.removeEventListener("scroll", handlScroll);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest("#mobile-nav") &&
        !(e.target as HTMLElement).closest("#hamburger-btn")
      ) {
        setMobileOpen(false);
        setMobileDropdown(null);
      }
    };

    if (mobileOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav
      className={`bg-[#800080] text-white font-bold relativ flex items-center  justify-between px-8 py-4 fixed w-full top-0 shadow-2xl z-50 1  ${
        isScrolled
          ? "bg-[#800080]/60 boder-none text-[#401a6d] shadow-none "
          : ""
      }`}
    >
      <div className="md:hidden w-[30%] ">
        {/* HAMBURGER ICON */}
        <button
          id="hamburger-btn"
          className="md:hidden p-2 w-full cursor-pointer "
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen((prev) => !prev);
          }}
        >
          {mobileOpen ? (
            <div className="flex items-center justify-between transition-opacity duration-400 w-full ">
              <X size={24} />
            </div>
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className={`md:hidden text-white px-4 py-4 space-y-2 absolute left-0 top-full w-full bg-[#401a6d]/80 z-50 transform transition-all duration-400 origin-top  ${
              mobileOpen
                ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
            }`}
          >
            {menu.map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-2">
                {/* Top-level link + toggle arrow */}
                <div className="flex items-center justify-between">
                  {/* If it has a link, make it a Next.js Link */}
                  <Link
                    href={item.link}
                    onClick={() => {
                      setMobileOpen(false); // close menu on link click
                      setMobileDropdown(null);
                    }}
                    className="text-gray-300 hover:text-indigo-400 font-bold w-full"
                  >
                    {item.label}
                  </Link>

                  {/* this only show arrow if submenu exists */}
                  {item.subMenu && (
                    <button
                      onClick={(e) => {
                        //this prevent link click
                        e.stopPropagation();
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        );
                      }}
                      className="p-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* First-level submenu */}
                {item.subMenu && mobileDropdown === item.label && (
                  <div className="pl-4 space-y-1 mt-2">
                    {item.subMenu.map((sub, index2) => (
                      <div key={index2} className="space-y-1">
                        {sub.children ? (
                          <>
                            <p className="flex items-center justify-between text-[14px] text-gray-300">
                              {sub.label} <ChevronRight size={14} />
                            </p>
                            <div className="pl-4 space-y-1">
                              {sub.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.link}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                  className="block py-1 text-gray-400 hover:text-white text-sm italic"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={sub.link}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropdown(null);
                            }}
                            className="block py-1 text-gray-300 hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* NAV ITEMS */}
      <Link href="/#" className="flex items-center gap-4 ">
        <div className="flex justify-center items-center border-none w-[60px] h-[60px] rounded-full ">
          {/* <span className="w-[20px] h-[20px] rounded-full bg-[#401a6d]/80 "></span> */}
          <Image
            src="/twevlogo.png"
            alt="hero image"
            width={500}
            height={500}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full "
          />
        </div>
        <h2 className="md:flex flex-col items-start justify-center hidden ">
          <span className="font-bold text-base md:text-xl ">
            Twelvet Educational Development Services
          </span>
          <span className=" text-sm md:text-[.8rem] font-bold ">
            Administrative Support for an Effective School
          </span>
        </h2>
      </Link>
      <div className="hidden md:flex max-w-full px-4 ">
        <ul className="flex space-x-8">
          {menu.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => {
                setOpenMenu(null);
                setOpenSubMenu(null);
              }}
            >
              <Link
                href={item.link}
                className="flex items-center gap-2 py-4 hover:text-[#FF7F50]"
              >
                {item.label}
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-400 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {item.subMenu && (
                <ul
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-lg rounded-md w-48 py-2 transform transition-all duration-400 origin-top z-20
                    ${
                      openMenu === item.label
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                    }`}
                >
                  {item.subMenu.map((sub) => {
                    const isOpen =
                      openSubMenu?.parent === item.label &&
                      openSubMenu?.child === sub.label;

                    return (
                      <li
                        key={sub.label}
                        className="relative"
                        onMouseEnter={() =>
                          setOpenSubMenu({
                            parent: item.label,
                            child: sub.label,
                          })
                        }
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <Link
                          href={sub.link}
                          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.label}
                          {sub.children && <ChevronRight size={16} />}
                        </Link>

                        {sub.children && (
                          <ul
                            className={`absolute left-full top-0 bg-white text-gray-800 shadow-lg rounded-md w-48 py-2 transform transition-all duration-400 origin-left z-30
                              ${
                                isOpen
                                  ? "opacity-100 translate-x-0 pointer-events-auto"
                                  : "opacity-0 -translate-x-2 pointer-events-none"
                              }`}
                          >
                            {sub.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.link}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
