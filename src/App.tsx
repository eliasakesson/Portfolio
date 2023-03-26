import About from "./components/About"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import Overlay from "./components/Overlay"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <>
      <Overlay />
      <Loader />
      <div className="container">
        <Hero />
        <About />
        <Portfolio />
      </div>
    </>
  )
}

export default App
