import styled from 'styled-components';

export const Button = ({ text, secondary, card }) => {
  return (
    <MainButton secondary={secondary ? true : false} card={card ? true : false}>
      {text}
    </MainButton>
  );
};

const MainButton = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => (props.secondary ? '#fff' : '#5c6bec')};
  padding: ${(props) => (props.secondary ? '1.2rem 3rem' : '1.2rem 2rem')};
  border: ${(props) =>
    props.secondary ? '#5c6bec solid 2px' : 'transparent solid 2px'};
  border-radius: 15px;
  color: ${(props) => (props.secondary ? '#5c6bec' : '#fff')};
  width: ${(props) => (props.card ? '100%' : '')};
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 330ms ease;
  &:hover {
    background-color: ${(props) => (props.secondary ? '#5c6bec' : '#fff')};
    color: ${(props) => (props.secondary ? '#fff' : '#5c6bec')};
    border: ${(props) => (props.secondary ? '' : '#5c6bec solid 2px')};
  }
`;
