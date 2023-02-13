import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import paymentImage from '../assets/footer/payment.png';

const Container = styled.div`
  display: flex;
  min-height: 30vh;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const SocialIcon = styled.a`
  height: 40px;
  width: 40px;
  background: #${prop => prop.color};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;
const Image = styled.img``;
const IconMarginStyle = {
  marginRight: '10px',
};
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>IGOR.</Logo>
        <Desc>
          There are many varaitions of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believalbe.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999" href="">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={IconMarginStyle} /> 782 Mavc son, South
          America 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon style={IconMarginStyle} /> +55 11 912345678
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={IconMarginStyle} /> contact@igor.dev
        </ContactItem>
        <Image src={paymentImage} />
      </Right>
    </Container>
  );
};
