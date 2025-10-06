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
            className="text-lg mb-8 text-dark-400"
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

