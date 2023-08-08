import React from 'react'
import Heropage from './Heropage'
import GlobalCard from '../Components/Static/GlobalCard'
import Services from './Services'
import Best from './Best'
// import HomePage from './HomePage'
// import LogIn from './LogIn'
// import SignUp from './SignUp'

const HomeScreen = () => {
  return (
    <div>
      <Heropage/>
      <GlobalCard/>
      <Services/>
      <Best/>
      {/* <HomePage/> */}
       {/* <SignUp/> */}
      {/* <LogIn/>  */}
    </div>
  )
}

export default HomeScreen