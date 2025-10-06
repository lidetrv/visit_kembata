// import React from 'react'

// const Homepage = () => {
//   return (
//     <div>Homepage</div>
//   )
// }

// export default Homepage

import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaBars, FaTimes,FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden"
    >
      <section className="hidden lg:block my-2">
<nav
  className="relative mx-auto flex w-full max-w-xl flex-col gap-2 rounded-3xl bg-white p-4 ring-8 shadow-sm shadow-slate-500/10 ring-slate-900/5 lg:flex-row lg:justify-center"
>
  <a
    href="/"
    className="group flex items-center space-x-2 rounded-xl bg-slate-100 px-3 py-2 font-medium text-slate-900 lg:justify-center"
  >
    <svg
      className="hi-mini hi-home inline-block size-5 text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clip-rule="evenodd"
      />
    </svg>
    <span>Home</span>
  </a>
  <a
    href="javascript:void(0)"
    className="group flex items-center space-x-2 rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 lg:justify-center"
  >
    <svg
      className="hi-mini hi-briefcase inline-block size-5 text-slate-400 group-hover:text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
        clip-rule="evenodd"
      />
      <path
        d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
      />
    </svg>
    <span>Projects</span>
  </a>
  <a
    href="javascript:void(0)"
    className="group flex items-center space-x-2 rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 lg:justify-center"
  >
    <svg
      className="hi-mini hi-users inline-block size-5 text-slate-400 group-hover:text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
      />
    </svg>
    <span>Customers</span>
  </a>
  <a
    href="javascript:void(0)"
    className="group flex items-center space-x-2 rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 lg:justify-center"
  >
    <svg
      className="hi-mini hi-cog-8-tooth inline-block size-5 text-slate-400 group-hover:text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
        clip-rule="evenodd"
      />
    </svg>
    <span>Settings</span>
  </a>
</nav>

      </section>
      <section>
        <div className="flex items-center justify-start mx-8 font-bold">
          <article>
           <h1 className="text-green-500 text-3xl lg:text-9xl font-bold">Visit Kembata</h1>
           <p className="font-semibold text-green-400 text-xl">Find your way!</p>
          </article>
          <div>
            
          </div> 
        </div>
      </section>
      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      > 
        <div className=" bg-opacity-50 p-10 rounded-xl mx-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-dark-100"
          >
            Discover Your Next Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg mb-8 text-dark-400 font-semibold"
          >
            Explore breathtaking destinations, thrilling adventures, and unforgettable journeys.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
          >
            Start Exploring
          </motion.button>
        </div>
      </section>

      {/* Destinations Grid */}
<section className="py-16 bg-gray-50 mx-4">
  <h3 className="text-3xl font-bold text-center mb-10 text-green-700">
    Popular Destinations
  </h3>
  {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
    {[
      {
        name: "Hambericho-777",
        img: "/assets/icons/Hambericho777.jpg",
      },
      {
        name: "Ajora Twin Waterfalls",
        img: "/assets/icons/AjoraCamping.jpg",
      },
      {
        name: "Soso Waterfall",
        img: "/assets/icons/SosoWaterfalls.jpg",
      },
      {
        name: "Hambericho-777 Sunrise",
        img: "/assets/images/sunshinelove.jpg",
      },
      {
        name: "Soso Waterfall",
        img: "/assets/images/waterfall.jpg",
      },
      {
        name: "Sunset",
        img: "/assets/images/sunsetgroup.jpg",
      },
    ].map((dest, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
      >
        <img
          src={dest.img}
          alt={dest.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Blur overlay */}
        {/* <div className="absolute inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h4 className="text-white text-2xl font-semibold drop-shadow-lg">
            {dest.name}
          </h4>
        </div>
      </motion.div>
    ))} */}
    {/* <!--
  Day 24: Animated blog post cards

  Created by John Champ

  Founder of Pixelcave      -> https://pixelcave.com
  Building Tailkit          -> https://tailkit.com
  Let's connect on X        -> https://x.com/pixelcave_john
                on Bluesky  -> https://bsky.app/profile/pixelcave-john.bsky.social
--> */}

{/* <!-- Cards Grid --> */}
<div
  className="mx-auto grid w-full max-w-sm grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-12"
>
  {/* <!-- Blog Post Card --> */}
  <a
    href="javascript:void(0)"
    className="group relative mx-auto block w-full max-w-xs overflow-hidden rounded-lg ring-8 shadow-lg ring-white/50 transition ease-in active:opacity-75"
  >
    <div
      className="scale-125 transition duration-150 ease-in group-hover:scale-100"
    >
      <img
        src="/assets/icons/Hambericho777.jpg"
        alt="Mountain Peak"
        className="aspect-3/4 w-full rounded-lg object-cover"
      />
    </div>
    <div
      className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/90 opacity-50 transition duration-150 group-hover:opacity-100"
    ></div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-24"
    >
      <h2 className="text-xl font-bold text-white">
        Hambericho-777
      </h2>
    </div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-6"
    >
      <p
        className="text-sm font-medium text-white/80 opacity-0 duration-300 ease-in group-hover:opacity-100"
      >
        An inspiring adventure discovering the most amazing peaks.
      </p>
    </div>
  </a>
  {/* <!-- END Blog Post Card -->

  <!-- Blog Post Card --> */}
  <a
    href="javascript:void(0)"
    className="group relative mx-auto block w-full max-w-xs overflow-hidden rounded-lg ring-8 shadow-lg ring-white/50 transition ease-in active:opacity-75"
  >
    <div
      className="scale-125 transition duration-150 ease-in group-hover:scale-100"
    >
      <img
        src="/assets/icons/AjoraCamping.jpg"
        alt="Mountain Lake"
        className="aspect-3/4 w-full rounded-lg object-cover"
      />
    </div>
    <div
      className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/90 opacity-50 transition duration-150 group-hover:opacity-100"
    ></div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-24"
    >
      <h2 className="text-xl font-bold text-white">
        Ajora Twin Waterfalls
      </h2>
    </div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-6"
    >
      <p
        className="text-sm font-medium text-white/80 opacity-0 duration-300 ease-in group-hover:opacity-100"
      >
        An inspiring adventure discovering the most amazing lakes.
      </p>
    </div>
  </a>
  {/* <!-- END Blog Post Card -->

  <!-- Blog Post Card --> */}
  <a
    href="/blogs"
    className="group relative mx-auto block w-full max-w-xs overflow-hidden rounded-lg ring-8 shadow-lg ring-white/50 transition ease-in active:opacity-75"
  >
    <div
      className="scale-125 transition duration-150 ease-in group-hover:scale-100"
    >
      <img
        className="aspect-3/4 w-full rounded-lg object-cover"
        src="/assets/icons/SosoWaterfalls.jpg"
        alt="Beaches"
      />
    </div>
    <div
      className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/90 opacity-50 transition duration-150 group-hover:opacity-100"
    ></div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-24"
    >
      <h2 className="text-xl font-bold text-white">
        Soso Waterfall
      </h2>
    </div>
    <div
      className="absolute inset-0 flex flex-col justify-end px-4 py-10 text-center transition duration-150 ease-in group-hover:-translate-y-6"
    >
      <p
        className="text-sm font-medium text-white/80 opacity-0 duration-300 ease-in group-hover:opacity-100"
      >
        An inspiring adventure discovering the most amazing beaches.
      </p>
    </div>
  </a>
  {/* <!-- END Blog Post Card --> */}
</div>
{/* <!-- END Cards Grid --> */}
</section>


      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-green-500">About Visit Kembata</h3>
        <p className="max-w-3xl mx-auto text-dark-100 leading-relaxed text-lg font-semibold">
          Visit Kembata is your gateway to exploring the world’s most beautiful and remote destinations.
          Whether you crave mountain peaks, deep forests, or desert dunes, our mission is to help you
          connect with nature and find your wild side. Embark on journeys that redefine your limits
          and let your spirit roam free.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10 text-green-700">
          What Our Travelers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
          {[
            {
              name: "Sarah Johnson",
              text: "AdventureX gave me an unforgettable experience! The guides were amazing and the locations were breathtaking.",
            },
            {
              name: "David Kim",
              text: "I’ve traveled with many agencies, but AdventureX stands out for their attention to detail and passion for adventure.",
            },
            {
              name: "Emily Carter",
              text: "From mountains to beaches, every trip I’ve taken with AdventureX has been incredible!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <p className="italic text-gray-600 mb-4">“{t.text}”</p>
              <h5 className="font-semibold text-green-700">{t.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

