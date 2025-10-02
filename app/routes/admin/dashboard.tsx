import { Header, PostCard, StatsCard } from "componentsCreated"
import { getAllUsers, getUser } from "~/appwrite/auth";
import type { Route } from "./+types/dashboard";
import { getUserGrowthPerDay, getUsersAndPostStats } from "~/appwrite/dashboard";
import { getAllPosts } from "~/appwrite/posts";


export const clientLoader = async () => {
  const [user, dashboardStats, posts, userGrowth, allUsers] = await Promise.all([
    getUser(),
    getUsersAndPostStats(),
    getAllPosts(4,0),
    getUserGrowthPerDay(),
    getAllUsers(4,0)
  ]);
  
  // const postsData = {...posts}
  // console.log('postsData', postsData);
  const allPosts = posts.allPosts.map(({ $id, postDetails, title, tags, imageUrls }) => {
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

  const mappedUsers: UsersItineraryCount[] = allUsers.users.map((user) => (
    {
      id: user.$id,
      name: user.name,
      count: user.itineraryCount || 0,
      imageUrl: user.imageUrl || '/assets/images/avatar-placeholder.png'
    }
  ))
  return { user, dashboardStats, allPosts, userGrowth, allUsers: mappedUsers };
};
const dashboard = ({loaderData}: Route.ComponentProps) => {

  const user = loaderData.user as User | null;
  const { dashboardStats, allPosts,  userGrowth, allUsers } = loaderData;
  console.log('allPosts', allPosts);
  return (
    <main className="dashboard wrapper">
        <Header 
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track and Manage created posts in real time."
        />
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <StatsCard 
              headerTitle="Total Users"
              total={dashboardStats.totalUsers}
              currentMonthCount={dashboardStats.usersJoined.currentMonth}
              lastMonthCount={dashboardStats.usersJoined.lastMonth}/>
              <StatsCard 
              headerTitle="Total Posts"
              total={dashboardStats.totalTrips}
              currentMonthCount={dashboardStats.tripsCreated.currentMonth}
              lastMonthCount={dashboardStats.tripsCreated.lastMonth}/>
              <StatsCard 
              headerTitle="Active Users"
              total={dashboardStats.userRole.total}
              currentMonthCount={dashboardStats.userRole.currentMonth}
              lastMonthCount={dashboardStats.userRole.lastMonth}/>
          </div>
        </section>
        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">Created Posts</h1>
          <div className="trip-grid">
            {allPosts.slice(0,4).map(({id, title, tags, imageUrls}) => (
              <PostCard
              key={id}
              id={id.toString()}
              imageUrl={imageUrls?.[0]}
              location={tags?.[0]}
              tags={tags}
              name={title}
              price={tags?.[0]}/>
            ))}
          </div>
        </section>
    </main>
  )
}

export default dashboard