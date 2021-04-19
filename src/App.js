import React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { Flex } from './components/Flex';
import { Console } from './components/Console';
import { Button } from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  background: black;
  height: 100vh;
  color: white;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title>
          My custom Guake Terminal 2021
        </Title>
      </Flex>
      <Flex direction={'column'} margin={'10px 0px'}>
        <Console />
        {/* <Button primary color={'red'} align={'flex-end'}>Send</Button> */}
        <Button align={'flex-end'}>Send</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
