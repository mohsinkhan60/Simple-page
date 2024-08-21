

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


export const App = () => {
  return (
    <div className="main-div">
      <Navbar />
      <Header />
      <Services />
    </div>
  )
}
export default App