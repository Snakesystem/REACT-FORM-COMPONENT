import Footer from "./components/layouts/Footer"
import MainLayout from "./components/layouts/MainLayout"
import Navbar from "./components/layouts/Navbar"

const App = () => {
  return (
    <div className="container">
      <div className="row mb-5">
          <div className="col-12">
            <Navbar/>
          </div>
      </div>
      <div className="row">
        <div className="col-12">
          <MainLayout/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App