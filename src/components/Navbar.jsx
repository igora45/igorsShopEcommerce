import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Register } from '../pages/Register';
import { ShopContext } from '../context/shop-context';
import { Login } from '../pages/Login';

const Container = styled.div`
  height: 4.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
`;
const Wrapper = styled.div`
  padding: 10px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Language = styled.span`
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  padding: 5px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  max-width: 250px;
  margin-left: 1.5rem;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
`;
const ButtonSearch = styled.button`
  background: none;
  border: none;
  padding: 0;
  padding: 0;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 30px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  column-gap: 0.8rem;
  align-items: center;
`;
const MenuLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color: black;
`;
const LoginContainer = styled.div`
  position: fixed;
`;

export const Navbar = () => {
  const { BagItems, openLogin, setOpenLogin, openRegister, setOpenRegister } =
    useContext(ShopContext);
  return (
    <Container>
      <LoginContainer>
        {openRegister && <Register />}
        {openLogin && <Login />}
      </LoginContainer>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <ButtonSearch>
              <SearchIcon style={{ color: 'gray', fontSize: '23px' }} />
            </ButtonSearch>
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">IGOR.</Logo>
        </Center>
        <Right>
          <MenuLink onClick={() => setOpenRegister(true)}>REGISTER</MenuLink>
          <MenuLink onClick={() => setOpenLogin(true)}>SIGN IN</MenuLink>
          <MenuLink to="/cart">
            <Badge badgeContent={BagItems()} color="primary">
              <ShoppingCartOutlinedIcon color="black" />
            </Badge>
          </MenuLink>
        </Right>
      </Wrapper>
    </Container>
  );
};
