import styled from 'styled-components';
import subscribe from '../../assets/images/subscribe.png';
import icon from '../../assets/images/icon_input.png';
import { Button } from '../../components/Button';

export const Subscribe = (params) => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <img src={subscribe} alt='' />
          <h2>Let's Stay in Touch</h2>
          <p>
            Subscribe to our weekly newsletter and get a 7days free-trial away
            for new user.
          </p>
          <DivInput>
            <label htmlFor='email'>
              <img src={icon} alt='enveloppe' />
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Enter your e-mail here'
            />
            <Button text='Subscribe' />
          </DivInput>
        </Container>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 10rem;
  background-color: #fafafa;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 50px;
  background-color: #f2f3f8;
  text-align: center;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
  align-items: center;
  img {
    width: 15%;
  }
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 70%;
    line-height: 2rem;
    margin: auto;
  }
  padding: 5rem 0;
  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 840px) {
    width: 100%;
  }
`;

const DivInput = styled.div`
  height: auto;
  background-color: white;
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 20px;
  gap: 1rem;
  img {
    margin-left: 1rem;
    width: auto;
    height: 25px;
  }
  input {
    width: 100%;
    border: none;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
    outline: none;
    &:focus {
      border-bottom: 1px solid black;
    }
  }

  @media (max-width: 840px) {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    input {
      text-align: center;
    }
  }
`;
