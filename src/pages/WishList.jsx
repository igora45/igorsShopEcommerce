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
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 53vh;
  max-width: 1600px;
  margin: 0 auto; ;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 12px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  margin-bottom: 3rem;
  ${mobile({ justifyContent: 'center', columnGap: '1rem' })}
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    row-gap: 1rem;
  }
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
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const TopText = styled(Link)`
  text-decoration: underline;
  font-size: 16px;
  color: black;
`;

const Center = styled.div`
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-self: center;
`;

export const WishList = () => {
  const { BagItems, wishItems, WishListItems } = useContext(ShopContext);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>WISHLIST</Title>
        <Top>
          <TopButton to="/" close="no">
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText to="/cart">Shopping Bag ({BagItems()})</TopText>
            <TopText to="/wishlist">Your Wishlist ({WishListItems()})</TopText>
          </TopTexts>
          <TopButton type="filled" close="yes">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Center key="">
          {AllProducts.map(product => {
            if (wishItems[product.id] > 0) {
              return <WishlistItem item={product} />;
            }
          })}
        </Center>
      </Wrapper>

      <Footer />
    </Container>
  );
};
