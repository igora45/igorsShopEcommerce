import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};
