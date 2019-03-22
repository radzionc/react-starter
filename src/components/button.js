import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  color: ${p => p.theme.color.mainText};
  border: 2px solid #31ceff;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  width: 240px;
  &:hover {
    background-color: rgba(52, 152, 219, 0.15);
  }
`

export default ({ onClick, text }) => (
  <Container onClick={onClick}>{text}</Container>
)
