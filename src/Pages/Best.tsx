import React from 'react'
import Card1 from '../Components/Reuse/Card'
import truck2 from "../Assets/truck.webp";
import styled from 'styled-components';

const Best = () => {
  return (
    <Container>
      <Main>
        <Card1 title='Ahio' price='$200.00' IMG={truck2}/>
        <Card1 title='Selac' price='$200.00' IMG={truck2}/>
        <Card1 title='richard' price='$200.00' IMG={truck2}/>
        <Card1 title='austine' price='$200.00' IMG={truck2}/>
        <Card1 title='williams' price='$200.00' IMG={truck2}/>
        <Card1 title='akin' price='$200.00' IMG={truck2}/>
        <Card1 title='destiny' price='$200.00' IMG={truck2}/>
        <Card1 title='logic' price='$200.00' IMG={truck2}/>
        {/* <Card1 title='wisdom' price='$200.00' IMG={truck2}/> */}
      </Main>
    </Container>
  )
}

export default Best

const Main = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`