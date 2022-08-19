import React, {useState} from 'react'
import Hero from '../components/HeroSection/Hero'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Info from '../components/InfoSection/Info'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </>
  )
}

export default Home