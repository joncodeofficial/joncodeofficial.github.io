import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
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
    <BrowserRouter>
      <Universe />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <div className='relative z-0'>
        <Skills />
        <Contact />
        <Stars />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
