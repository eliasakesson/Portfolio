import { useEffect, useState } from "react"

import About from "./components/About"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import Overlay from "./components/Overlay"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1500);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      {!loading && <>
        <Overlay />
        <div className="container">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </>}
    </>
  )
}

export default App
