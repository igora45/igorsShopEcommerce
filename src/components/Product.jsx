import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
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
  min-width: 250px;
  height: 250px;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 400px) {
    min-width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 300px) {
    min-width: 180px;
    height: 180px;
  }
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
  color: #0000ee;
  &:hover {
    background-color: #f3f8fd;
    transform: scale(1.1);
  }
`;
const Circle = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const AddedContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  width: 60%;
  height: 45%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: white;
  margin-bottom: 1rem;
  font-size: 20px;
  text-align: center;
`;
const Emoji = styled.p`
  color: white;
`;

export const Product = ({ item, key }) => {
  const { AddToCart, AddToWishList } = useContext(ShopContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWish, setAddedToWish] = useState(false);

  const AddItemCart = item => {
    AddToCart(item);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };
  const AddItemWist = item => {
    AddToWishList(item);
    setAddedToWish(true);

    setTimeout(() => {
      setAddedToWish(false);
    }, 1000);
  };
  const IconStyle = {
    fontSize: '1.5rem',
  };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={() => AddItemCart(item.id)}>
          <ShoppingCartOutlinedIcon style={IconStyle} />
        </Icon>
        <Icon>
          <SearchOutlinedIcon style={IconStyle} />
        </Icon>
        <Icon onClick={() => AddItemWist(item.id)}>
          <FavoriteBorderOutlinedIcon style={IconStyle} />
        </Icon>
      </Info>
      {addedToCart && (
        <AddedContainer>
          <Title>Added to Cart!</Title>
          <Emoji>
            <CheckCircleOutlineOutlinedIcon style={{ fontSize: '1.8rem' }} />
          </Emoji>
        </AddedContainer>
      )}
      {addedToWish && (
        <AddedContainer>
          <Title>Added to Wishlist!</Title>
          <Emoji>
            <CheckCircleOutlineOutlinedIcon style={{ fontSize: '1.8rem' }} />
          </Emoji>
        </AddedContainer>
      )}
    </Container>
  );
};
