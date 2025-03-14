import {
  Experience,
  Hero,
  Navbar,
  Works,
  Stars,
  Universe,
  Skills,
  Footer,
} from './components';

const App = () => {
  return (
    <>
      <Universe />
      <Navbar />
      <Hero />
      <Experience />
      <Works />
      <div className='relative z-0'>
        <Skills />
        <Stars />
        <Footer />
      </div>
    </>
  );
};

export default App;
