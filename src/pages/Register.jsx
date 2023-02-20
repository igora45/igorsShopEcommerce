import { useContext, useState } from 'react';
import styled from 'styled-components';
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
  background-color: white;
  width: 60%;
  max-width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.p`
  font-size: 30px;
  margin-bottom: 1rem;
  margin-right: 3rem;
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
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;
const Input = styled.input`
  font-size: 16px;
  width: 45%;
  margin: 20px 10px 0 0;
  padding: 10px 5px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: darkgray;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Agreement = styled.p`
  font-size: 14px;
  width: 95%;
`;
const Span = styled.span`
  font-weight: bold;
`;
const Agree = styled.input`
  align-self: start;
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  &:active {
    background: blue;
    color: blue;
  }
  &:checked {
    background-color: blue;
  }
`;
const Button = styled.button`
  padding: 20px 40px;
  background: none;
  border: none;
  background: teal;
  color: white;
  align-self: center;
  cursor: pointer;
`;
const Linkbtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  color: black;
  background: none;
  border: none;
  margin-top: 1.5rem;
`;
export const Register = () => {
  const [checked, setChecked] = useState(false);
  const { openRegister, setOpenRegister, setOpenLogin } =
    useContext(ShopContext);

  const goToLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };
  return (
    <>
      {openRegister ? (
        <Container>
          <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <CloseRegister onClick={() => setOpenRegister(false)}>
              <CloseIcon style={{ fontSize: '30px' }} />
            </CloseRegister>
            <Form>
              <Input type="text" placeholder="email" />
              <Input type="number" placeholder="number" />
              <Input type="password" placeholder="password" />
              <Input type="password" placeholder="confirm password" />
            </Form>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the
              <Span> PRIVACY POLICY</Span>
            </Agreement>
            <Agree
              type="checkbox"
              onClick={() => setChecked(!checked)}
              placeholder="confirm password"
            />
            <Button onClick={() => setOpenRegister(false)}>
              CREATE ACCOUNT
            </Button>
            <Linkbtn onClick={goToLogin}>
              Already has an account ? <br />
              Login
            </Linkbtn>
          </Wrapper>
        </Container>
      ) : (
        ''
      )}
    </>
  );
};
