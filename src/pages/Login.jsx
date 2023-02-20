import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  position: relative;
`;
const Title = styled.p`
  font-size: 30px;
`;
const CloseRegister = styled.button`
  text-decoration: none;
  position: absolute;
  top: 1;
  right: 1rem;
  background: white;
  border: none;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 10px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;
const Submit = styled.input`
  padding: 20px 40px;
  margin-top: 30px;
  background-color: teal;
  color: white;
  align-self: center;
  margin-bottom: 30px;
  border: none;
  cursor: pointer;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Linkbtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  color: black;
  background: none;
  border: none;
`;
const Or = styled.p`
  font-size: 12px;
  margin: 10px 0;
`;

export const Login = () => {
  const { openLogin, setOpenLogin, setOpenRegister } = useContext(ShopContext);

  const createNewAcc = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };
  return (
    <>
      {openLogin && (
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <CloseRegister onClick={() => setOpenLogin(false)}>
              <CloseIcon style={{ fontSize: '30px' }} />
            </CloseRegister>
            <Form>
              <Input type="text" placeholder="email" />
              <Input type="password" placeholder="password" />
              <Submit
                onClick={() => setOpenLogin(false)}
                type="submit"
                value="LOGIN"
              />
            </Form>
            <LinkContainer>
              <Linkbtn>I DON'T REMEMBER THE PASSWORD</Linkbtn>
              <Or>OR</Or>
              <Linkbtn onClick={createNewAcc}>CREATE A NEW ACCOUNT</Linkbtn>
            </LinkContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};
