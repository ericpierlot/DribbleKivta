import styled from 'styled-components';
import { CardSuscriptions } from '../../components/CardSubscription';
import sub1 from '../../assets/images/sub1.png';
import sub2 from '../../assets/images/sub2.png';
import sub3 from '../../assets/images/sub3.png';

export const Subscriptions = (params) => {
  return (
    <Section id='pricing'>
      <Top>
        <h2>Best Subscription Plan</h2>
        <p>
          Affordable price for subscription plan with a lot of features in each
          plan, choose the best and fir for you.
        </p>
      </Top>
      <Container>
        <CardSuscriptions
          formule='1'
          title='Single'
          image={sub1}
          card={true}
          description='personal'
          price='10'
          gift='10'
          account='1'
        />
        <CardSuscriptions
          formule='2'
          title='Couple'
          image={sub2}
          primary={true}
          card={true}
          recommended={true}
          description='2 persons'
          price='15'
          gift='100'
          account='2'
        />
        <CardSuscriptions
          formule='3'
          title='Family'
          image={sub3}
          card={true}
          description='up to 5 persons'
          price='45'
          gift='Unlimited'
          account='5'
        />
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background-color: #fafafa;
  min-height: 100vh;
`;

const Top = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 70%;
    line-height: 2rem;
    margin: auto;
  }
  margin-bottom: 10rem;

  @media (max-width: 840px) {
    margin-bottom: 5rem;
    h2 {
      font-size: 2.5rem;
    }
    p {
      width: 90%;
    }
    width: 90%;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1550px) {
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
