import { Features } from './home/features';
import { Hero } from './home/hero';
import { Subscribe } from './home/subscribe';
import { Subscriptions } from './home/subscriptions';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Subscriptions />
      <Subscribe />
    </>
  );
};
