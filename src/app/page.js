"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variables";
import { 
  Award, Building, Calendar, ChevronUp, Cloud, Code, 
  Database, Download, Github, GithubIcon, Instagram, 
  Linkedin, Mail, MapPin, Menu, Phone, Server, 
  Twitter, TwitterIcon, Wrench, X, XCircleIcon,
  Sparkles, Terminal, Cpu, Globe, Zap, 
  Code2, Palette, Smartphone, Layers, 
  ExternalLink, Command, Figma
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    // State management
    const [cardStates, setCardStates] = useState({ santimPay: false, tilla: false });
    const [isOpen, setIsOpen] = useState(false);
    const [TheradermDetailDescription, setTheradermDetailDescription] = useState(false);
    const [isAVLOpen, setIsAVLOpen] = useState(false);
    const [tillaShopDescription, setTillaShopDescription] = useState(false);
    const [projects, setProjects] = useState(false);
    const [frontendSection, setFrontendSection] = useState(false);
    const [backendSection, setBackendSection] = useState(false);
    const [isTheradermOpen, setisTheradermOpen] = useState(false);
    const [isShopBot, setIsShopBot] = useState(false);
    const [isNavBar, setIsNavBar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [contactUsPopup, setContactUsPopup] = useState(false);
    const [hoveredTech, setHoveredTech] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [activeTechTab, setActiveTechTab] = useState("all");

    // Refs
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const heroRef = useRef(null);

    // Data arrays
    const frontend = [
        { src: "/physics.png", name: "React", color: "from-blue-400 to-cyan-400" },
        { src: "/Tailwind CSS.png", name: "Tailwind CSS", color: "from-teal-400 to-emerald-400" },
        { src: "/WordPress.png", name: "WordPress", color: "from-blue-500 to-blue-700" },
        { src: "/bootstrap.png", name: "Bootstrap", color: "from-purple-500 to-pink-500" },
        { src: "/electron.png", name: "Electron", color: "from-blue-600 to-indigo-600" },
        { src: "/next.png", name: "Next.js", color: "from-gray-800 to-gray-900" },
        { src: "/html.png", name: "HTML5", color: "from-orange-500 to-red-500" }
    ];

    const cloud = [
        { src: "/Vercel.png", name: "Vercel", color: "from-black to-gray-800" },
        { src: "/render.png", name: "Render", color: "from-gray-700 to-gray-900" },
    ];

    const backend = [
        { src: "/Firebase.png", name: "Firebase", color: "from-yellow-500 to-orange-500" },
        { src: "/JavaScript.png", name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
        { src: "/Laravel.png", name: "Laravel", color: "from-red-500 to-pink-500" },
        { src: "/node.png", name: "Node.js", color: "from-green-500 to-emerald-500" },
        { src: "/PHP.png", name: "PHP", color: "from-purple-500 to-indigo-500" },
        { src: "/express.png", name: "Express.js", color: "from-gray-400 to-gray-600" },
    ];

    const database = [
        { src: "/MongoDB.png", name: "MongoDB", color: "from-green-500 to-emerald-600" },
        { src: "/MySQL.png", name: "MySQL", color: "from-blue-500 to-cyan-500" },
    ];

    const devUtilities = [
        { src: "/OIP1.jpg", name: "Git", color: "from-orange-500 to-red-500" },
        { src: "/Postman.png", name: "Postman", color: "from-orange-400 to-orange-600" },
    ];

    const experience = [
        {
            image: "/santimpay-logo.png",
            title: "Backend Developer",
            date: "Jul 2023 - Mar 2024",
            position: "Intern",
            description: [
                "Developed and maintained backend systems using Laravel.",
                "Utilized MySQL for database management.",
                "Employed Postman for API testing and validation.",
                "Collaborated with front-end developers and product managers.",
                "Created and managed components in Blender.",
                "Assisted in designing RESTful APIs for seamless front-end integration.",
                "Implemented authentication and authorization mechanisms for secure user access.",
                "Participated in code reviews and contributed to improving code quality.",
                "Documented API endpoints and technical specifications for team reference.",
                "Gained experience in version control using Git and GitHub."
            ],
            key: "santimPay"
        },
        {
            image: "/Tilla Logo-01.png",
            title: "Fullstack Developer",
            date: "Sep 2023 - Present",
            position: "SR Developer",
            description: [
                "Developed responsive web applications using the MERN stack (MongoDB, Express, React, Node.js), ensuring cross-device compatibility and user-friendly interfaces.",
                "Implemented dynamic UI components with React.js, enhancing interactivity and improving the overall user experience.",
                "Designed and integrated RESTful APIs to facilitate seamless communication between client and server.",
                "Managed application state effectively using Redux and Context API, improving data flow and application scalability.",
                "Utilized MongoDB and MySQL for efficient data storage and retrieval, depending on project requirements.",
                "Collaborated with UI/UX designers to refine user experience and deliver visually appealing interfaces.",
                "Conducted code reviews to maintain code quality and ensure adherence to best practices.",
                "Participated in Agile development processes, contributing to sprint planning, stand-ups, and retrospectives.",
                "Integrated third-party APIs and services, extending application functionality and enhancing user experience.",
                "Developed unit and integration tests to ensure code reliability and minimize bugs.",
                "Optimized application performance through refactoring, profiling, and implementing best coding practices.",
                "Participated in project planning and team discussions, contributing ideas to enhance project outcomes.",
                "Developed an online shopping bot for Telegram, allowing customers to order products directly through the platform, with seamless delivery integration."                                  
            ],
            key: "tilla"
        }
    ];

    // All technologies for filtering
    const allTechnologies = [...frontend, ...backend, ...database, ...cloud, ...devUtilities];

    // Helper functions
    const toggleCard = (key) => {
        setCardStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const toggleProjects = () => {
        setProjects(!projects);
    };

    const toogleNavBar = () => {
        setIsNavBar(!isNavBar);
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/surafelKassahunResume.pdf';
        link.download = 'surafel_kassahun_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredTechnologies = activeTechTab === "all" 
        ? allTechnologies 
        : activeTechTab === "frontend" 
            ? frontend 
            : activeTechTab === "backend" 
                ? backend 
                : activeTechTab === "database" 
                    ? database 
                    : activeTechTab === "cloud" 
                        ? cloud 
                        : devUtilities;

    // GSAP animations
    useEffect(() => {
        // Hero animation
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
        tl.fromTo("#pic", 
            { opacity: 0, scale: 0.8, y: 50, rotate: -10 }, 
            { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1.2, delay: 0.2 }
        )
        .fromTo("#name", 
            { opacity: 0, x: -50, letterSpacing: "-5px" }, 
            { opacity: 1, x: 0, letterSpacing: "2px", duration: 1 }, 
            "-=0.8"
        )
        .fromTo("#position", 
            { opacity: 0, x: -50 }, 
            { opacity: 1, x: 0, duration: 0.8 }, 
            "-=0.6"
        )
        .fromTo(".social-icon", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 
            "-=0.4"
        );

        // Floating animation for tech elements
        gsap.to(".float-element", {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Background particles animation
        const createParticles = () => {
            const particlesContainer = document.querySelector('.particles-container');
            if (!particlesContainer) return;

            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute w-1 h-1 bg-primary/30 rounded-full animate-float';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particlesContainer.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: frontendRef.current,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
            },
        });
        
        tl.fromTo(
            ".tech-item",
            { opacity: 0, y: 30, scale: 0.8, rotateX: -45 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "back.out(1.7)",
            }
        );
    }, [frontendSection]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                <div className="particles-container absolute inset-0"></div>
                
                {/* Animated grid lines */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                </div>
            </div>

            {/* Navigation */}
            <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-xl py-3 shadow-2xl shadow-primary/10' : 'py-6'}`}>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="#Home" className="group">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Terminal className="text-primary w-6 h-6" />
                                    <Sparkles className="absolute -top-1 -right-1 text-primary/60 w-3 h-3" />
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:via-primary group-hover:to-primary transition-all duration-500">
                                    SurafelK
                                </span>
                                <div className="ml-2 px-2 py-1 bg-primary/10 rounded-lg border border-primary/20">
                                    <Code2 className="w-3 h-3 text-primary" />
                                </div>
                            </div>
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-800">
                            {["Home", "Experience", "Technologies", "Projects", "Contact"].map((text, index) => (
                                <Link
                                    key={index}
                                    href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                                    className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <span className="relative z-10">{text}</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 rounded-full transition-all duration-300 hover:from-primary/10 hover:to-primary/5"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={downloadResume}
                                className="group relative px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Resume
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden relative group"
                            onClick={toogleNavBar}
                        >
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isNavBar ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></div>
                                <div className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isNavBar ? 'opacity-0' : 'opacity-100'}`}></div>
                                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isNavBar ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            {isNavBar && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                >
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-lg"
                        onClick={toogleNavBar}
                    ></div>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25 }}
                        className="absolute top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-800"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center p-6 border-b border-gray-800">
                                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Navigation</span>
                                <button 
                                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                    onClick={toogleNavBar}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <nav className="flex-1 p-6">
                                <ul className="space-y-4">
                                    {["Home", "Experience", "Technologies", "Projects", "Contact"].map((text, index) => (
                                        <li key={index}>
                                            <Link
                                                href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                                                className="flex items-center gap-3 p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all group"
                                                onClick={toogleNavBar}
                                            >
                                                <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <span className="font-medium">{text}</span>
                                                <ChevronUp className="ml-auto transform rotate-90 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="p-6 border-t border-gray-800">
                                <button
                                    onClick={downloadResume}
                                    className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section ref={heroRef} id="Home" className="relative min-h-screen flex items-center pt-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="relative"
                        >
                            {/* Hero Glow Effect */}
                            <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                            
                            <div className="relative">
                                {/* Animated badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800 mb-8 float-element">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-300">Available for opportunities</span>
                                </div>
                                
                                <h1 
                                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                                    id="name"
                                >
                                    <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                                        Surafel
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-secondary via-primary to-white bg-clip-text text-transparent">
                                        Kassahun
                                    </span>
                                </h1>
                                
                                <div className="mb-8">
                                    <p 
                                        className="text-2xl md:text-3xl text-gray-300 mb-3"
                                        id="position"
                                    >
                                        <span className="font-mono text-primary">&lt;</span>
                                        <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Full Stack Developer</span>
                                        <span className="font-mono text-primary">/&gt;</span>
                                    </p>
                                    
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span className="text-lg">Addis Ababa, Ethiopia</span>
                                    </div>
                                </div>
                                
                                <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
                                    Crafting exceptional digital experiences with modern technologies. 
                                    Specializing in scalable web applications, intuitive interfaces, 
                                    and robust backend systems.
                                </p>
                                
                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <button
                                        onClick={downloadResume}
                                        className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            <Download className="w-5 h-5" />
                                            Download Resume
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </button>
                                    
                                    <Link 
                                        href="#contact"
                                        className="group px-8 py-4 border-2 border-gray-700 hover:border-primary rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 hover:bg-gray-800/30"
                                    >
                                        <span>Get In Touch</span>
                                        <ChevronUp className="transform rotate-90 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                
                                {/* Social Links with Hover Effects */}
                                <div className="flex gap-6">
                                    <a 
                                        href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group social-icon"
                                        aria-label="LinkedIn"
                                    >
                                        <div className="relative w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110">
                                            <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-xl transition-colors"></div>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://github.com/SurafelK" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group social-icon"
                                        aria-label="GitHub"
                                    >
                                        <div className="relative w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110">
                                            <Github className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-xl transition-colors"></div>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="mailto:surafelkassahun21@gmail.com"
                                        className="group social-icon"
                                        aria-label="Email"
                                    >
                                        <div className="relative w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110">
                                            <Mail className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-xl transition-colors"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Profile Image with Tech Elements */}
                        <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="relative flex justify-center lg:justify-end"
                            id="pic"
                        >
                            <div className="relative">
                                {/* Floating tech elements */}
                                <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-xl"></div>
                                
                                {/* Tech badges floating around */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl flex items-center justify-center shadow-2xl float-element">
                                    <Terminal className="text-primary w-8 h-8" />
                                </div>
                                
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl flex items-center justify-center shadow-2xl float-element" style={{animationDelay: '0.5s'}}>
                                    <Code className="text-secondary w-8 h-8" />
                                </div>
                                
                                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl flex items-center justify-center shadow-2xl float-element" style={{animationDelay: '1s'}}>
                                    <Cpu className="text-primary w-8 h-8" />
                                </div>
                                
                                {/* Main profile image */}
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary rounded-3xl opacity-30 blur-2xl"></div>
                                    <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl"></div>
                                    <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-1">
                                        <div className="relative w-full h-full overflow-hidden rounded-2xl border border-gray-800">
                                            <Image
                                                src="/Bggggpng.png"
                                                alt="Surafel Kassahun"
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover scale-110"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-2xl border border-primary/20 shadow-[0_0_60px_rgba(59,130,246,0.3)] animate-pulse"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-gray-500">Scroll</span>
                        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-32 relative">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent"></div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Career Journey</span>
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                                Professional
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            My journey through the tech industry, building innovative solutions and growing as a developer.
                        </p>
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
                        
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative mb-20 ${index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'}`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 lg:right-1/2 lg:mr-8' : 'left-0 lg:left-1/2 lg:ml-8'} z-10`}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                                        <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                                    </div>
                                </div>
                                
                                {/* Experience card */}
                                <div className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={40}
                                                        height={40}
                                                        className="w-10 h-10 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-primary font-medium">{item.position}</span>
                                                        <span className="text-gray-500">•</span>
                                                        <span className="text-gray-400">{item.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={`transition-all duration-500 ${cardStates[item.key] ? 'max-h-full' : 'max-h-48 overflow-hidden'}`}>
                                            <ul className="space-y-3">
                                                {item.description.map((desc, idx) => (
                                                    <li key={idx} className="flex items-start group/item">
                                                        <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                                            <div className="w-2 h-2 bg-primary rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                        </div>
                                                        <p className="text-gray-300 leading-relaxed">{desc}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <button
                                            onClick={() => toggleCard(item.key)}
                                            className="mt-6 flex items-center gap-2 text-primary hover:text-white group/btn transition-colors duration-300"
                                        >
                                            <span>{cardStates[item.key] ? 'Show Less' : 'Read More'}</span>
                                            <ChevronUp className={`transform transition-transform duration-300 ${cardStates[item.key] ? 'rotate-180' : ''}`} size={16} />
                                            <div className="w-0 h-px bg-primary group-hover/btn:w-full transition-all duration-300"></div>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section id="technologies" className="py-32 relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Tech Stack</span>
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                                Technologies &
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                                Tools
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Modern tools and technologies I use to bring ideas to life
                        </p>
                    </div>

                    {/* Technology Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["all", "frontend", "backend", "database", "cloud", "utilities"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTechTab(tab)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                                    activeTechTab === tab
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                                        : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Technology Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
                        {filteredTechnologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="tech-item group"
                            >
                                <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 group-hover:border-primary/50 group-hover:bg-gray-900/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center p-4 transform group-hover:scale-110 transition-transform duration-500`}>
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    width={40}
                                                    height={40}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Hover indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                            <span className="text-primary font-semibold tracking-widest text-sm uppercase">My Work</span>
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                                Featured
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A showcase of my recent work, highlighting innovative solutions and modern design
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Project 1 - POS System */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative p-1">
                                    <div className="relative h-64 lg:h-80 overflow-hidden rounded-2xl">
                                        <Image
                                            src="/Hotel.png"
                                            alt="Restaurant POS System"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white">Restaurant POS System</h3>
                                            <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                                        </div>
                                        
                                        <p className="text-gray-400 mb-6">
                                            A comprehensive point-of-sale system built with Electron and MERN stack, featuring real-time inventory management, order processing, and analytics.
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Electron</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">React</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Node.js</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">MongoDB</span>
                                        </div>
                                        
                                        <button
                                            onClick={toggleModal}
                                            className="px-6 py-3 bg-gray-800 hover:bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            View Project Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 2 - AVL System */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative p-1">
                                    <div className="relative h-64 lg:h-80 overflow-hidden rounded-2xl bg-gray-900">
                                        <iframe
                                            src="https://avl-swim.vercel.app/"
                                            className="w-full h-full"
                                            title="AVL System"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white">AVL System</h3>
                                            <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                                        </div>
                                        
                                        <p className="text-gray-400 mb-6">
                                            A modern web application for Araya Venture Lab featuring data visualization, real-time analytics, and an intuitive dashboard interface.
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Next.js</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Tailwind CSS</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">TypeScript</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Framer Motion</span>
                                        </div>
                                        
                                        <button
                                            onClick={() => setIsAVLOpen(true)}
                                            className="px-6 py-3 bg-gray-800 hover:bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            View Project Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 3 - Theraderm */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative p-1">
                                    <div className="relative h-64 lg:h-80 overflow-hidden rounded-2xl bg-gray-900">
                                        <iframe
                                            src="https://www.theradermethiopia.com/"
                                            className="w-full h-full"
                                            title="Theraderm Ethiopia"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white">Theraderm Ethiopia</h3>
                                            <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                                        </div>
                                        
                                        <p className="text-gray-400 mb-6">
                                            Professional medical website with appointment booking system, service catalog, and responsive design for optimal user experience.
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">React</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Tailwind CSS</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Next.js</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Sanity CMS</span>
                                        </div>
                                        
                                        <button
                                            onClick={() => setisTheradermOpen(true)}
                                            className="px-6 py-3 bg-gray-800 hover:bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            View Project Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 4 - ShopBot */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative p-1">
                                    <div className="relative h-64 lg:h-80 overflow-hidden rounded-2xl">
                                        <Image
                                            src="/shop.jpg"
                                            alt="ShopBot E-commerce"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white">ShopBot E-commerce</h3>
                                            <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                                        </div>
                                        
                                        <p className="text-gray-400 mb-6">
                                            Telegram-based shopping bot with integrated payments, location-based delivery, and real-time order tracking.
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Node.js</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">MongoDB</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Telegram API</span>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Santimpay</span>
                                        </div>
                                        
                                        <button
                                            onClick={() => setIsShopBot(true)}
                                            className="px-6 py-3 bg-gray-800 hover:bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            View Project Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* View More Button */}
                    <div className="text-center">
                        <button
                            onClick={toggleProjects}
                            className="group relative px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl font-medium overflow-hidden transition-all duration-500 hover:border-primary"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                {projects ? (
                                    <>
                                        <ChevronUp className="w-5 h-5" />
                                        Show Less Projects
                                    </>
                                ) : (
                                    <>
                                        <Layers className="w-5 h-5" />
                                        View All Projects
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Expanded Projects Section */}
            {projects && (
                <div className="py-20 bg-gray-950/50">
                    <div className="container mx-auto px-4 md:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {/* Additional projects would go here */}
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <Globe className="text-primary w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">E-commerce Platform</h4>
                                <p className="text-gray-400 text-sm">Full-featured online shopping platform with admin dashboard.</p>
                            </div>
                            
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <Smartphone className="text-primary w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Mobile App</h4>
                                <p className="text-gray-400 text-sm">Cross-platform mobile application with React Native.</p>
                            </div>
                            
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <Palette className="text-primary w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Design System</h4>
                                <p className="text-gray-400 text-sm">Component library and design system for large-scale applications.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section id="contact" className="py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                                <span className="text-primary font-semibold tracking-widest text-sm uppercase">Get In Touch</span>
                                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                                    Let&apos;s Build
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                                    Something Amazing
                                </span>
                            </h2>
                            
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Have a project in mind or want to discuss potential opportunities? 
                                I&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
                                    <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                                    
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                                <Mail className="text-primary w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">EMAIL</p>
                                                <a 
                                                    href="mailto:surafelkassahun21@gmail.com" 
                                                    className="text-white hover:text-primary transition-colors text-lg"
                                                >
                                                    surafelkassahun21@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                                <Phone className="text-primary w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">PHONE</p>
                                                <a 
                                                    href="tel:+251963626110" 
                                                    className="text-white hover:text-primary transition-colors text-lg"
                                                >
                                                    +251 963 626 110
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                                <MapPin className="text-primary w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">LOCATION</p>
                                                <p className="text-white text-lg">Addis Ababa, Ethiopia</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Social Links */}
                                    <div className="mt-12 pt-8 border-t border-gray-800">
                                        <p className="text-gray-400 mb-6">Connect with me</p>
                                        <div className="flex gap-4">
                                            <a 
                                                href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            >
                                                <Linkedin className="text-white w-6 h-6" />
                                            </a>
                                            <a 
                                                href="https://github.com/SurafelK" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            >
                                                <Github className="text-white w-6 h-6" />
                                            </a>
                                            <a 
                                                href="https://twitter.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            >
                                                <Twitter className="text-white w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
                                    <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
                                    
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                                                placeholder="Project inquiry"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                            <textarea 
                                                id="message" 
                                                rows="5" 
                                                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                                                placeholder="Tell me about your project..."
                                            ></textarea>
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-800 bg-gray-950">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <Terminal className="text-primary w-6 h-6" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    SurafelK
                                </span>
                            </div>
                            <p className="text-gray-400">Building the future, one line of code at a time.</p>
                        </div>
                        
                        <div className="flex gap-6">
                            <a 
                                href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://github.com/SurafelK" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href="mailto:surafelkassahun21@gmail.com"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Surafel Kassahun. All rights reserved.</p>
                        <p className="mt-2">Made with ❤️ using Next.js & Tailwind CSS</p>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            {/* Restaurant POS Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <Image
                                    src="/Hotel.png"
                                    alt="Restaurant POS System"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Restaurant POS System</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Electron</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">React</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Node.js</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">MongoDB</span>
                                </div>
                                
                                <p className="text-gray-300 mb-6">
                                    A comprehensive point-of-sale system designed specifically for restaurant management, providing an all-in-one solution for order processing, inventory management, and customer relationship management.
                                </p>
                                
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">User authentication with role-based access control</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Intuitive order management interface for dine-in, takeout, and delivery</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Real-time menu management system</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Comprehensive reporting and analytics</span>
                                    </li>
                                </ul>
                                
                                <div className="flex flex-wrap gap-3">
                                    <a 
                                        href="#" 
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        View Project
                                    </a>
                                    <button
                                        onClick={toggleModal}
                                        className="border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* AVL System Modal */}
            {isAVLOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setIsAVLOpen(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <iframe
                                    src="https://avl-swim.vercel.app/"
                                    className="w-full h-full"
                                    title="AVL System"
                                ></iframe>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">AVL System</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Next.js</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">React</span>
                                </div>
                                
                                <p className="text-gray-300 mb-6">
                                    A modern web application developed for Araya Venture Lab, showcasing innovative solutions tailored for efficient data processing and insightful analytics.
                                </p>
                                
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Responsive design for all devices</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Interactive data visualization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">User-friendly interface</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Optimized performance</span>
                                    </li>
                                </ul>
                                
                                <div className="flex flex-wrap gap-3">
                                    <a 
                                        href="https://avl-swim.vercel.app/" 
                                        target="_blank"
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Visit Website
                                    </a>
                                    <button
                                        onClick={() => setIsAVLOpen(false)}
                                        className="border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Theraderm Ethiopia Modal */}
            {isTheradermOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setisTheradermOpen(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <iframe
                                    src="https://www.theradermethiopia.com/"
                                    className="w-full h-full"
                                    title="Theraderm Ethiopia"
                                ></iframe>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Theraderm Ethiopia</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">React</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Next.js</span>
                                </div>
                                
                                <p className="text-gray-300 mb-6">
                                    A professional website developed for Theraderm Ethiopia, providing comprehensive information about their skin care services and treatments.
                                </p>
                                
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Clean, modern design</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Mobile-responsive layout</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Fast loading times</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Easy navigation</span>
                                    </li>
                                </ul>
                                
                                <div className="flex flex-wrap gap-3">
                                    <a 
                                        href="https://www.theradermethiopia.com/" 
                                        target="_blank"
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Visit Website
                                    </a>
                                    <button
                                        onClick={() => setisTheradermOpen(false)}
                                        className="border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ShopBot Modal */}
            {isShopBot && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setIsShopBot(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <Image
                                    src="/shop.jpg"
                                    alt="ShopBot E-commerce Bot"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">ShopBot E-commerce</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Telegram</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Node.js</span>
                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">MongoDB</span>
                                </div>
                                
                                <p className="text-gray-300 mb-6">
                                    A Telegram-based e-commerce bot that enables customers to browse and order products seamlessly within the Telegram platform. Integrated with Gebeta Map API for delivery cost calculation and Santimpay for secure payments.
                                </p>
                                
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Product browsing and cart management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Location-based delivery cost calculation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Secure in-chat payments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-300">Order tracking and management</span>
                                    </li>
                                </ul>
                                
                                <div className="flex flex-wrap gap-3">
                                    <a 
                                        href="https://t.me/tilla_shopbot" 
                                        target="_blank"
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Try ShopBot
                                    </a>
                                    <button
                                        onClick={() => setIsShopBot(false)}
                                        className="border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Popup */}
            {contactUsPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-md w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 p-8">
                        <button
                            onClick={() => setContactUsPopup(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h3>
                        
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="popup-name" className="block text-gray-400 text-sm font-medium mb-1">Name</label>
                                <input 
                                    type="text" 
                                    id="popup-name" 
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="popup-email" className="block text-gray-400 text-sm font-medium mb-1">Email</label>
                                <input 
                                    type="email" 
                                    id="popup-email" 
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="popup-message" className="block text-gray-400 text-sm font-medium mb-1">Message</label>
                                <textarea 
                                    id="popup-message" 
                                    rows="4" 
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}