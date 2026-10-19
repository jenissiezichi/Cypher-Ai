import './App.css'
import Navbar from '@/Components/Navbar'
import Hero from './Components/Hero'
import Goals from './Components/Goals'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-100">
   <div className="flex min-h-dvh flex-col">
    <Navbar />
      <Hero/>   
      <Goals/>
   </div>
    </div>
  )
}

export default App
