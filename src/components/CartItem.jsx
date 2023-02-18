import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 1rem;
  column-gap: 1.5rem;
  row-gap: 2rem;
  padding: 1rem;
  position: relative;
  width: 100%;
  max-width: 800px;
  transition: all 200ms ease;
  border-radius: 5px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;
const Image = styled.img`
  min-width: 180px;
  height: 180px;
  object-fit: cover;
`;
const InfoProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  padding: 1.5rem 1rem;
  width: 100%;
  align-items: center;
`;
const Span = styled.span`
  font-weight: bold;
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
          <ProductName>
            <Span>Product: </Span>
            {productName}
          </ProductName>
          <ProductPrice>
            <Span>Price: </Span>${productPrice}
          </ProductPrice>
          <ColorContainer>
            <Span>Color: </Span>
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
