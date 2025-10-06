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
    href="#"
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
    href="#"
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
    href="#"
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
           <h1 className="text-green-500 text-3xl lg:text-9xl font-bold my-10">Visit Kembata</h1>
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
        <div className=" bg-opacity-20 p-10 rounded-xl mx-4 bg-black/30 backdrop-blur-2xl">
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
  <h3 className="text-3xl font-bold text-center mb-10 text-green-500">
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

      <section>
        <h1 className="lg:text-7xl text-xl text-center text-green-500 font-bold my-4">Read more on our blog</h1>
<div className="flex justify-center items-center my-10 gap-6 flex-wrap mx-4">        
<div
  className="relative mx-auto w-full max-w-sm rounded-3xl border border-slate-200 bg-white ring-4 ring-slate-300/25"
>
  <div className="flex flex-col gap-4 rounded-xl p-6">
    <a href="javascript:void(0)" className="group relative">
      <div
        className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="hi-outline hi-arrow-up-right inline-block size-6 transition duration-200 group-hover:scale-150 group-active:scale-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <div
        className="absolute top-7 right-7 rounded-xl bg-purple-700/50 px-2 py-1 text-xs font-semibold tracking-wider text-white uppercase"
      >
        Travel
      </div>
      <img
        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Story Image"
        className="aspect-16/9 w-full rounded-xl object-cover"
      />
    </a>
    <div className="grow">
      <div className="mb-1.5 text-sm font-medium text-slate-500">
        April 14, 2025 ∙ 20 min read
      </div>
      <h2 className="mb-2 text-xl font-extrabold">
        <a
          href="javascript:void(0)"
          className="hover:opacity-75 active:opacity-100"
        >
          Exploring New Zealand's Hidden Gems: A Journey Through Middle Earth
        </a>
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">
        From the majestic fjords of Milford Sound to the geothermal wonders of
        Rotorua, New Zealand offers breathtaking landscapes at every turn.
      </p>
    </div>
  </div>
</div>
<div
  className="relative mx-auto w-full max-w-sm rounded-3xl border border-slate-200 bg-white ring-4 ring-slate-300/25"
>
  <div className="flex flex-col gap-4 rounded-xl p-6">
    <a href="javascript:void(0)" className="group relative">
      <div
        className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="hi-outline hi-arrow-up-right inline-block size-6 transition duration-200 group-hover:scale-150 group-active:scale-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <div
        className="absolute top-7 right-7 rounded-xl bg-purple-700/50 px-2 py-1 text-xs font-semibold tracking-wider text-white uppercase"
      >
        Travel
      </div>
      <img
        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Story Image"
        className="aspect-16/9 w-full rounded-xl object-cover"
      />
    </a>
    <div className="grow">
      <div className="mb-1.5 text-sm font-medium text-slate-500">
        April 14, 2025 ∙ 20 min read
      </div>
      <h2 className="mb-2 text-xl font-extrabold">
        <a
          href="javascript:void(0)"
          className="hover:opacity-75 active:opacity-100"
        >
          Exploring New Zealand's Hidden Gems: A Journey Through Middle Earth
        </a>
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">
        From the majestic fjords of Milford Sound to the geothermal wonders of
        Rotorua, New Zealand offers breathtaking landscapes at every turn.
      </p>
    </div>
  </div>
</div>
<div
  className="relative mx-auto w-full max-w-sm rounded-3xl border border-slate-200 bg-white ring-4 ring-slate-300/25"
>
  <div className="flex flex-col gap-4 rounded-xl p-6">
    <a href="javascript:void(0)" className="group relative">
      <div
        className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="hi-outline hi-arrow-up-right inline-block size-6 transition duration-200 group-hover:scale-150 group-active:scale-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <div
        className="absolute top-7 right-7 rounded-xl bg-purple-700/50 px-2 py-1 text-xs font-semibold tracking-wider text-white uppercase"
      >
        Travel
      </div>
      <img
        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Story Image"
        className="aspect-16/9 w-full rounded-xl object-cover"
      />
    </a>
    <div className="grow">
      <div className="mb-1.5 text-sm font-medium text-slate-500">
        April 14, 2025 ∙ 20 min read
      </div>
      <h2 className="mb-2 text-xl font-extrabold">
        <a
          href="javascript:void(0)"
          className="hover:opacity-75 active:opacity-100"
        >
          Exploring New Zealand's Hidden Gems: A Journey Through Middle Earth
        </a>
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">
        From the majestic fjords of Milford Sound to the geothermal wonders of
        Rotorua, New Zealand offers breathtaking landscapes at every turn.
      </p>
    </div>
  </div>
</div>
</div>
 </section>


      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-green-500">About Visit Kembata</h3>
        {/* <p className="max-w-3xl mx-auto text-dark-100 leading-relaxed text-lg font-semibold">
          Visit Kembata is your gateway to exploring the world’s most beautiful and remote destinations.
          Whether you crave mountain peaks, deep forests, or desert dunes, our mission is to help you
          connect with nature and find your wild side. Embark on journeys that redefine your limits
          and let your spirit roam free.
        </p> */}
<div
  className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 lg:px-8 lg:py-32"
>
  <div className="text-center">
    <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
      Boost SEO with our solution.
    </h2>
    <p className="mt-2 text-lg font-medium text-green-500">
      Unlock the power of search engine optimization and dominate your market.
    </p>
  </div>
  <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-100"
      >
        <svg
          className="inline-block size-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">Keyword Research</h4>
      <p className="text-sm/relaxed text-gray-600">
        Discover high-performing keywords to target and improve your search
        rankings.
      </p>
    </div>
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green-100"
      >
        <svg
          className="inline-block size-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">On-Page Optimization</h4>
      <p className="text-sm/relaxed text-gray-600">
        Optimize your content, meta tags, and HTML structure for better search
        engine visibility.
      </p>
    </div>
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple-100"
      >
        <svg
          className="inline-block size-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">Backlink Analysis</h4>
      <p className="text-sm/relaxed text-gray-600">
        Monitor and analyze your backlink profile to improve your site's
        authority and rankings.
      </p>
    </div>
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-yellow-100"
      >
        <svg
          className="inline-block size-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">Site Speed Optimization</h4>
      <p className="text-sm/relaxed text-gray-600">
        Improve your website's loading speed for better user experience and
        search rankings.
      </p>
    </div>
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-red-100"
      >
        <svg
          className="inline-block size-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">Competitor Analysis</h4>
      <p className="text-sm/relaxed text-gray-600">
        Gain insights into your competitors' strategies and find opportunities
        to outrank them.
      </p>
    </div>
    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-100"
      >
        <svg
          className="inline-block size-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">SEO Reporting</h4>
      <p className="text-sm/relaxed text-gray-600">
        Generate comprehensive reports to track your SEO progress and
        demonstrate ROI.
      </p>
    </div>
  </div>
</div>

      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        {/* <h3 className="text-3xl font-bold text-center mb-10 text-green-700">
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
        </div> */}
<div className="lg:flex items-center justify-center mx-4">
  <div
    className="mx-auto w-full max-w-sm rounded-3xl bg-white/40 p-6 shadow-sm shadow-zinc-300 backdrop-blur-xs mb-2">
  <div
    className="flex flex-col gap-5 rounded-xl bg-white p-10 text-center shadow-sm"
  >
    <div className="flex items-center justify-center gap-1 text-amber-500">
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p className="text-xl/relaxed font-semibold text-black">
      “Intuitive interface. Lightning-fast performance. Reliable security.
      Perfect for any business.”
    </p>
    <img
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Avatar"
      className="mx-auto aspect-square w-20 rounded-full object-cover shadow-sm ring-4 ring-amber-500/50"
    />
    <div className="text-sm">
      <a
        href="javascript:void(0)"
        className="text-lg font-semibold text-black hover:text-zinc-600"
      >
        Michael Thompson
      </a>
      <div className="text-zinc-600">Verified customer</div>
    </div>
  </div>
</div>
<div
  className="mx-auto w-full max-w-sm rounded-3xl bg-white/40 p-6 mb-2 shadow-sm shadow-zinc-300 backdrop-blur-xs"
>
  <div
    className="flex flex-col gap-5 rounded-xl bg-white p-10 text-center shadow-sm"
  >
    <div className="flex items-center justify-center gap-1 text-amber-500">
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p className="text-xl/relaxed font-semibold text-black">
      “Intuitive interface. Lightning-fast performance. Reliable security.
      Perfect for any business.”
    </p>
    <img
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Avatar"
      className="mx-auto aspect-square w-20 rounded-full object-cover shadow-sm ring-4 ring-amber-500/50"
    />
    <div className="text-sm">
      <a
        href="javascript:void(0)"
        className="text-lg font-semibold text-black hover:text-zinc-600"
      >
        Michael Thompson
      </a>
      <div className="text-zinc-600">Verified customer</div>
    </div>
  </div>
</div>
<div
  className="mx-auto w-full max-w-sm rounded-3xl bg-white/40 p-6 shadow-sm shadow-zinc-300 backdrop-blur-xs"
>
  <div
    className="flex flex-col gap-5 rounded-xl bg-white p-10 text-center shadow-sm"
  >
    <div className="flex items-center justify-center gap-1 text-amber-500">
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-0.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        className="hi-mini hi-star relative top-1.5 inline-block size-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p className="text-xl/relaxed font-semibold text-black">
      “Intuitive interface. Lightning-fast performance. Reliable security.
      Perfect for any business.”
    </p>
    <img
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Avatar"
      className="mx-auto aspect-square w-20 rounded-full object-cover shadow-sm ring-4 ring-amber-500/50"
    />
    <div className="text-sm">
      <a
        href="javascript:void(0)"
        className="text-lg font-semibold text-black hover:text-zinc-600"
      >
        Michael Thompson
      </a>
      <div className="text-zinc-600">Verified customer</div>
    </div>
  </div>
</div>
</div>

      </section>

      {/* Footer */}
      <footer className=" text-white py-10 text-center glassmorphism">
        {/* <div className="flex justify-center space-x-6 mb-6 text-2xl">
          <FaInstagram className="hover:text-green-300 cursor-pointer transition" />
          <FaFacebookF className="hover:text-green-300 cursor-pointer transition" />
          <FaTwitter className="hover:text-green-300 cursor-pointer transition" />
          <FaYoutube className="hover:text-green-300 cursor-pointer transition" />
        </div> */}
<div
  className="relative mx-auto w-full max-w-lg rounded-xl  p-4 shadow-sm backdrop-blur-xs"
>
  <div className="rounded-lg p-4">
    <div
      className="mb-4 border-b border-slate-200 pb-2 text-center text-xl font-extrabold"
    >
      <h1 className="text-dark-100 font-bold">Follow us on our social media</h1>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#0f1419] text-white transition duration-150 hover:ring-4 hover:ring-[#0f1419]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-twitter-x inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#1877f2] text-white transition duration-150 hover:ring-4 hover:ring-[#1877f2]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-facebook inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#e1306c] text-white transition duration-150 hover:ring-4 hover:ring-[#e1306c]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-instagram inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#FF0000] text-white transition duration-150 hover:ring-4 hover:ring-[#FF0000]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-youtube inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#0a66c2] text-white transition duration-150 hover:ring-4 hover:ring-[#0a66c2]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-linkedin inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#7bb32e] text-white transition duration-150 hover:ring-4 hover:ring-[#7bb32e]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-wechat inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"
            />
            <path
              d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#333] text-white transition duration-150 hover:ring-4 hover:ring-[#333]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-github inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
      <button
        type="button"
        className ="group relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-[#e60023] text-white transition duration-150 hover:ring-4 hover:ring-[#e60023]/25 active:ring-0"
      >
        <span
          className="absolute size-24 scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"
        ></span>
        <div
          className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
        >
          <svg
            className="bi bi-pinterest inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex translate-y-full items-center justify-center opacity-0 transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <svg
            className="hi-mini hi-arrow-up-tray inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
            />
            <path
              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>

        <p className="lg:text-xl text-dark-100 font-bold mt-2">
          © {new Date().getFullYear()} Visit Kembata. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

