import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx'),
    route('/api/create-post','routes/api/create-post.ts'),
    layout('routes/admin/admin-layout.tsx',[
    route('dashboard', 'routes/admin/dashboard.tsx'),
    route('all-users', 'routes/admin/all-users.tsx'),
    route('posts', 'routes/admin/posts.tsx'),
    route('posts/create', 'routes/admin/create-post.tsx'),
    route('posts/:postId','routes/admin/post-detail.tsx')]),
    layout('routes/root/page-layout.tsx',[
        index('routes/root/Homepage.tsx'),
        route('blog','routes/root/Blog.tsx'),
        route('explore','routes/root/Explore.tsx'),
        route('about', 'routes/root/About.tsx'),
        route('blog-content','routes/root/BlogContent.tsx'),
        route('blog/:postId','routes/root/FrontPostDetail.tsx')
    ])
] satisfies RouteConfig;