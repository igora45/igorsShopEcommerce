import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin: 1.5rem 0;
`;
const FormContainer = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 8px 5px;
  font-size: 1rem;
  border: none;
  border-right: none;
  &:focus {
    outline: none;
  }
  flex: 10;
  &::placeholder {
    color: darkgray;
  }
`;
const Button = styled.button`
  padding: 5px 20px;
  border: none;
  flex: 1;
  background: teal;
  color: white;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <FormContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </FormContainer>
    </Container>
  );
};