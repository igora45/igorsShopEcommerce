import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { WishlistItem } from '../components/WishlistItem';
import { ShopContext } from '../context/shop-context';
import { AllProducts } from '../data';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  min-height: 50vh;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
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
const TopText = styled(Link)`
  text-decoration: underline;
  font-size: 16px;
  color: black;
`;

export const WishList = () => {
  const { BagItems, wishItems } = useContext(ShopContext);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>WISHLIST</Title>
        <Top>
          <TopButton to="/">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText to="/cart">Shopping Bag ({BagItems()})</TopText>
            <TopText to="/wishlist">Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        {AllProducts.map(product => {
          if (wishItems[product.id] > 0) {
            return <WishlistItem item={product} />;
          }
        })}
      </Wrapper>

      <Footer />
    </Container>
  );
};
