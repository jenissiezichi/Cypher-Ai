import './App.css'
import Navbar from '@/Components/Navbar'
import Hero from './Components/Hero'
import Goals from './Components/Goals'
import  Roadmap from './Components/Roadmap'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-100">
   <div className="flex min-h-dvh flex-col">
    <Navbar />
      <Hero/>   
      <Goals/>
       <Roadmap/>
   </div>
    </div>
  )
}

export default App
