import { Link, NavLink, useNavigate, useSearchParams, type LoaderFunctionArgs } from "react-router";
import { fetchPosts } from "~/appwrite/posts";
import { cn, parseTripData } from "~/lib/utils";

import { useState } from "react";
import { PostCard } from "componentsCreated";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import type { Route } from "./+types/BlogContent";
import { homeSidebarItems, user } from "~/constants";
import { getUser } from "~/appwrite/auth";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const limit = 8;
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const offset = (page - 1) * limit;

  const { posts, total } = await fetchPosts(limit, offset);

  return { posts, total, page };
};


const BlogContent = ({ loaderData }: Route.ComponentProps) => {
  const { posts, total, page } = loaderData;
  const {postDetails} = parseTripData(posts) || {}
  console.log('posts', posts);
  const navigate = useNavigate();
      const hanldeLogout = () =>{
          navigate('/sign-in')
      }

  const [searchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.location.search = `?page=${page}`;

  }

  return (
    <main className="all-users wrapper">
      {/* <Header
        title="BlogContent"
        description="View and Edit posts"
        ctaText="Create a post"
        ctaUrl="/posts/create"
      /> */}
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
                  <div className="flex items-center gap-3 invisible">
              <img
                src={`/assets/images/david.webp`}
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

      <section>
        <div className="trip-grid mb-4 mt-40">
             {posts.map((post)=>(
              <PostCard
              key={post.id}
              id={post.id}
              name={post.title}
              location={post.tags[0] || 'No location'}
              imageUrl={post.imageUrls[0]}
              tags={post.tags || []}
              price={post.tags[0]}
              />
             ))}
        </div>
        <PagerComponent
        totalRecordsCount={total}
        pageSize={8}
        currentPage={currentPage}
        click={(args)=> handlePageChange(args.currentPage)}
        cssClass="!mb-4"/>
      </section>
    </main>
  );
};

export default BlogContent;