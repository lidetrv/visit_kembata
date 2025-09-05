import { Header } from "componentsCreated"

const posts = () => {
  return (
    <main className="all-users wrapper">
        <Header
        title="Posts"
        description="View and Edit posts"
        ctaText="Create a post"
        ctaUrl='/posts/create'
        />
    </main>
  )
}

export default posts