"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variables";
import { Github, GithubIcon, Instagram, Linkedin, Mail, Twitter, TwitterIcon } from "lucide-react";

export default function Home() {
    // Initialize state for experience cards
    const [cardStates, setCardStates] = useState({ santimPay: false, tilla: false });
    const [isOpen, setIsOpen] = useState(false);
    const [TheradermDetailDescription, setTheradermDetailDescription] = useState(false)
    const [AvlDetailDescription, setAvlDetailDescription] = useState(false)
    const toggleCard = (key) => {
        setCardStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const [detailDesciption, setDetailDescription] = useState(false)
    const [projects, setProjects] = useState(false)


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const toggleProjects = () =>
    {
      setProjects(!projects)
    }
    const rightQuote = '❛'
    const leftQuote = '❜'

const technologies = [
  { src: "/physics.png", name: "React" },
  { src: "/Firebase.png", name: "Firebase" },
  { src: "/JavaScript.png", name: "JavaScript" },
  { src: "/Laravel.png", name: "Laravel" },
  { src: "/MongoDB.png", name: "MongoDB" },
  { src: "/MySQL.png", name: "MySQL" },
  { src: "/Node.js.png", name: "Node.js" },
  { src: "/PHP.png", name: "PHP" },
  { src: "/Postman.png", name: "Postman" },
  { src: "/Powershell.png", name: "PowerShell" },
  { src: "/Tailwind CSS.png", name: "Tailwind CSS" },
  { src: "/WordPress.png", name: "WordPress" },
  { src: "/NextLo.png", name: "Next.js" },
  { src: "/HTML.jpg", name: "Html 5" },
  { src: "/OIP.jpg", name: "Bootstrap" },
  { src: "/OIP1.jpg", name: "Git" },
  { src: "/elec.jpg", name: "Electron" },
  
];
    const [hoveredTech, setHoveredTech] = useState(null);
    const [isHovered, setIsHovered] = useState(false); // State to track hover status
    const [contactUsPopup, setContactUsPopup] = useState(false)
    const [isTheradermOpen, setisTheradermOpen] = useState(false)

    const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
      <div className="border-b border-zinc-300">
        <button
          className="flex justify-between items-center w-full p-4 transition duration-200 ease-in-out bg-zinc-100 text-primary-foreground hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={onToggle}
        >
          <span className="font-semibold text-lg">{question}</span>
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 bg-card rounded-b-md shadow-md bg-zinc-300">
            <p className="text-sm text-black ">{answer}</p>
          </div>
        )}
      </div>
    );
    

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
    
    return (
        <>
            {/* Navigation */}
            <section className="py-5 sticky top-0 bg-gradient-to-r from-deep-blue to-blue-800 z-10 shadow-lg">
                <nav className="flex justify-center gap-8 text-white shadow-md py-4 rounded-lg">
                    {["Home", "Experience", "Technologies", "Projects"].map((text, index) => (
                        <Link
                            key={index}
                            href={text === "Home" ? "#Home" : `#${text.toLowerCase().replace(" ", "-")}`}
                            className="text-primary relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {text}
                        </Link>
                    ))}
                </nav>
            </section>

            {/* Hero Section */}
            <section id="Home" className={`bg-off-white`}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: "false", amount: 0.7 }}
                            className="text-center md:text-left"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Surafel Kassahun</h1>
                            <p className="text-bright-green text-lg text-gray-400">
                                Fullstack developer based in Ethiopia. Open for both project-based work and collaborations.
                            </p>
                            <div className={`text-gray-500 items-center flex flex-col justify-center align-middle py-10 max-w-xl`}>
                                <p className={`text-5xl text-secondary`}> {rightQuote} </p>
                                <p className="text-pretty text-secondary">
                                    As a passionate Fullstack Developer with a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic and user-friendly web applications. With expertise in frameworks such as React, Angular, and Node.js, I excel in transforming complex requirements into intuitive interfaces while ensuring seamless server-side functionality.
                                    My proficiency in database management, RESTful APIs, and cloud services allows me to build scalable and efficient solutions.
                                    I am committed to staying current with industry trends and best practices,
                                    leveraging my problem-solving skills to deliver high-quality products that enhance user experience and drive business growth.
                                    Collaborative by nature, I thrive in agile environments and enjoy working closely with cross-functional teams to bring innovative ideas to life.
                                </p>
                                <p className={`text-5xl text-secondary`}> {leftQuote} </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: "false", amount: 0.7 }}
                            className="relative animate-fadeIn"
                        >
                            <img
                                src="/Bggggpng.png"
                                alt="Background"
                                className="w-full h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            
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
            <section id="experience" className="flex flex-col justify-center py-20 bg-gray-100 relative">
                  <div className="flex justify-start px-10 md:px-20 lg:px-44 mb-12">
                      <h3 className="text-start text-primary text-5xl font-semibold">Work Experience</h3>
                  </div>
                  <hr className="border-gray-300 mb-10" />

                  {/* Container to hold the experiences */}
                  <div className="container mx-auto max-w-6xl flex flex-col items-center">
                      {/* Experience cards */}
                      <ul className="flex flex-col md:flex-row gap-10 relative">
                          {[
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
                                position: "Jr Developer",
                                description: [
                                    "Developed responsive web applications using the MERN stack.",
                                    "Implemented UI components with React.js.",
                                    "Designed and integrated RESTful APIs.",
                                    "Managed state using Redux and Context API.",
                                    "Utilized MongoDB and MySQL for data storage.",
                                    "Collaborated with designers to enhance user experience and interface design.",
                                    "Conducted code reviews and participated in Agile development processes.",
                                    "Integrated third-party services and APIs for additional functionalities.",
                                    "Wrote unit and integration tests to ensure application reliability.",
                                    "Optimized application performance through code refactoring and profiling.",
                                    "Participated in team meetings and contributed to project planning."
                                ],
                                key: "tilla"
                            }
                            ,
                          ].map((item, index) => (
                              <li key={index} className="relative flex flex-col items-center w-full md:w-1/2">
                                  <motion.div
                                      className={`bg-white p-8 rounded-lg border border-gray-200 shadow-md transition transform hover:-translate-y-2 hover:shadow-xl duration-300 relative cursor-pointer`}
                                      onPointerEnter={() => toggleCard(item.key)}
                                      onPointerLeave={() => toggleCard(item.key)}
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
                                                      <span className="mr-2 text-primary">•</span>
                                                      {desc}
                                                  </motion.li>
                                              ))}
                                          </ul>
                                      )}
                                  </motion.div>

                                  {/* Disc indicator on the horizontal line */}
                                  <div className="w-4 h-4 bg-primary rounded-full absolute -top-8"></div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </section>




            {/* Technologies */}
            
            <section id="technologies" className="py-20 bg-off-white border-t-8 border-bright-green cursor-pointer overflow-hidden">
              <div className="container mx-auto text-center">
                <h1 className="text-primary text-5xl font-bold mb-12 transition-all duration-300 hover:scale-105">
                  Technologies Experienced
                </h1>
                <div
                  className={`flex flex-wrap justify-center ${isHovered ? 'animate-paused' : 'animate-scroll'}`} // Enable wrapping
                >
                  {technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="relative mx-4 mb-8 transition-transform duration-300 transform hover:scale-110" // Add margin-bottom for spacing
                      onMouseEnter={() => {
                        setHoveredTech(tech.name);
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredTech(null);
                        setIsHovered(false);
                      }}
                    >
                      <img
                        src={tech.src}
                        className="w-20 h-20 rounded-full shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl" // Shadow effect on hover
                        onError={(e) => (e.target.src = '/fallback-image.png')}
                      />
                      {hoveredTech === tech.name && (
                        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-md text-sm shadow-lg">
                          {tech.name}
                        </div>
                      )}
                    </motion.div>
                  ))}
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
                      className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 transform ">
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
                          className={`w-full h-auto rounded-lg transition-transform duration-300 transform ${detailDesciption ? 'scale-95' : 'scale-100'}`} // Apply scale effect based on detailDescription
                          alt="Restaurant POS System"
                      />
                      <motion.div
                          variants={fadeIn("up", 0)}
                          initial="hidden"
                          whileInView="show"
                          className={`${detailDesciption ? "hidden" : "flex"} absolute inset-0 flex-col items-center justify-center text-center text-white px-6 py-4 rounded-lg transition-transform transform scale-95 bg-opacity-80`}
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
        {contactUsPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                <div className="max-w-5xl bg-white mx-auto p-8 rounded-lg shadow-lg">
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
