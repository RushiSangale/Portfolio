
import './App.css'
import Navbar from './Component/Navbar'

function App() {

  return (
    <>
        <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-bold">
            Rushikesh Sangale
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Java Full Stack Developer
          </p>

        </div>
      </main>

    </div>
      
    </>
  )
}

export default App
