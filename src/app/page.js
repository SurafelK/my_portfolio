"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variables";
import { Award, Building, Calendar, ChevronUp, Cloud, Code, Database, Download, Github, GithubIcon, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Server, Twitter, TwitterIcon, Wrench, X, XCircleIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    // State management
    const [cardStates, setCardStates] = useState({ santimPay: false, tilla: false });
    const [isOpen, setIsOpen] = useState(false);
    const [TheradermDetailDescription, setTheradermDetailDescription] = useState(false);
    const [isAVLOpen, setIsAVLOpen] = useState(false); // Fixed variable name
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

    // Refs
    const frontendRef = useRef(null);
    const backendRef = useRef(null);

    // Data arrays
    const frontend = [
        { src: "/physics.png", name: "React" },
        { src: "/Tailwind CSS.png", name: "Tailwind CSS" },
        { src: "/WordPress.png", name: "WordPress" },
        { src: "/bootstrap.png", name: "Bootstrap" },
        { src: "/electron.png", name: "Electron" },
        { src: "/next.png", name: "Next.js" },
        { src: "/html.png", name: "Html 5" }
    ];

    const cloud = [
        { src: "/Vercel.png", name: "Vercel" },
        { src: "/render.png", name: "Render" },
    ];

    const backend = [
        { src: "/Firebase.png", name: "Firebase" },
        { src: "/JavaScript.png", name: "JavaScript" },
        { src: "/Laravel.png", name: "Laravel" },
        { src: "/node.png", name: "Node.js" },
        { src: "/PHP.png", name: "PHP" },
        { src: "/express.png", name: "Express.js" },
    ];

    const database = [
        { src: "/MongoDB.png", name: "MongoDB" },
        { src: "/MySQL.png", name: "MySQL" },
    ];

    const devUtilities = [
        { src: "/OIP1.jpg", name: "Git" },
        { src: "/Postman.png", name: "Postman" },
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

    const tillaExp = [
        "Led the development and deployment of an e-commerce Telegram bot, aligning with business goals.",
        "Integrated Gebeta Map API for direction calculation and Santimpay for seamless payment processing.",
        "Managed project timelines and resources, ensuring timely delivery and quality assurance.",
        "Developed the bot using the MERN stack (MongoDB, Express, React, Node.js) and optimized performance.",
        "Coordinated with stakeholders, conducted sprint meetings, and provided regular project updates."
    ];

    const backendExperience = [
        "Developed and maintained the backend for a CMS-based website using Laravel, ensuring efficient content management and user experience.",
        "Designed and implemented RESTful APIs to facilitate seamless communication between frontend and backend.",
        "Integrated payment processing features with Santimpay, ensuring secure and smooth financial transactions.",
        "Managed database design and optimization using MySQL for storing user data, transactions, and content efficiently.",
        "Collaborated with frontend developers and UI/UX teams to ensure backend functionality aligned with design requirements and project goals."
    ];

    const items = [
        { question: 'What are the main responsibilities of a Full-Stack Developer?', answer: 'Full-Stack Developers are responsible for both front-end and back-end development, designing user interfaces, managing databases, and ensuring seamless integration between client-side and server-side components.' },
        { question: 'Which technologies are commonly used by Full-Stack Developers?', answer: 'Full-Stack Developers typically use HTML, CSS, and JavaScript for front-end development, along with frameworks like React or Angular. For back-end, they often work with Node.js, Express, Python, Ruby on Rails, or PHP, and databases such as MongoDB, MySQL, or PostgreSQL.' },
        { question: 'How important is it for a Full-Stack Developer to understand both front-end and back-end?', answer: 'It is crucial for a Full-Stack Developer to have a solid understanding of both front-end and back-end technologies, as it enables them to build complete applications, troubleshoot issues, and communicate effectively with the team.' },
        { question: 'What skills are essential for a Full-Stack Developer?', answer: 'Essential skills for a Full-Stack Developer include proficiency in programming languages (like JavaScript, Python, or Ruby), familiarity with web development frameworks, database management, version control (like Git), and strong problem-solving abilities.' },
        { question: 'What is the difference between a Full-Stack Developer and a Software Engineer?', answer: 'A Full-Stack Developer specializes in both front-end and back-end development of web applications, while a Software Engineer may focus on broader software development principles and can work on various types of software projects beyond web applications.' },
    ];

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
        link.download = 'surafelKassahunResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // GSAP animations
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
        tl.fromTo("#pic", 
            { opacity: 0, scale: 0.8, y: 20 }, 
            { opacity: 1, scale: 1, y: 0, duration: 0.6 }
        )
        .fromTo("#name", 
            { opacity: 0, x: -200, letterSpacing: "-2px" }, 
            { opacity: 1, x: 0, letterSpacing: "0px", duration: 0.5 }, 
            "+=0.2"
        )
        .fromTo("#position", 
            { opacity: 0, x: -200, letterSpacing: "-2px" }, 
            { opacity: 1, x: 0, letterSpacing: "0px", duration: 0.7 }
        )
        .fromTo("#location", 
            { opacity: 0, x: -200, letterSpacing: "-2px" }, 
            { opacity: 1, x: 0, letterSpacing: "0px", duration: 0.7 }
        )
        .fromTo(".quote", 
            { opacity: 0, x: -200, letterSpacing: "-2px" }, 
            { opacity: 1, x: 0, letterSpacing: "0px", duration: 1, stagger: 0.3 }
        )
        .fromTo("#defination", 
            { opacity: 0, x: -200, letterSpacing: "-2px" },
            { opacity: 1, x: 0, letterSpacing: "0px", duration: 1 }
        );
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
            ".frontend-item",
            { opacity: 0, y: 20, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
            }
        );
    }, [frontendSection]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: backendRef.current,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
            },
        });
    
        tl.fromTo(
            ".backend-item",
            { opacity: 0, y: 30, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
            }
        );
    }, [backendSection]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Constants
    const rightQuote = '❛';
    const leftQuote = '❜';
    const tgBot = '/shop.jpg';

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
            {/* Navigation */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-xl' : 'py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link href="#Home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                            Surafel K.
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {["Home", "Experience", "Technologies", "Projects"].map((text, index) => (
                                <Link
                                    key={index}
                                    href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                                    className="text-white hover:text-primary transition-colors duration-200 relative group"
                                >
                                    {text}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden text-white focus:outline-none"
                            onClick={toogleNavBar}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            {isNavBar && (
                <div className="fixed inset-0 z-40">
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={toogleNavBar}
                    ></div>
                    <div className="absolute top-0 left-0 h-full w-3/4 max-w-xs bg-gray-900/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center p-4 border-b border-gray-800">
                            <span className="text-xl font-bold text-primary">Menu</span>
                            <button 
                                className="text-gray-400 hover:text-white"
                                onClick={toogleNavBar}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="p-4">
                            <ul className="space-y-4">
                                {["Home", "Experience", "Technologies", "Projects"].map((text, index) => (
                                    <li key={index}>
                                        <Link
                                            href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                                            className="block py-2 px-4 text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                                            onClick={toogleNavBar}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section id="Home" className="pt-32 pb-20 md:min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-center md:text-left"
                        >
                            <h1 
                                className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                                id="name"
                            >
                                Surafel Kassahun
                            </h1>
                            
                            <p 
                                className="text-lg md:text-xl mb-6 text-gray-300"
                                id="position"
                            >
                                Full Stack Web Developer
                            </p>
                            
                            <div className="flex justify-center md:justify-start items-center mb-8">
                                <MapPin className="text-primary mr-2" />
                                <span className="text-gray-400" id="location">Addis Ababa, Ethiopia</span>
                            </div>
                            
                            <div className="mb-12 max-w-xl mx-auto md:mx-0">
                                <div className="relative">
                                    <span className="absolute -left-6 -top-4 text-4xl text-primary opacity-70">{rightQuote}</span>
                                    <p 
                                        className="text-lg text-gray-300 leading-relaxed italic pl-4"
                                        id="defination"
                                    >
                                        Specialized in MERN Stack and modern web development, I build high-performance, scalable applications using cutting-edge technologies. Passionate about crafting seamless user experiences and efficient backend systems.
                                    </p>
                                    <span className="absolute -right-6 -bottom-4 text-4xl text-primary opacity-70">{leftQuote}</span>
                                </div>
                            </div>

                            {/* Contact Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={downloadResume}
                                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30"
                                >
                                    <Download size={18} />
                                    Download Resume
                                </button>
                                
                                <Link 
                                    href="#contact"
                                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all duration-300"
                                >
                                    Contact Me
                                </Link>
                            </div>
                            
                            {/* Social Links */}
                            <div className="flex justify-center md:justify-start gap-4 mt-8">
                                <a 
                                    href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a 
                                    href="https://github.com/SurafelK" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a 
                                    href="mailto:surafelkassahun21@gmail.com"
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail size={24} />
                                </a>
                                <a 
                                    href="tel:+251963626110"
                                    className="text-gray-400 hover:text-green-500 transition-colors"
                                    aria-label="Phone"
                                >
                                    <Phone size={24} />
                                </a>
                            </div>
                        </motion.div>
                        
                        {/* Profile Image */}
                        <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="relative flex justify-center"
                            id="pic"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                                <Image
                                    src="/Bggggpng.png"
                                    alt="Surafel Kassahun"
                                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-gray-800/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Work Experience</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    </div>

                    {/* Desktop Experience */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                            {/* Timeline */}
                            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2"></div>
                            
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
                                    variants={fadeIn("up", 0.3 * index)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 lg:-right-3' : 'left-0 lg:-left-3'} w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10`}>
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>
                                    
                                    <div className={`bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:border-primary ${cardStates[item.key] ? 'h-auto' : 'h-64 overflow-hidden'}`}>
                                        <div className="flex items-center mb-4">
                                            <Image 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-16 h-16 object-contain mr-4"
                                            />
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                                <p className="text-sm text-gray-400">{item.date}</p>
                                            </div>
                                        </div>
                                        
                                        {!cardStates[item.key] && (
                                            <div className="h-40 overflow-hidden relative">
                                                <p className="text-gray-300 mb-4">{item.description[0]}</p>
                                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                            </div>
                                        )}
                                        
                                        {cardStates[item.key] && (
                                            <ul className="space-y-2 mb-4">
                                                {item.description.map((desc, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-primary mr-2">•</span>
                                                        <span className="text-gray-300">{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        
                                        <button
                                            onClick={() => toggleCard(item.key)}
                                            className="mt-4 flex items-center justify-center gap-2 text-primary hover:text-white hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-300 w-full"
                                        >
                                            {cardStates[item.key] ? (
                                                <>
                                                    Show Less <ChevronUp size={16} />
                                                </>
                                            ) : (
                                                "Show More"
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Experience */}
                    <div className="md:hidden space-y-8">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.2 * index)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700"
                            >
                                <div className="flex items-center mb-4">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-16 h-16 object-contain mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.date}</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-2 mb-4">
                                    {item.description.slice(0, 3).map((desc, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span className="text-gray-300">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button
                                    onClick={() => toggleCard(item.key)}
                                    className="mt-4 flex items-center justify-center gap-2 text-primary hover:text-white hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-300 w-full"
                                >
                                    {cardStates[item.key] ? (
                                        <>
                                            Show Less <ChevronUp size={16} />
                                        </>
                                    ) : (
                                        "Show More"
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Technical Skills</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Technologies Ive worked with to create amazing digital experiences</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
                        {/* Frontend */}
                        <div 
                            ref={frontendRef}
                            onMouseEnter={() => setFrontendSection(true)}
                            onMouseLeave={() => setFrontendSection(false)}
                            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Code className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Frontend</h3>
                            </div>
                            <div className="space-y-3">
                                {frontend.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="frontend-item flex items-center opacity-0"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image 
                                            src={tech.src} 
                                            alt={tech.name} 
                                            className="w-6 h-6 object-contain mr-3"
                                        />
                                        <span className="text-gray-300 text-sm">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div 
                            ref={backendRef}
                            onMouseEnter={() => setBackendSection(true)}
                            onMouseLeave={() => setBackendSection(false)}
                            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Server className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Backend</h3>
                            </div>
                            <div className="space-y-3">
                                {backend.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="backend-item flex items-center opacity-0"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image 
                                            src={tech.src} 
                                            alt={tech.name} 
                                            className="w-6 h-6 object-contain mr-3"
                                        />
                                        <span className="text-gray-300 text-sm">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Database */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <Database className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Database</h3>
                            </div>
                            <div className="space-y-3">
                                {database.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image 
                                            src={tech.src} 
                                            alt={tech.name} 
                                            className="w-6 h-6 object-contain mr-3"
                                        />
                                        <span className="text-gray-300 text-sm">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Cloud */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <Cloud className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Cloud</h3>
                            </div>
                            <div className="space-y-3">
                                {cloud.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image 
                                            src={tech.src} 
                                            alt={tech.name} 
                                            className="w-6 h-6 object-contain mr-3"
                                        />
                                        <span className="text-gray-300 text-sm">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Utilities */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <Wrench className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-white">Utilities</h3>
                            </div>
                            <div className="space-y-3">
                                {devUtilities.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image 
                                            src={tech.src} 
                                            alt={tech.name} 
                                            className="w-6 h-6 object-contain mr-3"
                                        />
                                        <span className="text-gray-300 text-sm">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Some of my recent work that Im proud of</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/Hotel.png"
                                    alt="Restaurant POS System"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Restaurant POS System</h3>
                                    <p className="text-gray-300 text-sm mb-4">Electron, MongoDB, Express, React, Node.js</p>
                                    <button
                                        onClick={toggleModal}
                                        className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Restaurant POS System</h3>
                                <p className="text-gray-300 text-sm">A comprehensive point-of-sale system for restaurant management.</p>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <iframe
                                    src="https://avl-swim.vercel.app/"
                                    className="w-full h-full"
                                    title="AVL System"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">AVL System</h3>
                                    <p className="text-gray-300 text-sm mb-4">Next.js, Tailwind CSS, React</p>
                                    <button
                                        onClick={() => setIsAVLOpen(true)}
                                        className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">AVL System</h3>
                                <p className="text-gray-300 text-sm">A modern web application for Araya Venture Lab.</p>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <iframe
                                    src="https://www.theradermethiopia.com/"
                                    className="w-full h-full"
                                    title="Theraderm Ethiopia"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Theraderm Ethiopia</h3>
                                    <p className="text-gray-300 text-sm mb-4">React, Tailwind CSS, Next.js</p>
                                    <button
                                        onClick={() => setisTheradermOpen(true)}
                                        className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Theraderm Ethiopia</h3>
                                <p className="text-gray-300 text-sm">A professional website for Theraderm Ethiopia.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={toggleProjects}
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30"
                        >
                            {projects ? 'Show Less' : 'View All Projects'}
                        </button>
                    </div>
                </div>
            </section>

            {/* Expanded Projects View */}
            {projects && (
                <div className="py-12 bg-gray-800/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Additional Project 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={tgBot}
                                        alt="ShopBot E-commerce Bot"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">ShopBot</h3>
                                        <p className="text-gray-300 text-sm mb-4">Telegram, Node.js, MongoDB</p>
                                        <button
                                            onClick={() => setIsShopBot(true)}
                                            className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">ShopBot E-commerce</h3>
                                    <p className="text-gray-300 text-sm">A Telegram-based e-commerce solution.</p>
                                </div>
                            </motion.div>

                            {/* Additional Project 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                                    <Code className="text-white opacity-20" size={120} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">More Projects</h3>
                                        <p className="text-gray-300 text-sm mb-4">Various technologies and frameworks</p>
                                        <button
                                            onClick={() => setContactUsPopup(true)}
                                            className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                                        >
                                            Contact for Details
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Other Projects</h3>
                                    <p className="text-gray-300 text-sm">Various applications and websites Ive developed.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities?</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="text-primary mr-4 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-gray-400 text-sm font-medium">EMAIL</h4>
                                        <a href="mailto:surafelkassahun21@gmail.com" className="text-white hover:text-primary transition-colors">surafelkassahun21@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <Phone className="text-primary mr-4 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-gray-400 text-sm font-medium">PHONE</h4>
                                        <a href="tel:+251963626110" className="text-white hover:text-primary transition-colors">+251 963 626 110</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <MapPin className="text-primary mr-4 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-gray-400 text-sm font-medium">LOCATION</h4>
                                        <p className="text-white">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h4 className="text-gray-400 text-sm font-medium mb-4">CONNECT WITH ME</h4>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                    <a 
                                        href="https://github.com/SurafelK" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github size={24} />
                                    </a>
                                    <a 
                                        href="https://twitter.com/yourusername" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <Twitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-1">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-1">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        rows="5" 
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Hello, Id like to talk about..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-primary/30"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-primary">Surafel Kassahun</h3>
                            <p className="text-gray-400 text-sm">Full Stack Web Developer</p>
                        </div>
                        
                        <div className="flex space-x-6">
                            <a 
                                href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://github.com/SurafelK" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href="mailto:surafelkassahun21@gmail.com"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Surafel Kassahun. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            {/* Restaurant POS Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <Image
                                    src="/Hotel.png"
                                    alt="Restaurant POS System"
                                    className="w-full h-full object-cover"
                                />
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
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setIsAVLOpen(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 transition-colors"
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
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setisTheradermOpen(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 transition-colors"
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
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setIsShopBot(false)}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-96 lg:h-auto">
                                <Image
                                    src={tgBot}
                                    alt="ShopBot E-commerce Bot"
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
                    <div className="relative max-w-md w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 p-8">
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
                                    placeholder="Hello, Id like to talk about..."
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