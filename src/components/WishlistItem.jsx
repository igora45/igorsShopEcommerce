import styled from 'styled-components';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 1rem;
  column-gap: 1.5rem;
  row-gap: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  transition: all 200ms ease;
  border-radius: 5px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
const Image = styled.img`
  width: 100%;
  max-width: 180px;
  height: 180px;
  object-fit: cover; ;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1.5rem 1rem;
  width: 100%;
`;
const ProductInfoContainer = styled.div`
  display: flex;
`;
const ProductText = styled.div`
  font-weight: bold;
`;
const ProductName = styled.div`
  font-size: 20px;
  display: flex;
`;
const ProductPrice = styled.div`
  font-size: 16px;
  display: flex;
`;

const Icons = styled.div`
  display: flex;
`;
const Icon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 2rem;
  margin-right: 1rem;
`;

const RemoveContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
`;
const RemoveItem = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 0.3rem;
  width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
`;

const Title = styled.p`
  color: #ff2600;
  font-size: 30px;
  text-align: center;
`;
const ProductsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
const InfoProduct = styled.div``;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
`;
const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: ${prop => (prop.type === 'yes' ? '#ff2600' : 'white')};
  border-color: ${prop => (prop.type === 'yes' ? '#ff2600' : 'lightgray')};
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  color: ${prop => (prop.type === 'yes' ? 'white' : 'black')};
  &:hover {
    background-color: ${prop =>
      prop.type === 'yes' ? '#fc2600c3' : '#f3f3f3'};
  }
`;

const AddedContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  width: 10rem;
  height: 45%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleAddToCart = styled.p`
  color: white;
  margin-bottom: 1rem;
  font-size: 20px;
`;
const Emoji = styled.p`
  color: white;
`;

export const WishlistItem = ({ item }) => {
  const { RemoveFromWishList, AddToCart } = useContext(ShopContext);
  const [remove, setRemove] = useState(false);
  const [addToCartNow, setAddToCartNow] = useState(false);

  const AddedToCart = item => {
    setAddToCartNow(true);
    AddToCart(item);

    setTimeout(() => {
      setAddToCartNow(false);
    }, 1000);
  };
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />
        <Info>
          <ProductInfoContainer>
            <ProductName>
              <ProductText>Product: </ProductText>
              {item.productName}
            </ProductName>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductPrice>
              <ProductText>Price: </ProductText>${item.productPrice}
            </ProductPrice>
          </ProductInfoContainer>
          <Icons>
            <Icon onClick={() => setRemove(true)}>
              <FavoriteBorderOutlinedIcon style={{ color: 'red' }} />
            </Icon>
            <Icon onClick={() => AddedToCart(item.id)}>
              <ShoppingCartOutlinedIcon style={{ color: 'red' }} />
            </Icon>
          </Icons>
        </Info>
        {remove && (
          <RemoveContainer>
            <RemoveItem>
              <Title>You want to remove this item?</Title>
              <ProductsInfo>
                <InfoProduct>Product: {item.productName}</InfoProduct>
                <InfoProduct>Price: ${item.productPrice}</InfoProduct>
              </ProductsInfo>
              <Buttons>
                <Button type="yes" onClick={() => RemoveFromWishList(item.id)}>
                  YES
                </Button>
                <Button type="no" onClick={() => setRemove(false)}>
                  NO
                </Button>
              </Buttons>
            </RemoveItem>
          </RemoveContainer>
        )}
        {addToCartNow && (
          <AddedContainer>
            <TitleAddToCart>Added to Cart!</TitleAddToCart>
            <Emoji>
              <ShoppingCartOutlinedIcon style={{ fontSize: '1.8rem' }} />
            </Emoji>
          </AddedContainer>
        )}
      </Wrapper>
    </Container>
  );
};
