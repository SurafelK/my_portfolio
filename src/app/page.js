// Add this at the top of the file to mark it as a client component
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
    // Initialize state
    const [santimPay, setSantimPay] = useState(false);
    const [tilla, seTilla] = useState(false);

    const santimPayHandle = () =>
    {
      setSantimPay(!santimPay)
    }

    const tillaHandle = () =>
      {
        seTilla(!tilla)
      }

    return (
        <>
            <section className="py-5 sticky top-0 bg-gray-800 z-10">
                <nav className="flex justify-center gap-6 bg-gray-800 text-white shadow-md py-4 rounded-lg">
                    <Link 
                        href="/" 
                        className="text-primary relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link 
                        href="/experience" 
                        className="text-primary relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                        Experience
                    </Link>
                    <Link 
                        href="/previous-works" 
                        className="text-primary relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                        Previous Works
                    </Link>
                </nav>
            </section>

            <section className="py-10 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
                                Surafel Kassahun
                            </h1>
                            <p className="text-gray-300 text-sm text-center text-secondary">
                                Fullstack developer based in Ethiopia. Open for both project-based work and collaborations.
                            </p>
                        </div>
                        <div className="relative animate-none">
                            <img 
                                src="/Bggggpng.png" 
                                alt="Background" 
                                className="w-full h-auto rounded-lg shadow-lg" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                    
                  <div className={`bg-white/50 hover:bg-transparent p-4 rounded-md hover:cursor-pointer transition-all ease-in-out shadow-md ${tilla ? "max-h-48":""} `} onPointerEnter={santimPayHandle} onPointerLeave={santimPayHandle} >
                       <div>
                          <div className="flex justify-center items-center max-h-28" > 
                            <img src="/santimpay-logo.png" alt="Santimpay Logo" className="mb-4 w-32 h-auto"/>
                          </div>
                          <div >
                            <h1 className={`text-xl text-center font-semibold mb-2 ${ santimPay ? "text-primary" : "text-black" }`}>Backend Developer Intern</h1>
                          </div>
                       </div>
                      
                        {santimPay && (
                            <p className="text-gray-700 transition-opacity duration-1000 ease-in-out opacity-100">
                                <ul className="list-disc pl-5 space-y-2 text-secondary">
                                    <li>Developed and maintained backend systems using Laravel, ensuring robust, scalable, and secure code.</li>
                                    <li>Utilized MySQL for database management, including designing schemas, writing queries, and optimizing performance.</li>
                                    <li>Employed Postman for API testing and validation, ensuring all endpoints met functional and security requirements.</li>
                                    <li>Collaborated with front-end developers and product managers to integrate backend functionality with user interfaces.</li>
                                    <li>Created and managed various components in Blender for visual data representation and application design.</li>
                                </ul>
                            </p>
                        )}
                    </div>

                    <div className={`bg-white/50 hover:bg-transparent p-4 rounded-md hover:cursor-pointer transition-all ease-in-out shadow-md ${santimPay ? "max-h-48":""} `} onPointerEnter={tillaHandle} onPointerLeave={tillaHandle} >
                       <div>
                          <div className="flex justify-center items-center max-h-28" > 
                            <img src="/Tilla Logo-01.png" alt="Santimpay Logo" className="mb-4 w-32 h-auto"/>
                          </div>
                          <div>
                            <h1 className={`text-xl text-center font-semibold mb-2 ${ tilla ? "text-primary" : "text-black" }`}>Fullstack Developer</h1>
                          </div>
                       </div>
                      
                        {tilla && (
                            <p className="text-gray-700 transition-opacity duration-1000 ease-in-out opacity-100">
                                <ul className="list-disc pl-5 space-y-2 text-secondary">
                                    <li>Developed and maintained responsive, user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), enhancing user experience and engagement.</li>
                                    <li>Implemented complex UI components and features with React.js, ensuring smooth performance and accessibility across various devices and browsers.</li>
                                    <li>Designed and integrated RESTful APIs, leveraging Postman for API testing and documentation to ensure reliable data exchange between frontend and backend services.</li>
                                    <li>Managed state and data flow using Redux and Context API, optimizing performance and user interaction.</li>
                                    <li>Utilized MongoDB and MySQL databases for data storage and retrieval, developing efficient queries and schema designs to meet application requirements.</li>
                                </ul>
                            </p>
                        )}
                    </div>

                </div>
            </section>

            <section className="border border-primary border-y-8">
              <div className="text-center">
                <h1 className="text-primary text-5xl"> Technologies Experienced </h1>
              </div>
              <div className="absolute left-0 p-20">
                <div className=" flex  sm:grid-cols-5 grid-cols-3 gap-6 " >
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/physics.png'} className="w-20 "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Firebase.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/JavaScript.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Laravel.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/MongoDB.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/MySQL.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Node.js.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/PHP.png'} className="w-20 "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Postman.png'} className="w-20 "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Powershell.png'} className="w-20"/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/Tailwind CSS.png'} className="w-20  "/>
                  </div>
                  <div className="hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out " >
                    <img src={'/WordPress.png'} className="w-20  "/>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
}
