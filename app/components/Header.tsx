"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { allIcons } from "../helpers/icons";
import ServicesDropdown from "./ServicesDropdown";
import AboutDropdown from "./AboutDropdown";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  activeRoute?:
    | "home"
    | "about"
    | "services"
    | "projects"
    | "career"
    | "blogs"
    | "case-study";

  forContactUs?: boolean;
}

interface NavigationItem {
  id:
    | "home"
    | "about"
    | "services"
    | "projects"
    | "career"
    | "blogs"
    | "case-study";
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownComponent?: React.ReactNode;
  refKey?: string;
}

export default function Header({
  activeRoute = undefined,
  forContactUs,
}: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "about",
      label: "About us",
      href: "/about",
      hasDropdown: true,
      refKey: "about",
      dropdownComponent: <AboutDropdown isVisible={isAboutOpen} />,
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      hasDropdown: true,
      refKey: "services",
      dropdownComponent: <ServicesDropdown isVisible={isServicesOpen} />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
    },
    {
      id: "career",
      label: "Career",
      href: "/careers",
    },
    {
      id: "blogs",
      label: "Blogs",
      href: "/blogs",
    },
    {
      id: "case-study",
      label: "Case Studies",
      href: "/case-study",
    },
  ];

  // Close services dropdown when mouse leaves the dropdown area
  // The hover handlers on the container will handle opening/closing

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const openDropdown = (itemId: string) => {
    if (itemId === "services") {
      setIsServicesOpen(true);
    } else if (itemId === "about") {
      setIsAboutOpen(true);
    }
  };

  const closeDropdown = (itemId: string) => {
    if (itemId === "services") {
      setIsServicesOpen(false);
    } else if (itemId === "about") {
      setIsAboutOpen(false);
    }
  };

  const isDropdownOpen = (itemId: string) => {
    if (itemId === "services") return isServicesOpen;
    if (itemId === "about") return isAboutOpen;
    return false;
  };

  const getRef = (refKey?: string) => {
    if (refKey === "services") return servicesRef;
    if (refKey === "about") return aboutRef;
    return null;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="w-full fixed z-20 top-0 left-0  sm:h-auto  h-[5.6875rem] bg-white py-5 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.04)]">
      <div className="w-full sm:w-auto sm:px-side-space  max-w-desktop mx-auto flex items-center justify-between  gap-5">
        {/* Logo or Back to Home */}
        {forContactUs ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-[1rem] font-normal font-poppins text-text-gray hover:text-primary-blue transition-colors duration-300 group"
          >
            <div className="w-5 h-5 text-text-gray group-hover:text-primary-blue transition-colors duration-300">
              {allIcons.chevronLeft(20, 20)}
            </div>
            <span className="relative z-10 inline-block transition-all duration-300 group-hover:-translate-x-0.5">
              Back to Home
            </span>
          </Link>
        ) : (
          <Link
            href="/"
            className="w-[9rem] h-[2.8rem] relative flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-[-2deg]"
          >
            <Image
              src="/images/logo-176606.webp"
              alt="Logo"
              fill
              className="object-contain transition-opacity duration-300 hover:opacity-90"
            />
          </Link>
        )}

        {/* Navigation */}
        <nav className="flex sm:hidden items-center justify-end gap-6 flex-1 h-6">
          {navigationItems.map((item) => {
            const isActive = activeRoute === item.id;
            const isOpen = isDropdownOpen(item.id);
            const itemRef = getRef(item.refKey);

            const baseClassName = classNames(
              "relative text-base font-normal font-poppins py-1 transition-all duration-500 ease-out overflow-hidden",
              {
                "text-primary-blue": isActive,
                "text-text-gray": !isActive,
              }
            );

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  ref={itemRef}
                  className="relative flex items-center gap-1 group"
                  onMouseEnter={() => openDropdown(item.id)}
                  onMouseLeave={() => closeDropdown(item.id)}
                >
                  <button
                    onClick={() => {
                      if (item.href) {
                        router.push(item.href);
                      }
                    }}
                    className={classNames(
                      baseClassName,
                      "cursor-pointer group-hover:text-primary-blue relative"
                    )}
                  >
                    <span className="relative z-10 inline-block transition-all duration-500 group-hover:-translate-y-0.5">
                      {item.label}
                    </span>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  </button>
                  <div
                    className={classNames(
                      "w-4 h-4 text-text-gray transition-all duration-500 group-hover:text-primary-blue relative z-10",
                      {
                        "text-primary-blue rotate-180": isOpen,
                      }
                    )}
                  >
                    {allIcons.chevronDown(16, 16)}
                  </div>
                  {/* Animated underline - spans across both text and icon */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-500 ease-out group-hover:w-[calc(100%-3px)]"></span>
                  {item.dropdownComponent}
                </div>
              );
            }

            return (
              <div key={item.id} className="flex items-center justify-center">
                {item.href?.startsWith("http") ? (
                  <a
                    href={item.href}
                    className={classNames(
                      baseClassName,
                      "group hover:text-primary-blue"
                    )}
                  >
                    <span className="relative z-10 inline-block transition-all duration-500 group-hover:-translate-y-0.5">
                      {item.label}
                    </span>
                    {/* Animated underline - slides from left to right */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-500 ease-out group-hover:w-full"></span>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  </a>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={classNames(
                      baseClassName,
                      "group hover:text-primary-blue"
                    )}
                  >
                    <span className="relative z-10 inline-block transition-all duration-500 group-hover:-translate-y-0.5">
                      {item.label}
                    </span>
                    {/* Animated underline - slides from left to right */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-500 ease-out group-hover:w-full"></span>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact-us"
          className="btn btn-primary sm:!hidden group !pr-2 relative overflow-hidden transition-all  "
        >
          <span className="text-sm font-normal font-poppins relative z-10 transition-transform duration-300 ">
            Contact us
          </span>
          <div className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            {allIcons.chevronRight(20, 20)}
          </div>
          <span className="absolute inset-0 bg-white/10 translate-y-full "></span>
        </Link>
        <button
          onClick={toggleSidebar}
          className="hidden sm:flex items-center justify-center bg-primary-blue h-10 w-10 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full  p-0 border-0 "
          aria-label="Toggle menu"
        >
          {allIcons.menu}
        </button>
      </div>

      {/* Sidebar Overlay and Sidebar */}
      <>
        {/* Overlay */}
        <div
          className={classNames(
            "fixed inset-0 bg-black/50 z-40 sm:block hidden transition-opacity duration-300",
            {
              "opacity-100 pointer-events-auto": isSidebarOpen,
              "opacity-0 pointer-events-none": !isSidebarOpen,
            }
          )}
          onClick={closeSidebar}
        />
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={classNames(
            "fixed top-0 left-0 h-full w-[22.5rem] z-50 sm:block hidden transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isSidebarOpen,
              "-translate-x-full": !isSidebarOpen,
            }
          )}
        >
          <Sidebar activeRoute={activeRoute} onClose={closeSidebar} />
        </div>
      </>
    </header>
  );
}
