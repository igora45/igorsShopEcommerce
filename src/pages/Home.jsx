import React from 'react';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Slider } from '../components/Slider';
import { Login } from './Login';

const Container = styled.div``;

export const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
