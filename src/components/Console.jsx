import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';
import { Line } from './Line';

const StyledConsole = styled.textarea`
   width: 100%;
   height: 70vh;
   background: black;
   border: none;
   color: ${props => props.color || props.theme.colors.primary};
   resize: none;
   &:focus {
      outline: none;
   }
   @media ${props => props.theme.media.phone} {
      border: 2px dashed blue;
   }
   @media ${props => props.theme.media.tablet} {
      border: 2px dashed red;
   }
`

export const Console = ({ color, ...props }) => {
   const [lines, setLines] = useState(['C/users/projects>'])

   const onKeyPress = (e) => {
      console.log(e)
      if (e.charCode === 13) {
         setLines([...lines, 'C/users/projects>'])
      }
   }

   return (
      <Flex>
         <Flex direction={'column'} margin={'0px 10px'}>
            {lines.map(line =>
               <Line color={color}>{line}</Line>
            )}
         </Flex>
         <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
      </Flex>
   )
}