import { Footer, Navbar } from "./show/components"
import { Home } from "./show/pages"

const Application = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Application
