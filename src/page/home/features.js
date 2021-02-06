import styled from 'styled-components';
import { Button } from '../../components/Button';
import feature1 from '../../assets/images/feature1.png';
import feature2 from '../../assets/images/feature2.png';
import puce from '../../assets/images/puce.png';

export const Features = () => {
  return (
    <>
      <Section id='features'>
        <Container>
          <BlocImage>
            <img src={feature1} alt='' />
          </BlocImage>
          <BlocText>
            <div>
              <h2>Personalize Your Own Gifts Cards</h2>
              <p>
                Make it special by personalizing the gift card that you want to
                give. Make it special and make it awesome!
              </p>
              <Button text='Create Mine' />
            </div>
          </BlocText>
        </Container>
      </Section>
      <Section>
        <Container2>
          <BlocText2>
            <h2>Private, Exclusive, and Special!</h2>
            <p style={{ marginBottom: '0' }}>
              It's special and private, just for you and your loved one.
            </p>
            <p>Here is some reason why you should choose Kivta:</p>
            <div>
              <ul>
                <li>100% Secured</li>
                <li>Easy to Personalized</li>
                <li>Low Subscription Price</li>
              </ul>
            </div>
          </BlocText2>
          <BlocImage2>
            <img src={feature2} alt='' />
          </BlocImage2>
        </Container2>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding-top: 10rem;
  background-color: #fafafa;
  min-height: 100vh;
  padding-bottom: 10rem;
  @media (max-width: 1250px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  /* margin-left: auto; */
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1250px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;
const Container2 = styled.div`
  width: 80%;
  margin: auto;
  /* margin-left: auto; */
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BlocText = styled.div`
  div {
    width: 80%;
    margin-left: auto;
  }
  h2 {
    width: 100%;
    padding: 0 0 3rem 0;
    line-height: 6rem;
  }
  p {
    width: 80%;
    line-height: 2rem;
    margin: 0 0 3rem 0;
  }

  @media (max-width: 1250px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: 0;
    }
    h2 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin: auto;
    }
  }
  @media (max-width: 840px) {
    h2 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

const BlocText2 = styled.div`
  h2 {
    width: 80%;
    padding: 0 0 3rem 0;
    line-height: 6rem;
  }
  p {
    width: 80%;
    line-height: 2rem;
    margin: 0 0 3rem 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  ul {
    li {
      background: url(${puce}) no-repeat left top;
      padding: 0.5rem 3rem;
      font-weight: bold;
      margin-bottom: 2rem;
      color: #232323;
    }
  }
  @media (max-width: 1250px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: 0;
    }
    h2 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin: auto;
    }
  }
  @media (max-width: 840px) {
    width: 100%;
    h2 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

const BlocImage = styled.div`
  img {
    float: left;
    width: 100%;
  }
  @media (max-width: 1250px) {
    width: 50%;
    img {
      width: 100%;
    }
    margin: auto;
  }
`;
const BlocImage2 = styled.div`
  img {
    float: right;
    width: 100%;
  }
  @media (max-width: 1250px) {
    width: 50%;
    img {
      width: 100%;
    }
    margin: auto;
  }
  padding-bottom: 5rem;
`;
