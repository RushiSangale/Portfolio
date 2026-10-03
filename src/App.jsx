
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Section/Hero'

function App() {

  return (
    <>
        <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main>
        <Hero />
      </main>

    </div>
      
    </>
  )
}

export default App
