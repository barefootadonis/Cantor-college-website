import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import About from './Components/About-us'
import Computing from './Components/Computing-courses'
import Design from './Components/Design-courses'
import Find from './Components/Find-us'
import Facilities from './Components/Facilities'
import Resources from './Components/Resources'
import Students from './Components/Students'
import Staff from './Components/Staff'
import Business from './Components/Business'
import Contact from './Components/Contact-us'
import Footer from './Components/Footer'


const App = () => {

  const [activeComponent, setActiveComponent] = useState('home')

  const handleNav = (ev, link) => {
   ev.preventDefault();
   setActiveComponent(link)
 }
  
  const renderComponent = () =>{
    switch(activeComponent){
      case 'home':
        return <Welcome handleNav={handleNav} />;
      case 'about us':
        return <About />;
      case 'computing courses':
        return <Computing />;
      case 'design courses' :
        return <Design />;
      case 'how to find us':
        return <Find />;
      case 'facilities':
        return <Facilities />;
      case 'learning resources':
        return <Resources />;
      case 'information for students':
        return <Students />;
      case 'information for staff':
        return <Staff />;
      case 'business':
        return <Business />;
      case 'contact us':
        return <Contact />;
    }
  }

      return (
    <>
    <div className="app-root">
      <Navbar handleNav={handleNav} />
      <main>
        {renderComponent()}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App