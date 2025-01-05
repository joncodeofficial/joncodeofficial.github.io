import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <>
      <section id='header' className={`relative w-full mx-auto`}>
        <header>
          <div className='header-container mt-32'>
            <div className='hero-container'>
              <h1
                className='hero-h1 style-p'
                data-section='hero'
                data-value='hero-h1'
              >
                Hola Soy Jonathan Peña
              </h1>

              <h2 className='hero-h2' data-section='hero' data-value='hero-h2'>
                Desarrollador Web
              </h2>

              <blockquote
                className='hero-quote style-p'
                data-section='hero'
                data-value='hero-quote'
              >
                "La educación es lo que queda después de que uno olvida lo que
                ha aprendido en la escuela" <br />
                <cite className='' translate='no'>
                  ~ Albert Einstein
                </cite>
              </blockquote>

              <a
                href='https://jonpena.github.io/CV'
                target='_blank'
                className='btn style-p'
                style={{ '--btn-bgc': '#0e0e22ff', '--btn-clr': '#00a2f2' }}
              >
                <span className='flex items-center gap-x-2'>
                  <img width={22} height={22} src='images/pdf.svg' alt='PDF' />
                  <span>RESUMEN</span>
                </span>
              </a>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default SectionWrapper(Hero, 'hero');
