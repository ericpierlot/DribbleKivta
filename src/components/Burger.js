import './burger.modules.css';
import { MobileMenu } from './MobileMenu';

export const Burger = ({ setIsClicked, isClicked }) => {
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <MobileMenu isClicked={isClicked} setIsClicked={setIsClicked} />
      <button
        className={`burger ${isClicked ? 'active' : ''}`}
        onClick={handleClick}
      >
        <span className='bar bar-1'></span>
        <span className='bar bar-2'></span>
      </button>
    </>
  );
};
