
import { Link, NavLink } from "react-router-dom"; // Use react-router-dom for Link/NavLink
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaMapMarkedAlt, // Added for Geography icon
  FaHistory, // Added for History icon
} from "react-icons/fa";
import { motion } from "framer-motion";
// import NavBar from "./NavBar"; // NavBar is commented out as it's not defined
import { homeSidebarItems, user } from "~/constants";
import { cn } from "~/lib/utils";

// Helper component for the Footer
const Footer = () => (
  <footer className="bg-green-700 text-white py-10 text-center">
    <div className="flex justify-center space-x-6 mb-6 text-2xl">
      <FaInstagram className="hover:text-green-300 cursor-pointer transition" />
      <FaFacebookF className="hover:text-green-300 cursor-pointer transition" />
      <FaTwitter className="hover:text-green-300 cursor-pointer transition" />
      <FaYoutube className="hover:text-green-300 cursor-pointer transition" />
    </div>
    <p className="text-sm text-green-100">
      © {new Date().getFullYear()} Visit Kembata. All rights reserved.
    </p>
  </footer>
);

// NOTE: The Blog Post Data and related components (BlogPost, BlogPostCard) are kept but not used
// in the main export function, as the request focused on the "About Us" section.

export default function Blog() {
  function hanldeLogout(event: React.MouseEvent<HTMLButtonElement>): void {
    // implement logout behavior here
    console.log("Logout clicked");
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Header (Top Navigation) - Retained */}
      <section className="hidden lg:block my-2">
        <header className="hidden lg:block fixed top-0 left-0 right-0 w-full bg-white shadow z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/assets/images/Visit-kembata-logo.jpg"
                  alt="Visit Kembata"
                  className="w-10 h-10 object-cover rounded" />
                <span className="text-lg font-bold text-green-700">
                  VISIT KEMBATA
                </span>
              </Link>

              {/* Center: horizontal nav links (no social icons) */}
              <nav
                aria-label="Main navigation"
                className="flex gap-4 items-center"
              >
                {/* @ts-ignore */}
                {homeSidebarItems?.map(({ id, href, icon, label }) => (
                  <NavLink
                    key={id}
                    to={href}
                    className="inline-flex items-center"
                  >
                    {({ isActive }: { isActive: boolean; }) => (
                      <div
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded transition",
                          {
                            "bg-green-400 !text-white": isActive,
                            "text-gray-700 hover:bg-green-400": !isActive,
                          }
                        )}
                      >
                        <img
                          src={icon}
                          alt={label}
                          className={`group-hover:brightness-0 size-5 group-hover:invert w-5 h-5 object-contain ${isActive ? "brightness-0 invert" : "text-green-500"}`} />
                        <span className="hidden md:inline-block font-medium">
                          {label}
                        </span>
                      </div>
                    )}
                  </NavLink>
                ))}
              </nav>

             
              {/* Right: compact user block */}
              <div className="flex items-center gap-3">
                <img
                  src={(user as any)?.imageUrl ?? "/assets/images/david.webp"}
                  alt={user?.name ?? "User"}
                  className="w-9 h-9 rounded-full object-cover"
                  referrerPolicy="no-referrer" />
                <button
                  onClick={hanldeLogout}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Hero Header - Retained */}
      <header className="bg-green-200 p-6 m-6 text-black py-16 text-center shadow-lg rounded-2xl mt-16 lg:mt-24">
        <h1 className="text-5xl font-extrabold mb-3 text-green-800">
          DISCOVER KEMBATA
        </h1>
        <p className="text-lg opacity-90 max-w-3xl mx-auto text-black">
          Welcome to Visit Kembata, your guide to exploring the beauty and
          culture of Kembata! We showcase the region’s breathtaking landscapes,
          rich traditions, and warm hospitality. Our mission is to promote local
          tourism and connect visitors with authentic experiences. Discover
          Kembata’s hidden gems and make memories that last a lifetime.
        </p>
      </header>

      {/* Kembata Information Section - RESTRUCTURED AND RESTYLED */}
      <section className="py-12 bg-gray-50 text-gray-800 px-4 md:px-8">
        {/* Map Image and Title - Retained (Slightly Styled) */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark-100 mb-2 font-figtree">
            Kembata Tembaro Zone
          </h2>
          <p className="text-lg  mb-8 text-gray-500 font-semibold">
            The heart of cultural pride, resilience, and natural beauty in
            Southern Ethiopia.
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4  max-w-4xl mx-auto">
            <a
              href="https://www.google.com/maps/place/Kembata+Tembaro+Zone"
              target="_blank"
            >
              <img
                src="/public/assets/images/kem_map.jpg"
                alt="Map of Kembata Tembaro Zone"
                className="w-full max-h-96 object-cover rounded-lg bg-white" />
            </a>
          </div>
          <div className="text-center">
            {/* <img src="/images/kembata-tembaro-zone.jpg" alt="Kembata Tembaro Zone" className="rounded-lg shadow-lg w-full h-auto mb-3"> */}
            <a
              href="https://www.google.com/maps/place/Kembata+Tembaro+Zone"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: History, Culture, and People */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white border border-green-300 p-8 rounded-3xl shadow-2xl hover:shadow-green-400/50 transition-all duration-500"
          >
            <div className="flex items-center mb-4 text-green-700">
              <FaHistory className="text-4xl mr-3" />
              <h3 className="text-3xl font-extrabold">History & Culture</h3>
            </div>
            <div className="space-y-4 text-left text-gray-700">
              <p>
                Kembata Tembaro Zone was established in the 1990s following
                Ethiopia’s federal restructuring. Historically, the Kembata and
                Tembaro people share common linguistic and cultural roots,
                belonging to the larger Kambaata language group.
              </p>
              <p>
                The people are known for their rich cultural traditions,
                hospitality, and colorful celebrations. The Kembata language
                is widely spoken, and local festivals like{" "}
                <span className="font-semibold text-green-600">Maasala</span>{" "}
                are central to community life, recognized by UNESCO as an
                intangible cultural heritage.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Geography, Location, and Economy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white border border-green-300 p-8 rounded-3xl shadow-2xl hover:shadow-green-400/50 transition-all duration-500"
          >
            <div className="flex items-center mb-4 text-green-700">
              <FaMapMarkedAlt className="text-4xl mr-3" />
              <h3 className="text-3xl font-extrabold">Geography & Economy</h3>
            </div>
            <div className="space-y-4 text-left text-gray-700">
              <p>
                The zone is located in the central-southern part of Ethiopia.
                Its administrative capital is Durame, which acts as the
                economic, political, and educational center. The area features
                fertile soils, mild climate, and a mix of highland and midland
                terrains.
              </p>
              <p>
                Agriculture is the backbone of the economy, focusing on
                essential crops like enset (false banana), maize, and barley. In
                recent years, trade, small industries, and education have seen
                significant growth, driving development and modernization.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Places and Culture - Retained and Restyled */}
        <h2 className="text-4xl font-extrabold text-green-700 mb-10 mt-16 text-center border-b-4 border-green-500/50 pb-2 max-w-2xl mx-auto">
          Must-Visit Destinations
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ajora */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-2">Ajora</h3>
            <p className="text-gray-700">
              Famous for its twin waterfalls and peaceful lakeside views, Ajora
              is a perfect spot for nature lovers and campers seeking
              tranquility and adventure.
            </p>
          </motion.div>

         
          {/* Hambericho */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Hambericho
            </h3>
            <p className="text-gray-700">
              Known as the “Roof of Kembata,” Hambericho Mountain offers
              incredible hiking trails, panoramic views, and spiritual
              significance for locals.
            </p>
          </motion.div>

          {/* Maasala */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-2">Maasala</h3>
            <p className="text-gray-700">
              Maasala is a vibrant cultural area where traditional music, food,
              and craftsmanship come together, showcasing the rich heritage of
              Kembata.
            </p>
          </motion.div>

          {/* Filiwuha in Shinshicho */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Filiwuha in Shinshicho
            </h3>
            <p className="text-gray-700">
              A natural hot spring located in Shinshicho, Filiwuha is known for
              its relaxing waters and believed healing properties, attracting
              visitors year-round.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form - Retained */}
      <section className="py-12 bg-gray-50 flex justify-center">
        <form
          action="#"
          method="post"
          className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border-t-8 border-green-600"
        >
          <div className="mb-6 text-center">
            <h4 className="text-2xl font-bold text-green-700 mb-3">
              Get in Touch
            </h4>
            <p className="text-gray-700">
              Contact us <br />
              <span className="font-semibold">+251 9********</span> <br />
              <span className="font-semibold">info@visitkemabata.travel</span>
              <br />
              Durame, Kembata, Ethiopia
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="pageName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="pageName"
              name="pageName"
              placeholder="Write Full Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Write your email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

         
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write message here..."
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all shadow-md"
          >
            Send Message
          </motion.button>
        </form>
      </section>


      <footer className="bg-gray-300 text-white py-10 text-center">
        <div className="relative mx-auto w-full max-w-lg rounded-xl  p-4 shadow-sm backdrop-blur-xs">
          <div className="rounded-lg p-4">
            <div className="mb-4 border-b border-slate-200 pb-2 text-center text-xl font-extrabold">
              <h1 className="text-dark-100 font-bold">
                Follow us on our social media
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#0f1419] text-white transition duration-150 hover:ring-4 hover:ring-[#0f1419]/25 active:ring-0"
              >
                <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
                <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                  <svg
                    className="bi bi-twitter-x inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    className="hi-mini hi-arrow-up-tray inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>
                </div>
              </button>
              <button
                type="button"

                
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#1877f2] text-white transition duration-150 hover:ring-4 hover:ring-[#1877f2]/25 active:ring-0"
              >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-facebook inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#e1306c] text-white transition duration-150 hover:ring-4 hover:ring-[#e1306c]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-instagram inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >

                
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#FF0000] text-white transition duration-150 hover:ring-4 hover:ring-[#FF0000]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-youtube inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >

                
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#0a66c2] text-white transition duration-150 hover:ring-4 hover:ring-[#0a66c2]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-linkedin inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />

                
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#7bb32e] text-white transition duration-150 hover:ring-4 hover:ring-[#7bb32e]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-wechat inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                  <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#333] text-white transition duration-150 hover:ring-4 hover:ring-[#333]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-github inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >

                
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#e60023] text-white transition duration-150 hover:ring-4 hover:ring-[#e60023]/25 active:ring-0"
            >
              <span className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
              <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0">
                <svg
                  className="bi bi-pinterest inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  className="hi-mini hi-arrow-up-tray inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>

              
            </button>
          </div>
        </div>
      
      </div><p className="lg:text-xl text-dark-100 font-bold mt-2">
        © {new Date().getFullYear()} Visit Kembata. All rights reserved.
      </p>
      </footer>

      
    </div>
  );
}