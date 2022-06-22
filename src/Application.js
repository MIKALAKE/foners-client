import { Footer, Navbar } from "./show/components"
import { Home } from "./show/pages"

const Application = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <h1 className="text-3xl text-secondary font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Application
