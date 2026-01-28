import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <div className="page">
        <div className="page__size">
          {/* Header component would be here */}
          <Header />
          {/* Main component would be here */}
          <Main />
          {/* Footer component would be here */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
