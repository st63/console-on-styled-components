import React from 'react';
import styled, { css, keyframes } from 'styled-components';

//34 строка - когда группируем, нельзя использовать деструктуризацию. Параметры primary и outlined передаем как булево значение. (мини-аналог Material-ui)
//Чтобы группировка заработала, импортируем css из styled-components, и ставим его после амперсандов.

//45 строка - наследуемся от кастомного StyledButton и переопределяем размер шрифта. Внимание: синтаксис не через точку, а через ().

//20 строка - с помощью колбэка задаем дефолтные пропсы

const rotateAnimation = keyframes`
0% {
   transform: rotateZ(0deg);
}
100% {
   transform: rotateZ(360deg);
}
`

const StyledButton = styled.button.attrs(props => ({
   outlined: true
}))`
   border: none;
   padding: 10px 15px;
   cursor: pointer;
   font-size: 18px;
   align-self: ${({ align }) => align || 'stretch'};
   &:hover {
      animation: ${rotateAnimation} 1s infinite linear;
   }
   &:focus {
      outline: none;
   }
   ${props => props.primary && css`
      color: ${props => props.color || props.theme.colors.primary};
      background: ${props => props.background || 'white'};
   `}
   ${props => props.outlined && css`
      color: ${props => props.color || props.theme.colors.primary};
      background: transparent;
      border: 1px solid ${props => props.color || props.theme.colors.primary};
`}
`

const LargeButton = styled(StyledButton)`
   font-size: 30px;
`

export const Button = (props) => {
   return <LargeButton {...props} />
}