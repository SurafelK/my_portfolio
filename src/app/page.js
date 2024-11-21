"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variables";
import { Award, Building, Calendar, ChevronUp, Cloud, Code, Database, Download, Github, GithubIcon, Instagram, Linkedin, Mail, MapPin, Menu, Server, Twitter, TwitterIcon, Wrench, X, XCircleIcon } from "lucide-react";

export default function Home() {
    // Initialize state for experience cards
    const [cardStates, setCardStates] = useState({ santimPay: false, tilla: false });
    const [isOpen, setIsOpen] = useState(false);
    const [TheradermDetailDescription, setTheradermDetailDescription] = useState(false)
    const [AvlDetailDescription, setAvlDetailDescription] = useState(false)
    const [ tillaShopDescription, setTillaShopDescription ] = useState(false)
    const toggleCard = (key) => {
        setCardStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    const tgBot = '/shop.jpg'

    const [detailDescription, setDetailDescription] = useState(false)
    const [projects, setProjects] = useState(false)


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleProjects = () =>
    {
      setProjects(!projects)
    }
    const rightQuote = '❛'
    const leftQuote = '❜';

    const [frontendSection, setFrontendSection] = useState(false)

    const frontend = [
      { src: "/physics.png", name: "React" },
      { src: "/Tailwind CSS.png", name: "Tailwind CSS" },
      { src: "/WordPress.png", name: "WordPress" },
      { src: "/bootstrap.png", name: "Bootstrap" },
      { src: "/electron.png", name: "Electron" },
      { src: "/next.png", name: "Next.js" },
      { src: "/html.png", name: "Html 5" }
    ]

    const cloud = [
      { src: "/Vercel.png", name: "Vercel" },
      { src: "/render.png", name: "Render" },
    ]

    const backend = [
      { src: "/Firebase.png", name: "Firebase" },
      { src: "/JavaScript.png", name: "JavaScript" },
      { src: "/Laravel.png", name: "Laravel" },
      { src: "/node.png", name: "Node.js" },
      { src: "/PHP.png", name: "PHP" },
      { src: "/express.png", name: "Express.js" },
     
    ]

    const database = [
      { src: "/MongoDB.png", name: "MongoDB" },
      { src: "/MySQL.png", name: "MySQL" },
    ]

    const devUtilities = [
      { src: "/OIP1.jpg", name: "Git" },
      { src: "/Postman.png", name: "Postman" },
    ]



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
,
]

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


    const [hoveredTech, setHoveredTech] = useState(null);
    const [isHovered, setIsHovered] = useState(false); // State to track hover status
    const [contactUsPopup, setContactUsPopup] = useState(false)
    const [isTheradermOpen, setisTheradermOpen] = useState(false)
    const [isShopBot, setIsShopBot] = useState(false)
    const [isNavBar, setIsNavBar] = useState(false)

    const toogleNavBar = () =>
    {
      setIsNavBar(!isNavBar)
    }

    const downloadResume = () =>
    {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = '/surafelKassahunResume.pdf'; // Set the URL of the resume
      link.download = 'surafelKassahunResume.pdf'; // Set the name for the downloaded file
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link from the document
    }
    

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const [isAVlOpen, setisAVlOpen] = useState(false)
  
    const items = [
      { question: 'What are the main responsibilities of a Full-Stack Developer?', answer: 'Full-Stack Developers are responsible for both front-end and back-end development, designing user interfaces, managing databases, and ensuring seamless integration between client-side and server-side components.' },
      { question: 'Which technologies are commonly used by Full-Stack Developers?', answer: 'Full-Stack Developers typically use HTML, CSS, and JavaScript for front-end development, along with frameworks like React or Angular. For back-end, they often work with Node.js, Express, Python, Ruby on Rails, or PHP, and databases such as MongoDB, MySQL, or PostgreSQL.' },
      { question: 'How important is it for a Full-Stack Developer to understand both front-end and back-end?', answer: 'It is crucial for a Full-Stack Developer to have a solid understanding of both front-end and back-end technologies, as it enables them to build complete applications, troubleshoot issues, and communicate effectively with the team.' },
      { question: 'What skills are essential for a Full-Stack Developer?', answer: 'Essential skills for a Full-Stack Developer include proficiency in programming languages (like JavaScript, Python, or Ruby), familiarity with web development frameworks, database management, version control (like Git), and strong problem-solving abilities.' },
      { question: 'What is the difference between a Full-Stack Developer and a Software Engineer?', answer: 'A Full-Stack Developer specializes in both front-end and back-end development of web applications, while a Software Engineer may focus on broader software development principles and can work on various types of software projects beyond web applications.' },
    ];
    
    const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change 50 to the scroll position you want
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Navigation */}
            <section className={`py-5 sticky hidden md:block ${isScrolled ? 'md:bg-gray-200/25 md:px-0 px-20 rounded-3xl mt-5 top-5' : 'top-5'} z-10 shadow-lg`}>
                <nav className="flex justify-center gap-4 md:gap-8 text-white py-4 rounded-lg">
                    {["Home", "Experience", "Technologies", "Projects"].map((text, index) => (
                        <Link
                            key={index}
                            href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                            className={`text-primary ${isScrolled ? "font-bold hover:bg-slate-400 px-3 md:px-5 py-2 rounded-xl hover:text-white underline-offset-4": ""} relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            {text}
                        </Link>
                    ))}
                </nav>
            </section>



            {/* Movile Nav Bar */}

            <div  className={`py-5 sticky block md:hidden ${isScrolled ? ' bg-slate-600/25 px-20 rounded-3xl mt-5 top-5' : 'top-5'} z-10 shadow-lg`}>
              {/* Hamburger Icon */}
              {  
                !isNavBar && (    <button
                  onClick={toogleNavBar}
                  className="p-2 text-white  rounded-md"
                >
                  <Menu className="text-primary text-lg cursor-pointer" onClick={ toogleNavBar } />
                </button>)
              }

      {/* Mobile Nav Bar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-400/75 z-50 transform ${
          isNavBar ? 'translate-x-0' : '-translate-x-full'
        } duration-300 ease-in-out`}
      >
      <div className="py-4 border-b bg-gray-200/50  shadow-lg " >
          {/* Close Button */}
          <button
            onClick={toogleNavBar}
            className="p-2 text-black bg-red-500 rounded-md m-4 "
          >
            <X/>
        </button>
      </div>

        {/* Nav Links */}
      <ul className="flex flex-col items-start p-4 space-y-4">
        {["Home", "Experience", "Technologies", "Projects"].map((text, index) => (
          <div
            key={index} // Place the key here
            className="border-b w-full p-2 hover:bg-black rounded-md hover:p-5 hover:scale-110 hover:text-white"
          >
            <Link
              href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsNavBar(false)}
              className={`${
                isScrolled
                  ? "font-bold px-3 md:px-5 py-2 rounded-none underline-offset-4"
                  : ""
              } relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {text}
            </Link>
          </div>
        ))}
      </ul>

      </div>

      {/* Background Overlay */}
          {isNavBar && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toogleNavBar}
            ></div>
          )}
        </div>
            {/* Hero Section */}
            <section id="Home" className={`bg-off-white animate-fadeIn md:h-screen `}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: "false", amount: 0.7 }}
                            className="text-center md:text-left"
                        >
                            <h1 className="mb-3 text-primary font-bold text-5xl text-center md:text-6xl">Surafel Kassahun</h1>
                            <p className="text-bright-green text-lg capitalize text-gray-400 text-center mb-4">
                                Full Stack Web Developer
                            </p>
                            <div className="flex md:justify-center justify-center text-center">
                                <h3 className="text-gray-200 flex gap-2 mt-2 text-center">
                                    Addis Ababa, Ethiopia <MapPin size={24} color="currentColor" />
                                </h3>
                            </div>
                            <div className={`text-gray-500 items-center flex flex-col justify-center align-middle py-10 max-w-xl`}>
                                <p className={`text-6xl text-secondary`}> {rightQuote} </p>
                                <p className="text-pretty text-secondary text-center text-lg">
                                    Specialized in MERN Stack and modern web development, I build high-performance, scalable applications using cutting-edge technologies. Passionate about crafting seamless user experiences and efficient backend systems.
                                </p>
                                <p className={`text-6xl text-secondary`}> {leftQuote} </p>
                            </div>

                            {/* Contact Me */}
                            <div className="flex flex-col justify-center align-middle items-center">
                                <div className="flex justify-center">
                                    <h4 className="font-semibold text-lg mb-4 text-primary">Follow Me</h4>
                                </div>

                                <div className="flex flex-col justify-center items-center space-y-4">
                                    <div className="flex space-x-4">
                                        <ul className="flex space-x-4">
                                            <li>
                                                <a
                                                    href="https://www.linkedin.com/in/surafel-kassahun-92a048298"
                                                    className="hover:text-secondary transition duration-200"
                                                    aria-label="LinkedIn"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Linkedin className="w-10 h-10 hover:text-blue-800 text-white transition-transform transform hover:scale-110" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://github.com/SurafelK"
                                                    className="hover:text-secondary transition duration-200"
                                                    aria-label="GitHub"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <GithubIcon className="w-10 h-10 text-white transition-transform hover:text-black transform hover:scale-110" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="mailto:surafelkassahun21@gmail.com"
                                                    className="hover:text-secondary transition duration-200"
                                                    aria-label="Email"
                                                >
                                                    <Mail className="w-10 h-10 text-white hover:text-red-600 transition-transform transform hover:scale-110" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <button
                                            className="border-2 border-white text-white flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-primary hover:border-black hover:text-black transition duration-200 ease-in-out transform hover:scale-105"
                                            aria-label="Download Resume"
                                            onClick={ downloadResume}
                                        >
                                            <Download className="w-5 h-5" />
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                        <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: "false", amount: 0.7 }}
                            className="relative animate-fadeIn shadow-lg overflow-hidden"
                            style={{ aspectRatio: '1 / 1' }}
                        >
                            <img
                                src="/Bggggpng.png"
                                alt="Background image showcasing portfolio"
                                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                style={{ clipPath: 'circle(50%)' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education */}
            {/* <section className="flex flex-col justify-center items-center mb-20 gap-10" >
              <div className="bg-zinc-800/50 backdrop-blur-md p-20 text-secondary border border-zinc-700 rounded-lg space-y-4 max-w-2xl">
              <h3 className="text-start text-primary text-5xl font-semibold">Education</h3>
              <p className="text-lg text-sm">
                I hold a Bachelor&apos;s degree from Arbaminch University, where I was honored to be on the Dean&apos;s List. This recognition reflects my dedication to academic excellence and my commitment to achieving the highest standards in my studies.
              </p>

              </div>
            </section> */}
            
               {/* FAQ */}
               {/* <div className="max-w-md flex justify-center mb-5">
                <div className="border border-zinc-300 rounded-lg shadow-md flex flex-col items-center">
                  {items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      onToggle={() => toggleItem(index)}
                    />
                  ))}
                </div>
              </div> */}


            {/* Experience Cards */}
            <section id="experience" className="flex flex-col justify-center py-20 bg-gray-100 relative hidden md:block ">
                  <div className="flex justify-start px-10 md:px-20 lg:px-44 mb-12">
                      <h3 className="text-start text-primary text-5xl font-semibold">Work Experience</h3>
                  </div>
                  <hr className="border-gray-300 mb-10" />

                  {/* Container to hold the experiences */}
                  <div className="container mx-auto max-w-6xl flex flex-col items-center">
                      {/* Experience cards */}
                      <ul className="flex flex-col md:flex-row gap-10 relative">
                         { experience.map((item, index) => (
                              <li key={index} className="relative flex flex-col items-center w-full md:w-1/2">
                                  <motion.div
                                      className={`bg-white p-8 rounded-lg border border-gray-200 shadow-md transition transform hover:-translate-y-2 hover:shadow-xl duration-300 relative cursor-pointer`}
                                     
                                      variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }}
                                  >
                                      <div className="flex justify-center items-center mb-6">
                                          <img src={item.image} alt={`${item.title} Logo`} className="w-28 h-auto" />
                                      </div>
                                      <h1 className={`text-2xl text-center font-semibold mb-2 ${cardStates[item.key] ? "text-primary" : "text-gray-800"}`}>
                                          {item.title}
                                      </h1>
                                      <h1 className={`text-xs text-center font-light text-zinc-400 mb-2 ${cardStates[item.key] ? "text-primary" : "text-gray-800"}`}>
                                          {item.date}
                                      </h1>
                                      
                                      {cardStates[item.key] && (
                                          <ul className="list-disc pl-5 text-gray-700 text-sm transition-opacity duration-700">
                                              {item.description.map((desc, idx) => (
                                                  <motion.li key={idx} variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} className="flex items-center mb-2">
                                                     <li>  {desc} </li>
                                                  </motion.li>
                                              ))}
                                          </ul>
                                      )}

                                   { cardStates[item.key] && (  <div className="mt-5 flex justify-center" onClick={() => toggleCard(item.key)}> 
                                     <button className="bg-primary flex justify-center w-52 py-2 px-5 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-opacity-80 hover:shadow-lg">
                                        close <ChevronUp />
                                    </button> </div>)  }

                                    { !cardStates[item.key] && (  
                                        <div className="mt-5 flex justify-center" onClick={() => toggleCard(item.key)}>  
                                            <button className="bg-primary justify-center w-52 py-2 px-5 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-opacity-80 hover:shadow-lg">
                                                See more
                                            </button> 
                                        </div>
                                    )}  
                                  </motion.div>

                                  {/* Disc indicator on the horizontal line */}
                                  <div className="w-4 h-4 bg-primary rounded-full absolute -top-8"></div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </section>
              
              {/* Movile view Experience */}
              <div id="experience" className="flex flex-col max-h-screen justify-center items-center my-20 w-full md:hidden">
  
                  <div>
                    <h1 className="text-white text-3xl font-semibold">Work Experience</h1>
                  </div>

                  <div className="  bg-gray-800 max-w-5xl max-h-screen px-10 py-5 rounded-lg shadow-md">
                    <div className="flex justify-center" >
                      <h2 className="text-primary flex gap-4 capitalize font-bold">
                        <Award /> Project Manager - Full Stack Web Developer
                      </h2>
                    </div>

                    <div className="gap-5 text-xs text-gray-500 flex justify-center">
                      <div className="flex gap-2">
                        <div>
                          <Building size={20} />
                        </div>
                        <div className="flex justify-center items-center">
                          <h3 className="font-semibold">Tilla Africa</h3>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div>
                          <Calendar />
                        </div>
                        <div className="flex justify-center items-center">
                          <h3>Sep 2023 - Present</h3>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm mt-5" >
                      <ul className="gap-2 space-y-2 list-disc" >
            

                        { tillaExp.map((item, index) => (
                            <motion.li
                             key={index}
                              className="text-gray-300"
                              variants={fadeIn("left", 0.2)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: "false", amount: 0.7 }}
                          
                              >{item}</motion.li>
                        )) }

                        <motion.div>
                        { tillaExp.map((item, index) => (
                            <li
                             key={index}
                              className="text-gray-300"

                              >{item}</li>
                        )) }
                        </motion.div>
                        
                      </ul>
                    </div>
                  </div>

                </div>

                <div id="experience" className="flex flex-col max-h-screen justify-center items-center my-20 w-full md:hidden">
                  <div className="bg-gray-800 max-w-5xl max-h-screen px-10 py-5 rounded-lg shadow-md">
                   <div className="flex justify-center" >
                    <h2 className="text-primary flex gap-4 capitalize font-bold">
                        <Award /> Internship - Backend Developer
                      </h2>
                   </div>

                    <div className="gap-5 text-xs text-gray-500 mt-2 flex justify-center">
                      <div className="flex gap-2">
                        <div>
                          <Building size={20} />
                        </div>
                        <div className="flex justify-center items-center">
                          <h3 className="font-semibold">Santimpay Financial Solutions</h3>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div>
                          <Calendar />
                        </div>
                        <div className="flex justify-center items-center">
                          <h3>Jul 2023 - Mar 2024 </h3>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm mt-5" >
                      <ul className="gap-2 space-y-2 list-disc" >
            

                        { backendExperience.map((item, index) => (
                            <motion.li
                             key={index}
                              className="text-gray-300"
                              variants={fadeIn("left", 0.2)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: "false", amount: 0.7 }}
                          
                              >{item}</motion.li>
                        )) }

                        <motion.div>
                        { tillaExp.map((item, index) => (
                            <li
                             key={index}
                              className="text-gray-300"

                              >{item}</li>
                        )) }
                        </motion.div>
                        
                      </ul>
                    </div>
                  </div>

                </div>





            {/* Technologies */}
            
            <section id="technologies" className="py-20 bg-off-white border-t-8 border-bright-green cursor-pointer overflow-hidden">
              <div className="container mx-auto text-center max-w-screen-lg">
                <h1 className="text-white text-4xl font-bold mb-12 transition-all duration-300 hover:scale-105 capitalize">
                  Technical skills
                </h1>
                
                <div className={`grid md:grid-cols-5 grid-cols-2 gap-6`}  >
                  {/* frontend */}
                  <div onMouseEnter={ () => {setFrontendSection(true)} } >
                    <div className={`flex border-b-2 max-w-28 pb-2 mb-5 ${ frontend ? "scale-150" : "  "}`}>
                      <h2 className="text-white capitalize flex gap-2 text-base"><Code size={20} className="text-gray-400" /> frontend</h2>
                    </div>
                    <div>
                      {frontend.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
                          className="flex text-xs mb-2"
                        >
                          <motion.h2 variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }} className="text-white hover:text-primary hover:underline underline-offset-4 hover: hover:p-2 hover:scale-150 capitalize flex items-center gap-2">
                            <img src={item.src} alt={item.name || "icon"} className="h-4 w-4 object-contain" />
                            <span>{item.name}</span>
                          </motion.h2>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* Backend */}
                  <div onMouseEnter={ () => {setFrontendSection(true)} } >
                    <div className={`flex border-b-2 max-w-28 pb-2 mb-5 ${ frontend ? "scale-150" : "  "}`}>
                      <h2 className="text-white capitalize flex gap-2 text-base"><Server size={20} className="text-gray-400" /> backend</h2>
                    </div>
                    <div>
                      {backend.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
                          className="flex text-xs mb-2"
                        >
                          <motion.h2 variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }} className="text-white hover:text-primary hover:underline underline-offset-4 hover: hover:p-2 hover:scale-150 capitalize flex items-center gap-2">
                            <img src={item.src} alt={item.name || "icon"} className="h-4 w-4 object-contain" />
                            <span>{item.name}</span>
                          </motion.h2>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div onMouseEnter={ () => {setFrontendSection(true)} } >
                    <div className={`flex border-b-2 max-w-28 pb-2 mb-5 ${ frontend ? "scale-150" : "  "}`}>
                      <h2 className="text-white capitalize flex gap-2 text-base"><Database size={20} className="text-gray-400" /> Databases</h2>
                    </div>
                    <div>
                      {database.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
                          className="flex text-xs mb-2"
                        >
                          <motion.h2 variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }} className="text-white hover:text-primary hover:underline underline-offset-4 hover: hover:p-2 hover:scale-150 capitalize flex items-center gap-2">
                            <img src={item.src} alt={item.name || "icon"} className="h-4 w-4 object-contain" />
                            <span>{item.name}</span>
                          </motion.h2>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dev Utilities */}
                  <div onMouseEnter={ () => {setFrontendSection(true)} } >
                    <div className={`flex border-b-2 max-w-28 pb-2 mb-5 ${ frontend ? "scale-150" : "  "}`}>
                      <h2 className="text-white capitalize flex gap-2 text-base"><Wrench size={20} className="text-gray-400" /> Utilities</h2>
                    </div>
                    <div>
                      {devUtilities.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
                          className="flex text-xs mb-2"
                        >
                          <motion.h2 variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }} className="text-white hover:text-primary hover:underline underline-offset-4 hover: hover:p-2 hover:scale-150 capitalize flex items-center gap-2">
                            <img src={item.src} alt={item.name || "icon"} className="h-4 w-4 object-contain" />
                            <span>{item.name}</span>
                          </motion.h2>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Cloud */}
                  <div onMouseEnter={ () => {setFrontendSection(true)} } >
                    <div className={`flex border-b-2 max-w-28 pb-2 mb-5 ${ frontend ? "scale-150" : "  "}`}>
                      <h2 className="text-white capitalize flex gap-2 text-base"><Cloud size={20} className="text-gray-400" /> Cloud</h2>
                    </div>
                    <div>
                      {cloud.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
                          className="flex text-xs mb-2"
                        >
                          <motion.h2 variants={fadeIn("up", 0.5)}
                                      initial="hidden"
                                      whileInView={"show"}
                                      viewport={{ once: "true", amount: 0.7 }} className="text-white hover:text-primary hover:underline underline-offset-4 hover: hover:p-2 hover:scale-150 capitalize flex items-center gap-2">
                            <img src={item.src} alt={item.name || "icon"} className="h-4 w-4 object-contain" />
                            <span>{item.name}</span>
                          </motion.h2>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* eXPLORE MORE */}
            <div id="projects" className="w-full bg-gradient-to-r from-blue-900 to-blue-950 py-16">
                <div className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-5xl font-bold text-white px-6 md:px-32 mb-4 drop-shadow-lg transition-transform transform">
                    Explore More <span className="text-primary">Projects</span>
                  </h1>
                  <p className="w-80 text-xl text-gray-200 italic p-6 bg-blue-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:cursor-pointer hover:bg-blue-700">
                    {rightQuote}{rightQuote} The only way to do great work is to love what you do.{leftQuote}{leftQuote} — Steve Jobs
                  </p>
                  <div className="mt-8 flex space-x-4">
                    <button 
                      onClick={toggleProjects}
                      className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 transform "
                      aria-label="View all projects"
                    >
                      View All Projects
                    </button>
                    <button 
                    className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition duration-200 transform hover:scale-105"
                    onClick={() => setContactUsPopup(true)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

                  {/* Projects */}
                  {projects && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
    {/* Project 1 */}
    <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl">
      <img
        src="/Hotel.png"
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 cursor-pointer"
        alt="Restaurant POS System"
        onClick={toggleModal}
      />
      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"></div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
      >
        <span className="text-xl font-bold mb-2">Restaurant POS System</span>
        <span className="text-sm mb-4">
          A desktop application built using Electron, MongoDB, Express, React, and Node.js to streamline restaurant operations. Key features include user authentication with role-based access, an intuitive order management interface for dine-in, takeout, and delivery, and a menu management system for easy item updates.
        </span>
        <button
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-500 transition-colors duration-200 transform hover:scale-105"
          onClick={toggleModal}
        >
          Learn More
        </button>
      </motion.div>
    </div>

    {/* Project 2 */}
    <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl">
      <iframe
        src="https://avl-swim.vercel.app/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded Website"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"></div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
      >
        <span className="text-xl font-bold mb-2">AVL</span>
        <span className="text-sm mb-4">
          AVL is a project developed for Araya Venture Lab, showcasing innovative solutions tailored for efficient data processing and insightful analytics.
        </span>
        <button
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-500 transition-colors duration-200 transform hover:scale-105"
          onClick={() => setisAVlOpen(true)}
        >
          Learn More
        </button>
      </motion.div>
    </div>

    {/* Project 3 */}
    <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl">
      <iframe
        src="https://www.theradermethiopia.com/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded Website"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"></div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
      >
        <span className="text-xl font-bold mb-2">Theraderm Ethiopia</span>
        <span className="text-sm mb-4">
          A landing page developed for Tilla Africa, providing an engaging web presence.
        </span>
        <button
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-500 transition-colors duration-200 transform hover:scale-105"
          onClick={() => setisTheradermOpen(true)}
        >
          Learn More
        </button>
      </motion.div>
    </div>

    {/* Project 4 */}
    <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl">
          <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-800">
            <img
              src={tgBot}
            
              title="Embedded Website"
              className={`w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform ${
                tillaShopDescription ? 'scale-80' : 'scale-100'
              }`}
              alt="ShopBot E-commerce Bot"
            />
            <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"></div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
            >
              <span className="text-xl font-bold mb-2">Tilla Shop</span>
              <span className="text-sm mb-4">
                ShopBot - Telegram E-commerce Solution
              </span>
              <button
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-500 transition-colors duration-200 transform hover:scale-105"
                onClick={() => setIsShopBot(true)}
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
)}





          {/* Modal for Enlarged Image */}
          {isOpen && (
              <div
                  className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
                  role="dialog"
                  aria-modal="true"
                  onKeyDown={(e) => e.key === 'Escape' && toggleModal()} // Close on Esc key
                  onMouseEnter={() => setDetailDescription(false)} // Show details on hover
                  onMouseLeave={() => setDetailDescription(true)} // Hide details on mouse leave
              >
                  <div className="relative w-3/4 md:w-1/2 lg:w-10/12">
                      <img
                          src="/Hotel.png" // Consider passing this as a prop
                          className={`w-full h-auto rounded-lg transition-transform duration-300 transform ${detailDescription ? 'scale-95' : 'scale-100'}`} // Apply scale effect based on detailDescription
                          alt="Restaurant POS System"
                      />
                      <motion.div
                          variants={fadeIn("up", 0)}
                          initial="hidden"
                          whileInView="show"
                          className={`${detailDescription ? "hidden" : "flex"} absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 bg-opacity-80`}
                          style={{ background: "rgba(0, 0, 0, 0.7)" }} // Darker background for better contrast
                      >
                          <span className="text-xl font-bold mb-2">Restaurant POS System</span>
                          <span className="text-sm mb-4">
                              This desktop application is developed using a modern technology stack that includes <strong>Electron</strong>, <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node.js</strong>. It is designed to streamline and enhance the operations of restaurants, making it easier for staff to manage various aspects of the business efficiently.
                              <br /><br />
                              <strong>Key Features:</strong>
                              <ul className="list-disc pl-5 text-left">
                                  <li>
                                      <strong>User Authentication with Role-Based Access:</strong> The application includes a secure user authentication system that allows restaurant staff to log in with unique credentials. Role-based access control ensures that different users (such as administrators, managers, and staff) have access to specific features and information based on their roles, enhancing security and managing permissions effectively.
                                  </li>
                                  <li>
                                      <strong>Intuitive Order Management Interface:</strong> The application provides an easy-to-navigate interface for managing orders. Staff can quickly process orders for dine-in customers, takeout, and delivery, ensuring a smooth workflow and minimizing wait times. The order management system is designed to be user-friendly, allowing staff to focus on customer service rather than navigating complex software.
                                  </li>
                                  <li>
                                      <strong>Menu Management System:</strong> A robust menu management system allows restaurant owners and managers to easily update menu items, prices, and descriptions in real-time. This feature ensures that customers always have access to the latest offerings and helps in adjusting the menu based on availability or seasonal changes. The system supports easy addition and removal of items, making it flexible to the restaurants needs.
                                  </li>
                              </ul>
                              <br />
                              By leveraging the power of Electron for cross-platform compatibility and a combination of modern web technologies (MongoDB, Express, React, Node.js), this desktop application provides a comprehensive solution for restaurant operations. It aims to improve efficiency, enhance customer satisfaction, and simplify the daily tasks of restaurant staff.
                          </span>

                          <button 
                              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-200"
                              onClick={toggleModal} // Trigger action for learning more
                          >
                              Learn More
                          </button>
                      </motion.div>
                      <button
                          className="absolute top-4 right-4 text-white text-2xl bg-red-500 rounded-full p-2 hover:bg-red-700 transition duration-200 shadow-md"
                          onClick={toggleModal} // Close modal on click
                          aria-label="Close modal"
                      >
                          &times;
                      </button>
                  </div>
              </div>
          )}

        {/* AVL Popup */}
        {isAVlOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => e.key === 'Escape' && setisAVlOpen(false)} // Close on Esc key
          onMouseEnter={() => setAvlDetailDescription(true)} // Show details on hover
          onMouseLeave={() => setAvlDetailDescription(false)} // Hide details on mouse leave
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 h-[90%] bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
            <iframe
              src="https://avl-swim.vercel.app/" // Replace with the URL you want to display
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Embedded Website"
              className="rounded-t-lg"
            />

            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              className={`${
                AvlDetailDescription ? "hidden" : "flex"
              } absolute inset-0 flex-col items-center justify-center text-center text-white p-4`}
              style={{ background: "rgba(0, 0, 0, 0.7)" }} // Darker background for better contrast
            >
              <div className="max-w-full h-[50%] p-4 rounded-lg shadow-lg  overflow-hidden">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center text-white">AVL System</h1>
                <p className="text-sm md:text-base mb-2 text-gray-200">
                  The <strong className="text-blue-400">AVL System</strong> is a comprehensive web-based application designed to facilitate efficient management between teachers and students. Developed using a modern technology stack, including 
                  <strong className="text-blue-400"> Electron</strong>, 
                  <strong className="text-blue-400"> MongoDB</strong>, 
                  <strong className="text-blue-400"> Express</strong>, 
                  <strong className="text-blue-400"> React</strong>, and 
                  <strong className="text-blue-400"> Node.js</strong>, this application provides an innovative solution to streamline academic processes.
                </p>
                <h2 className="text-sm md:text-base font-semibold mb-2 text-gray-300">Key Features:</h2>
                <ul className="list-disc pl-5 text-gray-200 mb-2 text-sm md:text-base">
                  {[
                    "User Authentication with Role-Based Access: A secure system allowing staff to log in with unique credentials. Role-based access control enhances security by managing permissions effectively.",
                    "Dynamic Content Management: Enables real-time updates of menu items, prices, and descriptions, ensuring customers access the latest offerings.",
                    "Customer Feedback System: Collects customer feedback and reviews, allowing the restaurant to improve services and enhance customer satisfaction.",
                    "Promotions and Discounts Management: Allows staff to create and manage promotional campaigns and discounts, helping to boost sales and customer engagement.",
                    "Detailed Sales Reporting: Generates comprehensive sales reports to analyze performance and identify trends for better decision-making.",
                    "Mobile-Friendly Interface: Offers a responsive design for seamless access on tablets and smartphones, improving usability for staff on the go.",
                    "Cloud Backup and Data Security: Ensures that data is securely backed up to the cloud, minimizing the risk of data loss and ensuring business continuity."
                  ].map((feature, index) => (
                    <li key={index} className="mb-1">
                      <strong className="text-blue-400">{feature.split(":")[0]}:</strong> {feature.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <button
              className="absolute top-4 right-4 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700 transition duration-200 shadow-md transform hover:scale-110"
              onClick={() => setisAVlOpen(false)} // Close modal on click
              aria-label="Close modal"
            >
              &times;
            </button>

            <button
              className="absolute top-4 left-4 text-white text-2xl bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition duration-200 shadow-md transform hover:scale-110"
              onClick={() => window.open("https://avl-swim.vercel.app/", "_blank")} // Open link in a new tab
              aria-label="Visit AVL System"
            >
              Visit
            </button>
          </div>
        </div>
      )}

        {isTheradermOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
            role="dialog"
            aria-modal="true"
            onKeyDown={(e) => e.key === 'Escape' && setisTheradermOpen(false)} // Close on Esc key
            onMouseEnter={() => setTheradermDetailDescription(true)} // Show details on hover
            onMouseLeave={() => setTheradermDetailDescription(false)} // Hide details on mouse leave
          >
            <div className="relative w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 h-[90%] bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
              <iframe
                src="https://www.theradermethiopia.com/" // Replace with the URL you want to display
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Embedded Website"
                className="rounded-t-lg"
              />

              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView="show"
                className={`${
                  TheradermDetailDescription ? "hidden" : "flex"
                } absolute inset-0 flex-col items-center justify-center text-center text-white p-4`}
                style={{ background: "rgba(0, 0, 0, 0.7)" }} // Darker background for better contrast
              >
                <div className="max-w-full h-[50%] p-4 rounded-lg shadow-lg overflow-hidden">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center text-white">Theraderm Ethiopia</h1>
                  <p className="text-sm md:text-base mb-2 text-gray-200">
                    The <strong className="text-blue-400">Theraderm Ethiopia</strong> project is designed to provide comprehensive skin care solutions, highlighting various treatments and services offered by Theraderm. This platform serves as a user-friendly interface for potential clients seeking quality skin care services.
                  </p>
                  <h2 className="text-sm md:text-base font-semibold mb-2 text-gray-300">Key Features:</h2>
                 <div className="flex flex-col justify-center items-center" >
                  <ul className="list-disc pl-5 text-gray-200 mb-2 text-sm md:text-base">
                    {[
                      "User-Friendly Interface: Designed to ensure ease of navigation for users looking for skin care services.",
                      "Responsive Design: Optimized for mobile devices to provide accessibility to clients on the go.",
                     
                    ].map((feature, index) => (
                      <li key={index} className="mb-1">
                        <strong className="text-blue-400">{feature.split(":")[0]}:</strong> {feature.split(":")[1]}
                      </li>
                    ))}
                  </ul>
                 </div>
                </div>
              </motion.div>

              <button
                className="absolute top-4 right-4 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700 transition duration-200 shadow-md transform hover:scale-110"
                onClick={() => setisTheradermOpen(false)} // Close modal on click
                aria-label="Close modal"
              >
                &times;
              </button>

              <button
                className="absolute top-4 left-4 text-white text-2xl bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition duration-200 shadow-md transform hover:scale-110"
                onClick={() => window.open("https://www.theradermethiopia.com/", "_blank")} // Open link in a new tab
                aria-label="Visit Theraderm Ethiopia"
              >
                Visit
              </button>
            </div>
          </div>
        )}

{isShopBot && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
    role="dialog"
    aria-modal="true"
    onKeyDown={(e) => e.key === 'Escape' && setAvlDetailDescription(false)} // Close on Esc key
    onMouseEnter={() => setTillaShopDescription(false)} // Show details on hover
    onMouseLeave={() => setTillaShopDescription(true)} // Hide details on mouse leave
  >
    <div className="relative w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Image Section */}
      <img
        src={tgBot} // Consider passing this as a prop
        className={`w-lvh max-h-lvh rounded-lg shadow-lg transition-transform duration-300 transform ${
          tillaShopDescription ? 'scale-70' : 'scale-100'
        }`}
        alt="ShopBot E-commerce Bot"
      />

      {/* Overlay with description */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className={`${
          tillaShopDescription ? "hidden" : "flex"
        } absolute inset-0 flex-col items-center justify-center text-center text-white p-6`}
        style={{ background: "rgba(0, 0, 0, 0.8)" }}
      >
        <span className="text-2xl font-bold mb-3">ShopBot E-commerce Bot</span>
        <span className="text-sm md:text-base mb-6 leading-relaxed">
          I developed <strong>ShopBot</strong>, a Telegram-based e-commerce bot that enables customers to browse and order products seamlessly within the Telegram platform. Users can easily select products, add them to their cart, and choose their preferred delivery location. The bot uses the <strong>Gebeta Map API</strong> to calculate delivery costs based on the distance from our store, ensuring accurate pricing for each order.
          <br /><br />
          Integrated with <strong>Santimpay</strong> for secure, in-chat payment processing, ShopBot simplifies the purchasing process without leaving Telegram. Built with the <strong>MERN stack</strong>, ShopBot offers a smooth user experience while optimizing order management.
          <br /><br />
          <strong>Key Features:</strong>
       <div className=" flex flex-col justify-center items-center  " >
       <ul className="list-disc">
            <li>Browse products and add to cart directly on Telegram</li>
            <li>Location-based delivery cost calculation</li>
            <li>Secure payments via Santimpay</li>
            <li>Full-stack development using the MERN stack</li>
          </ul>
       </div>
          <br />
         
          Try it out here: <a href="https://t.me/tilla_shopbot" target="_blank" className="text-blue-400 underline">Visit shop</a>
        </span>
        <a
          className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-black transition-colors duration-200"
         href="https://t.me/tilla_shopbot"
         target="_blank"
         
        >
          Visit Shop
        </a>
      </motion.div>

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700 transition duration-200 shadow-md"
        onClick={ ()=> setIsShopBot(false) }
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  </div>
)}

        {contactUsPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                <div className="min-w-96 bg-white mx-auto p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>
                  <form>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium  text-primary">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 placeholder-input text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary transition duration-200"
                        />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-primary">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 placeholder-input text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary transition duration-200"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-primary">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-3 placeholder-input bg-input border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary transition duration-200 text-black"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/80 transition-colors duration-300"
                    >
                      Send
                    </button>
                  </form>
                  <button
                    className="absolute top-4 right-4 text-white text-2xl bg-red-500 rounded-full p-2 hover:bg-red-700 transition duration-200 shadow-md"
                    onClick={() => setContactUsPopup(false)} // Close modal on click
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}

           

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-8 mt-10">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: About Me */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-primary">About Me</h4>
                      <p className="text-sm">
                        I am a passionate developer with a knack for creating intuitive and dynamic user experiences. Lets work together!
                      </p>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-primary">Services</h4>
                      <ul className="text-sm">
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Web Development</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">UI/UX Design</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Mobile App Development</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">SEO Optimization</a></li>
                      </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-primary">Contact Me</h4>
                      <ul className="text-sm">
                        <li className="mb-2">Email: <a href="mailto:your-email@example.com" className="hover:text-gray-400">surafelkassahun21@gmail.com</a></li>
                        <li className="mb-2">
                          Phone: <a href="tel:+251963626110" className="hover:text-gray-400">+251 963 626 110</a>
                        </li>

                        <li className="mb-2">Location: Addis Ababa, Ethiopia</li>
                      </ul>
                    </div>

                    {/* Column 4: Follow Me */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-primary">Follow Me</h4>
                      <ul className="flex space-x-4">
                        <li>
                          <a 
                            href="https://www.linkedin.com/in/surafel-kassahun-92a048298" 
                            className="hover:text-secondary" 
                            aria-label="LinkedIn"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://github.com/SurafelK" 
                            className="hover:text-secondary" 
                            aria-label="GitHub" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <GithubIcon className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="mailto:surafelkassahun21@gmail.com" 
                            className="hover:text-secondary" 
                            aria-label="Email"
                          >
                            <Mail className="w-6 h-6" />
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                  <p>© 2024 Surafel Kassahun. All rights reserved.</p>
                </div>
              </footer>
        </>
    );
}

