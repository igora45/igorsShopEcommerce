import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  height: 20rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
  column-gap: 1.5rem;
  row-gap: 2rem;

  position: relative;
  width: 100%;
  max-width: 600px;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;
const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  justify-content: space-evenly;
`;
const ProductName = styled.div`
  font-size: 20px;
`;
const ProductPrice = styled.div`
  font-size: 16px;
`;
const InfoItems = styled.div``;
const ColorContainer = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
`;
const Color = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${props => String(props.ProductColor)};
  border-radius: 50%;
  margin-left: 0.5rem;
  cursor: pointer;
`;
const ItemsQtt = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonQtt = styled.button`
  height: 1rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: None;
  cursor: pointer;
`;
const ItemQtt = styled.input`
  width: 1rem;
  display: flex;
  text-align: center;
  background: none;
  border: none;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

export const CartItem = prop => {
  const { img, id, productName, productPrice, color } = prop.data;

  const { cartItems, AddToCart, RemoveFromCart } = useContext(ShopContext);
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <InfoProduct>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ColorContainer>
            Color:
            {color.map(item => (
              <Color ProductColor={item}></Color>
            ))}
          </ColorContainer>
          <ItemsQtt>
            <ButtonQtt onClick={() => RemoveFromCart(id)}>
              <RemoveIcon />
            </ButtonQtt>
            <ItemQtt value={cartItems[id]}></ItemQtt>
            <ButtonQtt onClick={() => AddToCart(id)}>
              <AddIcon />
            </ButtonQtt>
          </ItemsQtt>
        </InfoProduct>
      </Wrapper>
    </Container>
  );
};
