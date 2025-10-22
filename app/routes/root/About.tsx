import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router'
import { homeSidebarItems } from '~/constants'
import type { Route } from './+types/About';
import { getAllPosts } from '~/appwrite/posts';
import { getUser } from '~/appwrite/auth';
import { cn } from '~/lib/utils';

export const clientLoader = async () => {
  const [user, posts] = await Promise.all([
    getUser(),
    getAllPosts(3,0),
  ]);

  const allPosts = posts.allPosts.map(({ $id, postDetails, title, tags, imageUrls, tittleDescription,createdAt }) => {
  let details = {};

  try {
    details = typeof postDetails === "string" ? JSON.parse(postDetails) : postDetails;

  } catch (e) {
    console.error("Invalid JSON in postDetails", postDetails);
  }

  return {
    id: $id,
    ...details
  };
}) as any[];
 return { user, allPosts};
};

const About = ({loaderData}: Route.ComponentProps) => {
  const user = loaderData.user as User | null;
  const {allPosts} = loaderData;
  console.log('allPosts', allPosts);

  // const user = useLoaderData();
    const navigate = useNavigate();
    const hanldeLogout = () =>{
        navigate('/sign-in')
    }

    const path = useLocation();  
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
        <section className="hidden lg:block my-2">
        
        <header className="hidden lg:block fixed top-0 left-0 right-0 w-full bg-white shadow z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                      <img
                        src="/assets/images/Visit-kembata-logo.jpg"
                        alt="Visit Kembata"
                        className="w-10 h-10 object-cover rounded"
                      />
                      <span className="text-lg font-bold text-green-700">
                        VISIT KEMBATA
                      </span>
                    </Link>
        
                    {/* Center: horizontal nav links (no social icons) */}
                    <nav
                      aria-label="Main navigation"
                      className="flex gap-4 items-center"
                    >
                      {homeSidebarItems.map(({ id, href, icon, label }) => (
                        <NavLink
                          key={id}
                          to={href}
                          className="inline-flex items-center"
                        >
                          {({ isActive }: { isActive: boolean }) => (
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
                                className={`group-hover:brightness-0 size-5 group-hover:invert w-5 h-5 object-contain ${isActive ? 'brightness-0 invert' : 'text-green-500' }`}
                              />
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
                        src={user?.imageUrl  ?? "/assets/images/david.webp"}
                        alt={user?.name  ?? "User"}
                        className="w-9 h-9 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
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
    </div>
  )
}

export default About