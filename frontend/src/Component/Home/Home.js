import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "../components/Navbar/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-full bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557683311-eac922347aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBwdXJwbGUlMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
           
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                   AarogyaMitra
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Experience the Future of Health care with AarogyaMitra.Signup today and take control of your Health Journey like never before.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
          
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
          
          </div>
        </div>

        <section className="pb-0 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Assisted Video Conferences</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     Connect with health care proffesional from the comfort of your home, ensuring timely access to expert medical advice
                    </p>
                    <Link
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Try
                </Link>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Personalised Doctor's Appointment</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     Say Good bye to long waiting time and phone calls- with just few clicks, you can schedule appointments with your prefferd consultant
                    </p>
                    <Link
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Book
                </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">End to End Ecrypted Chatbot </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     engage with our intelligent chatboat for instant support and guidence on your health care journey. our chatbot is here to assist you 24/7.
                    </p>
                    <Link
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Chat
                </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-3 font-bold leading-normal">
                  Ensuring your health is our priority.
                </h3>
                <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
                  Let our integrated functions make a good use for your health.
                </p>
                <Link
                 className="bg-blue-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none border-black lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Get started
                </Link>
                
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://imgs.search.brave.com/d2rgd9xe-TwkP2wpOAmuN9klHg3m2ca7ZPZOwpVnV24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXRh/bGRlc2lnbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDQvMTEtV2Vic2l0/ZS1GZWF0dXJlcy1C/bG9nLUdyYXBoaWMt/ODE4eDU5Ni5qcGc"
                    className="w-full align-middle rounded-t-lg"
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            
           
            
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://i.pinimg.com/564x/fa/3b/f1/fa3bf1463710297d6031b522e0baf7ef.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600">
                    <i class="fa-solid fa-car"></i>
                  </div>
                  <h3 className="text-3xl mb-3 font-bold leading-normal">Maps codify the miracle of existence</h3>
                  <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
                  Seamlessly integrates with a state-of-the-art mapping system, enhancing user experience and providing comprehensive location-based services
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here's the developing team</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                 
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                 <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Satvik Shrivastava</h5>
                    <div className="mt-6">
                     <a href="https://www.linkedin.com/in/xatvik/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-5 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                      <button
                        className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-5 mb-1"
                        type="button"
                        onClick={() => window.open('', '_blank')}
                        >
                    
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nipun Dehariya</h5>
                   
                    <div className="mt-6">
                     <a href="https://www.linkedin.com/in/nipundehariya/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-5 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                      <button
                          className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => window.open('https://github.com/NipunDehariya', '_blank')}
                      >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    //src="https://via.placeholder.com/150"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nipun Yadav</h5>
                   
                    <div className="mt-6">
                    <a href="https://www.linkedin.com/in/nipun-yadav-3325b3258/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-5 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                      <button
                        className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => window.open('https://github.com/01Nipun', '_blank')}
                      >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Moulik Sharma</h5>
                  
                    <div className="mt-6">
                    <a href="https://www.linkedin.com/in/moulik-sharma-44b2a7253/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-5 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                     <button
                        className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => window.open('https://github.com/GitHUBman909', '_blank')}
                        >
                      
                        <i class="fa-brands fa-github"></i>
                      </button>
                      
                    
                        
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
           
              
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                 AarogyaMitra 
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  24/7 Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
