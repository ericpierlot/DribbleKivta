import styled from 'styled-components';

export const MobileMenu = ({ isClicked, setIsClicked }) => {
  return (
    <Menu isClicked={isClicked}>
      <ul>
        <li>
          <a href='#' onClick={() => setIsClicked(!isClicked)}>
            Home
          </a>
        </li>
        <li>
          <a href='#features' onClick={() => setIsClicked(!isClicked)}>
            Features
          </a>
        </li>
        <li>
          <a href='#pricing' onClick={() => setIsClicked(!isClicked)}>
            Pricing
          </a>
        </li>
        <li>
          <a href='#subscribe' onClick={() => setIsClicked(!isClicked)}>
            Register
          </a>
        </li>
      </ul>
    </Menu>
  );
};

const Menu = styled.div`
  visibility: ${(props) => (props.isClicked ? 'visible' : 'hidden')};
  transition: opacity 500ms ease, visibility 500ms ease;
  opacity: ${(props) => (props.isClicked ? '1' : '0')};
  background-color: #5c6bec;
  position: absolute;
  z-index: 5;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  border-radius: 30px;

  li {
    padding: 1rem 0rem;
    text-align: center;
  }
  li:first-of-type {
    padding-top: 5rem;
  }
  li:last-of-type {
    padding-bottom: 5rem;
  }
`;
