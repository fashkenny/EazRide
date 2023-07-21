import React from 'react'
import Around from './Around'
import Heropage from '../Components/Block/Heropage'
import GlobalCard from '../Components/Static/GlobalCard'
import Services from './Services'

const HomeScreen = () => {
  return (
    <div>
      <Heropage/>
      <GlobalCard/>
      <Services/>
    </div>
  )
}

export default HomeScreen