import styled from 'styled-components';
import { Button } from '../../components/Button';
import happy from '../../assets/images/happy.png';
import walmart from '../../assets/images/walmart.png';
import amazon from '../../assets/images/amazon.png';
import lotte from '../../assets/images/lotte.png';

export const Hero = (params) => {
  return (
    <>
      <Section>
        <IMG src={happy} alt='' />
        <Container>
          <BlocText>
            <h2>Love Delivered, Happiness Created</h2>
            <p>
              Creating happiness for your beloved person is not difficult, just
              send a digital gift card and make everyone smile!
            </p>
            <Button text='Get Started' />
          </BlocText>
        </Container>
        {/* <BlocImage>
          <img src={happy} alt='' />
        </BlocImage> */}
        <BottomHero primary>
          <Wrapper>
            <Partners>
              <img src={walmart} alt='walmart représentation' />
              <img src={amazon} alt='amazon représentation' />
              <img src={lotte} alt='lotte représentation' />
            </Partners>
          </Wrapper>
        </BottomHero>
      </Section>
    </>
  );
};

const IMG = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  @media (max-width: 1250px) {
    z-index: -5;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

const BlocText = styled.div`
  z-index: 3;
  width: 50%;
  h2 {
    padding: 0 0 3rem 0;
    line-height: 6rem;
  }
  p {
    width: 80%;
    line-height: 2rem;
    margin: 0 0 3rem 0;
  }

  @media (max-width: 1250px) {
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
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 0 2rem;
  }
  @media (max-width: 840px) {
    h2 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Partners = styled.div`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  img {
    width: 208px;
    height: 50px;
  }
  @media (max-width: 1250px) {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 840px) {
    width: 100%;
    flex-direction: column;
    img {
      width: 248px;
      margin: auto;
    }
  }
`;
const BottomHero = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 2rem 0;
  @media (max-width: 1250px) {
    z-index: 99;
  }
`;
