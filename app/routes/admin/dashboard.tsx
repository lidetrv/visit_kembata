import { Header, PostCard, StatsCard } from "components"
import { dashboardStats,user,allTrips } from "~/constants"
const dashboard = () => {

  const {totalUsers, usersJoined, totalPosts, postsCreated, userRole} = dashboardStats;
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
              total={totalUsers}
              currentMonthCount={usersJoined.currentMonth}
              lastMonthCount={usersJoined.lastMonth}/>
              <StatsCard 
              headerTitle="Total Posts"
              total={totalPosts}
              currentMonthCount={postsCreated.currentMonth}
              lastMonthCount={postsCreated.lastMonth}/>
              <StatsCard 
              headerTitle="Active Users"
              total={userRole.total}
              currentMonthCount={userRole.currentMonth}
              lastMonthCount={userRole.lastMonth}/>
          </div>
        </section>
        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">Created Posts</h1>
          <div className="trip-grid">
            {allTrips.slice(0,4).map(({id,name,imageUrls,itinerary,tags,estimatedPrice}) => (
              <PostCard
              key={id}
              id={id.toString()}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ''}
              tags={tags}
              name={name}
              price={estimatedPrice}/>
            ))}
          </div>
        </section>
    </main>
  )
}

export default dashboard