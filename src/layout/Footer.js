import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';

export const Footer = ({ title }) => {
  return (
    <footer>
      <Wrapper>
        <Kivta>
          <h2>
            <img src={logo} alt='Représentation du site' /> {title}
          </h2>
          <p>
            Focussing to create people happiness that trusted since 2015 with
            low and affordable subscription cost.
          </p>
          <div>
            <a href='#'>
              <img src={facebook} alt='' />
            </a>
            <a href='#'>
              <img src={twitter} alt='' />
            </a>
            <a href='#'>
              <img src={instagram} alt='' />
            </a>
          </div>
        </Kivta>
        <About>
          <h3>About</h3>
          <ul>
            <li>
              <a href='#'>Company</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
          </ul>
        </About>
        <About>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Application</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
          </ul>
        </About>
        <About>
          <h3>Legals</h3>
          <ul>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Copyright</a>
            </li>
            <li>
              <a href='#'>Disclaimer</a>
            </li>
            <li>
              <a href='#'>Terms</a>
            </li>
          </ul>
        </About>
      </Wrapper>
    </footer>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1250px) {
    justify-content: center;

    flex-wrap: wrap;
    gap: 3rem;
  }
`;

const Kivta = styled.div`
  flex-grow: 1;

  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 60%;
    line-height: 2rem;
    padding-bottom: 2rem;
  }
  div {
    display: flex;
    gap: 2rem;
    img {
      width: 3rem;
    }
  }
  @media (max-width: 1250px) {
    h2 {
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }
`;
const About = styled.div`
  width: 20%;
  h3 {
    padding-bottom: 2rem;
  }
  li {
    padding: 1rem 0;
  }
  @media (max-width: 1250px) {
    width: 40%;
    flex-grow: 1;
    text-align: center;
  }
`;
