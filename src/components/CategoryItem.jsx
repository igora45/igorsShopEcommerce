import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-height: 70vh;
  position: relative;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  padding: 10px 15px;
  font-weight: 500;
  cursor: pointer;
`;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
