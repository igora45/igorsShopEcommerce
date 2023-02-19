import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { mobile } from '../responsive';
import { Register } from '../pages/Register';
import { ShopContext } from '../context/shop-context';
import { Login } from '../pages/Login';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Wrapper = styled.div`
  height: 4.5rem;
  background: white;
  box-sizing: border-box;
  padding: 10px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${prop => mobile({ height: '4.5rem' })}
  ${prop =>
    prop.value &&
    mobile({
      display: `${prop.value ? 'flex' : 'flex'}`,
      flexDirection: 'column',
      position: `${prop.value ? 'fixed' : 'none'}`,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      justifyContent: 'start',
      alignItems: 'center',
      rowGap: '3rem',
    })}
`;
const Language = styled.span`
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
  ${prop => mobile({ display: 'none' })}
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
  ${prop => mobile({ fontSize: '40px', textAlign: 'start' })}
  ${prop => prop.value && mobile({ flex: 0, marginTop: '7rem' })}
`;
const Logo = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 30px;
  ${prop => prop.value && mobile({ fontSize: '50px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  column-gap: 0.8rem;
  align-items: center;

  ${prop => mobile({ display: 'none' })}
  ${prop =>
    prop.value &&
    mobile({
      display: 'flex',
      flex: 0,
      flexDirection: 'column',
      rowGap: '4rem',
    })}
`;
const MenuLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color: black;
  ${prop => prop.value && mobile({ fontSize: '20px' })}
`;
const LoginContainer = styled.div`
  position: fixed;
`;
const OpenSidebar = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;
  color: black;
  ${prop => mobile({ display: 'flex' })}
  ${prop =>
    mobile({
      position: 'absolute',
      top: '2rem',
      right: '1rem',
      transform: 'translateY(-50%)',
    })}
`;

export const Navbar = () => {
  const {
    BagItems,
    openLogin,
    setOpenLogin,
    openRegister,
    setOpenRegister,
    WishListItems,
  } = useContext(ShopContext);

  const [responsiveValue, setResponsiveValue] = useState(false);
  return (
    <Container>
      <LoginContainer>
        {openRegister && <Register />}
        {openLogin && <Login />}
      </LoginContainer>
      <Wrapper value={responsiveValue}>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <ButtonSearch>
              <SearchIcon style={{ color: 'gray', fontSize: '23px' }} />
            </ButtonSearch>
          </SearchContainer>
        </Left>
        <Center value={responsiveValue}>
          <Logo value={responsiveValue} to="/">
            IGOR.
          </Logo>
        </Center>
        <Right value={responsiveValue}>
          <MenuLink
            value={responsiveValue}
            onClick={() => setOpenRegister(true)}
          >
            REGISTER
          </MenuLink>
          <MenuLink value={responsiveValue} onClick={() => setOpenLogin(true)}>
            SIGN IN
          </MenuLink>
          <MenuLink to="/wishlist">
            <Badge badgeContent={WishListItems()} color="primary">
              <FavoriteBorderOutlinedIcon
                style={{ fontSize: '1.7rem' }}
                color="black"
              />
            </Badge>
          </MenuLink>
          <MenuLink to="/cart">
            <Badge badgeContent={BagItems()} color="primary">
              <ShoppingCartOutlinedIcon
                style={{ fontSize: '1.7rem' }}
                color="black"
              />
            </Badge>
          </MenuLink>
        </Right>
        <OpenSidebar onClick={() => setResponsiveValue(!responsiveValue)}>
          <MenuIcon style={{ fontSize: '35px' }} />
        </OpenSidebar>
      </Wrapper>
    </Container>
  );
};
