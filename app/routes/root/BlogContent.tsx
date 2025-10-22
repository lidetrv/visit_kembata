import { useSearchParams, type LoaderFunctionArgs } from "react-router";
import { fetchPosts } from "~/appwrite/posts";
import { parseTripData } from "~/lib/utils";

import { useState } from "react";
import { PostCard } from "componentsCreated";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import type { Route } from "./+types/BlogContent";

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

      <section>
        <h1 className="p-24-semibold text-dark-100 mb-4">Manage Created BlogContent</h1>
        <div className="trip-grid mb-4">
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