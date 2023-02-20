import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 1;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${prop => prop.slideIndex * -100}vw);
  transition: all 0.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;

  /* background-color: ${prop => (prop.bg ? '' : '')} */
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 80%;
  width: 750px;
`;
const InfoContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 1500px) {
    width: 30rem;
  }
  @media only screen and (max-width: 1280px) {
    width: 100%;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 5rem;
  @media only screen and (max-width: 1500px) {
    font-size: 3.5rem;
  }
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  @media only screen and (max-width: 1500px) {
    max-width: 30rem;
    font-size: 18px;
  }
  @media only screen and (max-width: 1280px) {
    width: 100%;
    font-size: 18px;
    margin: 50px auto;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};
