import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
const Info = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  padding: 2rem;
  position: relative;
  background-color: #f3f8fd;
  &:hover ${Info} {
    display: flex;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Icon = styled.button`
  height: 40px;
  width: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: #f3f8fd;
    transform: scale(1.1);
  }
`;
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`;
const IconStyle = {
  fontSize: '1.5rem',
};

export const Product = ({ item, key }) => {
  const { AddToCart } = useContext(ShopContext);
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={() => AddToCart(item.id)}>
          <ShoppingCartOutlinedIcon style={IconStyle} />
        </Icon>
        <Icon>
          <SearchOutlinedIcon style={IconStyle} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon style={IconStyle} />
        </Icon>
      </Info>
    </Container>
  );
};
