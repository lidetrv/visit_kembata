import { Header } from "components"

const dashboard = () => {
  const user = {
    name: "Mase"
  }
  return (
    <main className="dashboard wrapper">
        <Header 
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track and Manage created posts in real time."
        />
        Dashboard contents
    </main>
  )
}

export default dashboard