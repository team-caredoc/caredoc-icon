import React from 'react';
import styled from 'styled-components';

export const IconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:16px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:hover{
    background: rgba(0,0,0,0.3);
  }
  
`
