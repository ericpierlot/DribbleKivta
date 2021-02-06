import { Button } from './Button';
import puce from '../assets/images/puce.png';
import puceDisabled from '../assets/images/puce_disabled.png';
import styled from 'styled-components';

export const CardSuscriptions = ({
  formule,
  image,
  title,
  primary,
  card,
  recommended,
  description,
  price,
  gift,
  account,
}) => {
  return (
    <CardContainer recommended={recommended} title={title}>
      {recommended && <BulleRecommended />}

      <img src={image} alt='' style={{ paddingTop: recommended && '2rem' }} />
      <h3>{title}</h3>
      <p>Perfect yet suitable for {description} usage only and paid monthly</p>
      <p>{price}</p>
      <hr />
      <div>
        <ul>
          <li>{gift} Gifts Cards / day</li>
          <li>{account} Account Usage</li>
          <li>No Cancelation Fee</li>
          <li>24/7 Customer Service</li>
        </ul>
      </div>
      <Button
        text='Select Plan'
        secondary={primary ? false : true}
        card={card}
      />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  transform: ${(props) => (props.recommended ? 'translateY(-5%)' : '')};
  @media (max-width: 1200px) {
    transform: none;
  }
  position: relative;
  min-height: 500px;
  width: 350px;
  padding: 2rem;
  border-radius: 30px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.05);
  transition: box-shadow 330ms ease;

  h3 {
    padding: 2rem 0;
  }
  div {
    text-align: left;

    ul {
      list-style-image: url(${puce});
      list-style-position: inside;
    }
    li {
      padding: 1rem 0;
    }

    li:nth-of-type(3) {
      opacity: ${(props) => props.title === 'Single' && '0.2'};
    }
    li:nth-of-type(4) {
      opacity: ${(props) =>
        props.title === 'Single' || props.title === 'Couple' ? '0.2' : '1'};
    }
  }

  img {
    width: 30%;
  }

  p:nth-of-type(2) {
    padding: 2rem 0;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    &::before {
      content: '$';
      color: #cecece;
    }
  }

  ul {
    li:last-of-type {
      padding-bottom: 2rem;
    }
    li:first-of-type {
      padding-top: 2rem;
    }
  }

  &:hover {
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 840px) {
    width: 100%;
  }
`;

const BulleRecommended = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 50px;
  border-radius: 30px;
  background-color: #ff93b3;
  color: white;
  &::after {
    content: 'Recommended';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 1rem;
  }
`;
