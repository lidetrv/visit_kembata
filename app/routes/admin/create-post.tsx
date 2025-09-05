import { Header } from "componentsCreated"
import PostForm from "componentsCreated/PostForm"

const CreatePost = () => {
  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
        <Header
        title="Add a New Post"
        description="View and edit posts"/>
        <section className="mt-2.5 wrapper-md">
          <div className="mt-4">
            <PostForm/>
          </div>
        </section>
    </main>
  )
}

export default CreatePost