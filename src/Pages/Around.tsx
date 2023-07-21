import React from 'react'
import styled from 'styled-components'
import relocation from '../Assets/relocations.jpg'

const Around = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                  <Box>
                     <Img src={relocation} />
                  </Box>
                </Left>
                <Right>
                    <BText></BText>
                    <SubText></SubText>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Around

const Img = styled.img`
   width: 200px;
   height: 200px;
   border-radius: 10px;
   object-fit: cover;
   overflow: hidden
`
const SubText = styled.div``
const BText = styled.div``
const Box = styled.div`
    width: 400px;
    height: 200px;
`
const Right = styled.div``
const Left = styled.div`

`
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:90%;
  background-color: teal;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: lightgray;
`