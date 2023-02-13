import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { CartItem } from '../components/CartItem';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ShopContext } from '../context/shop-context';
import { AllProducts } from '../data';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  min-height: 50vh;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
`;
const Total = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  margin-bottom: 3rem;
`;
const TopButton = styled(Link)`
  background: none;
  padding: 10px;
  border: 2px solid ${prop => (prop.type === 'filled' ? 'black' : 'teal')};
  background-color: ${prop => (prop.type === 'filled' ? 'black' : 'white')};
  color: ${prop => (prop.type === 'filled' ? 'white' : 'black')};
  cursor: pointer;
  text-decoration: none;
`;
const TopTexts = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const TopText = styled.p`
  text-decoration: underline;
  font-size: 16px;
`;

export const Cart = () => {
  const { cartItems, GetTotalAmount, BagItems } = useContext(ShopContext);

  let TotalAmountValue = GetTotalAmount();
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton to="/">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({BagItems()})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        {AllProducts.map(product => {
          if (cartItems[product.id]) {
            console.log(cartItems[product.id]);
            return <CartItem data={product} />;
          }
        })}
      </Wrapper>
      <Total>Total: ${TotalAmountValue.toFixed(2)}</Total>
      <Footer />
    </Container>
  );
};
