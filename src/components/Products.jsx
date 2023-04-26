import styled from 'styled-components';
import { AllProducts } from '../data';
import { Product } from './Product';

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: space-around;
  margin: 0 2rem;
`;
const Title = styled.p`
  font-size: 40px;
  text-align: center;
  margin: 0 1rem;

  overflow-x: hidden;
`;
const UnderLine = styled.div`
  width: 8rem;
  height: 0.3rem;
  background-color: #d1e5f8;
  border-radius: 0.5rem;
  margin: 10px auto;
  margin-bottom: 3rem;
`;

export const Products = () => {
  return (
    <Container>
      <Title>OUR PRODUCTS</Title>
      <UnderLine />
      <Wrapper>
        {AllProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};
