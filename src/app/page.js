"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variables";

export default function Home() {
    // Initialize state for experience cards
    const [cardStates, setCardStates] = useState({ santimPay: false, tilla: false });
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = (key) => {
        setCardStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const [detailDesciption, setDetailDescription] = useState(false)
    const [projects, setProjects] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

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

    return (
        <>
            {/* Navigation */}
            <section className="py-5 sticky top-0 bg-gradient-to-r from-deep-blue to-blue-800 z-10 shadow-lg">
                <nav className="flex justify-center gap-8 text-white shadow-md py-4 rounded-lg">
                    {["Home", "Experience", "Previous Works"].map((text, index) => (
                        <Link
                            key={index}
                            href={text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`}
                            className="text-primary relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {text}
                        </Link>
                    ))}
                </nav>
            </section>

            {/* Hero Section */}
            <section className={`bg-off-white`}>
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
                                <p className={`text-5xl text-secondary`}>P</p>
                                <p className="text-pretty text-secondary">
                                    As a passionate Fullstack Developer with a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic and user-friendly web applications. With expertise in frameworks such as React, Angular, and Node.js, I excel in transforming complex requirements into intuitive interfaces while ensuring seamless server-side functionality.
                                    My proficiency in database management, RESTful APIs, and cloud services allows me to build scalable and efficient solutions.
                                    I am committed to staying current with industry trends and best practices,
                                    leveraging my problem-solving skills to deliver high-quality products that enhance user experience and drive business growth.
                                    Collaborative by nature, I thrive in agile environments and enjoy working closely with cross-functional teams to bring innovative ideas to life.
                                </p>
                                <p className={`text-5xl text-secondary`}>P</p>
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

            {/* Experience Cards */}
            <section className="py-20">
                <motion.div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            image: "/santimpay-logo.png",
                            title: "Backend Developer Intern",
                            description: [
                                "Developed and maintained backend systems using Laravel.",
                                "Utilized MySQL for database management.",
                                "Employed Postman for API testing and validation.",
                                "Collaborated with front-end developers and product managers.",
                                "Created and managed components in Blender."
                            ],
                            key: "santimPay"
                        },
                        {
                            image: "/Tilla Logo-01.png",
                            title: "Fullstack Developer",
                            description: [
                                "Developed responsive web applications using the MERN stack.",
                                "Implemented UI components with React.js.",
                                "Designed and integrated RESTful APIs.",
                                "Managed state using Redux and Context API.",
                                "Utilized MongoDB and MySQL for data storage."
                            ],
                            key: "tilla"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white p-6 rounded-lg border transition transform hover:-translate-y-2 hover:shadow-lg ${cardStates[item.key] ? "max-h-96" : "max-h-56"} cursor-pointer`}
                            onPointerEnter={() => toggleCard(item.key)}
                            onPointerLeave={() => toggleCard(item.key)}
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: "true", amount: 0.7 }}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <img src={item.image} alt={`${item.title} Logo`} className="w-32 h-auto" />
                            </div>
                            <h1 className={`text-xl text-center font-bold mb-3 ${cardStates[item.key] ? "text-primary" : "text-black"}`}>
                                {item.title}
                            </h1>
                            {cardStates[item.key] && (
                                <ul className="list-disc pl-5 text-gray-800 text-sm transition-opacity duration-700">
                                    {item.description.map((desc, idx) => (
                                        <motion.li key={idx} variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"}>
                                            {desc}
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Technologies */}
            
            <section className="py-20 bg-off-white border-t-8 border-bright-green cursor-pointer overflow-hidden">
              <div className="container mx-auto text-center">
                <h1 className="text-primary text-5xl font-bold mb-12">Technologies Experienced</h1>
                <div className={`flex flex-nowrap w-full ${isHovered ? 'animate-paused' : 'animate-scroll'}`}>
                  {technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="relative mx-4" // Add margin for spacing between icons
                      onMouseEnter={() => {
                        setHoveredTech(tech.name); // Set hovered technology
                        setIsHovered(true); // Set hover state
                      }}
                      onMouseLeave={() => {
                        setHoveredTech(null); // Reset on leave
                        setIsHovered(false); // Reset hover state
                      }}
                    >
                      <img 
                        src={tech.src} 
                        className="w-20 h-20 rounded-full shadow-lg  bg-white bg-cover" 
                        onError={(e) => (e.target.src = '/fallback-image.png')} 
                      />
                      {hoveredTech === tech.name && (
                        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md text-sm">
                          {tech.name}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-50%); } // Adjusted to -50% for partial exit
                }

                .animate-scroll {
                  animation: scroll 15s linear infinite;
                }

                .animate-paused {
                  animation: scroll 15s linear infinite;
                  animation-play-state: paused; // Pause animation on hover
                }
              `}</style>
            </section>

            <div className="w-full bg-gradient-to-r from-blue-900 to-blue-950 py-16">
                <div className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-5xl font-bold text-white px-6 md:px-32 mb-4 drop-shadow-lg transition-transform transform hover:scale-105 hover:underline">
                    Explore More <span className="text-primary">Projects</span>
                  </h1>
                  <p className="w-80 text-xl text-gray-200 italic p-6 bg-blue-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700">
                    The only way to do great work is to love what you do. — Steve Jobs
                  </p>
                  <div className="mt-8 flex space-x-4">
                    <button 
                      onClick={() => setProjects(true)}
                      className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                      View All Projects
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition duration-200 transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

                  {/* Projects */}
         { projects && (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
             <div className="relative group transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg">
               <img 
                 src="/Hotel.png" 
                 className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 cursor-pointer" 
                 alt="Restaurant POS System" 
                 onClick={toggleModal} // Toggle modal on click
               />
               <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"></div>
               <motion.div
                variants={fadeIn("up", 0)} initial="hidden" whileInView={"show"}
                 className="hidden group-hover:flex absolute inset-0 flex-col items-center justify-center text-center text-white px-4 py-4 rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
               >
                 <span className="text-lg font-bold mb-2">
                   Restaurant POS System
                 </span>
                 <span className="text-sm mb-4">
                   A desktop application built using Electron, MongoDB, Express, React, and Node.js to streamline restaurant operations. Key features include user authentication with role-based access, an intuitive order management interface for dine-in, takeout, and delivery, and a menu management system for easy item updates.
                 </span>
                 <button 
                   className="mt-4 bg-white text-black px-5 py-2 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-200"
                   onClick={toggleModal}
                 >
                   Learn More
                 </button>
               </motion.div>
             </div>
           </div>
         ) }


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
                                      <strong>Menu Management System:</strong> A robust menu management system allows restaurant owners and managers to easily update menu items, prices, and descriptions in real-time. This feature ensures that customers always have access to the latest offerings and helps in adjusting the menu based on availability or seasonal changes. The system supports easy addition and removal of items, making it flexible to the restaurant's needs.
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
                          x
                      </button>
                  </div>
              </div>
          )}

        </>
    );
}
