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
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'a a'
    'b b'
    'c d';
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  grid-area: a;
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
  grid-area: b;
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
const TopText = styled(Link)`
  text-decoration: underline;
  font-size: 16px;
  color: black;
`;
const Center = styled.div`
  grid-area: c;
  justify-self: end;
  width: 100%;
  max-width: 800px;
`;
const Summary = styled.div`
  grid-area: d;
  width: 400px;
  margin-left: 4rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 1rem;
  height: 30vh;
  justify-self: end;
`;
const SummaryTitle = styled.div`
  font-size: 25px;
`;
const SumaryItemText = styled.div``;
const SummaryColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1.3rem 0;
`;
const SummaryValue = styled.div``;

export const Cart = () => {
  const { cartItems, GetTotalAmount, BagItems, WishListItems } =
    useContext(ShopContext);

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
            <TopText to="/wishlist">Your Wishlist ({WishListItems()})</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Center>
          {AllProducts.map(product => {
            if (cartItems[product.id]) {
              return <CartItem data={product} />;
            }
          })}
        </Center>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>

          <SummaryColumn>
            <SumaryItemText>Subtotal</SumaryItemText>
            <SummaryValue>${TotalAmountValue.toFixed(2)}</SummaryValue>
          </SummaryColumn>

          <SummaryColumn>
            <SumaryItemText>Estimated Shipping</SumaryItemText>
            <SummaryValue>$ 9.60</SummaryValue>
          </SummaryColumn>

          <SummaryColumn>
            <SumaryItemText>Shipping Discount</SumaryItemText>
            <SummaryValue>$ -5.90</SummaryValue>
          </SummaryColumn>

          <SummaryColumn>
            <SumaryItemText>Total</SumaryItemText>
            <SummaryValue>${TotalAmountValue.toFixed(2)}</SummaryValue>
          </SummaryColumn>

          <TopButton type="filled" local="summary">
            CHECKOUT NOW
          </TopButton>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
};
