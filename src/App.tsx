import Navbar from "./components/layouts/Navbar"
import MainLayout from "./components/layouts/MainLayout"

const App = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <Navbar/>
        </div>
      </div>
      <MainLayout/>
    </div>
  )
}

export default App