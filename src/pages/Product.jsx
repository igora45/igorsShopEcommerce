import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import img01 from '../assets/products/product01.png';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin: 3rem 0;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: 200;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 20px 0;
  width: 50%;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;
const FilterColor = styled.div`
  margin-right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${prop => prop.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 7px 10px;
`;
const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AddContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const Amount = styled.div`
  min-width: 30px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  padding: 3px;
  font-size: 20px;
`;

const Button = styled.div`
  padding: 15px;
  border: 2px solid teal;
  color: black;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img01} />
        </ImgContainer>
        <InfoContainer>
          <Title>Life is Good</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            non, eligendi iure aperiam, doloremque blanditiis odio alias qui
            magni totam pariatur? Optio deleniti cupiditate earum recusandae
            explicabo a quo repellat neque ea nisi consequuntur, eum quam quas
            ab ratione natus?
          </Desc>
          <Price>$ 25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon />
              <Amount>2</Amount>
              <AddOutlinedIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
