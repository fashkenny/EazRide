import React from 'react'
import Heropage from './Heropage'
import GlobalCard from '../Components/Static/GlobalCard'
import Services from './Services'
import Best from './Best'
// import LogIn from './LogIn'
// import SignUp from './SignUp'

const HomeScreen = () => {
  return (
    <div>
      <Heropage/>
      <GlobalCard/>
      <Services/>
      <Best/>
      {/* <SignUp/>
      <LogIn/> */}
    </div>
  )
}

export default HomeScreen