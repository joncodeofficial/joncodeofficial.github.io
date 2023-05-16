import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const $formSubmit = document.getElementById('formulario');
    const $sendBtn = document.querySelector('.send-btn');

    fetch('https://formsubmit.co/ajax/15859187a6f1f1f878e69999069e6362', {
      method: 'POST',
      body: new FormData(e.target),
    }).then((res) => {
      if (res.ok) {
        $sendBtn.classList.add('send');
        window.setTimeout(() => $sendBtn.classList.remove('send'), 2500);
        $formSubmit.reset();
      }
    });
  };

  return (
    <motion.div
      variants={fadeIn(
        'up',
        'spring',
        0.32,

        0.75
      )}
    >
      <section id='contact'>
        <div className='text-center pb-4'>
          <h2
            className={`${styles.sectionHeadText} font-purple`}
            data-section='contact'
            data-value='contact-h2'
          >
            Contáctame
          </h2>
        </div>

        <div className='contact-container'>
          <div className='box'>
            <div className='contact Form'>
              <form
                id='formulario'
                action='#'
                autoComplete='off'
                onSubmit={handleSubmit}
              >
                <div className='form-container'>
                  <div className='row50'>
                    <div className='inputBox'>
                      <input
                        type='text'
                        id='nombre'
                        name='name'
                        title='Campo obligatorio'
                        placeholder=' '
                        required
                        pattern='[a-zA-ZÀ-ÿ]{2,20}'
                        maxLength={20}
                      />
                      <p data-section='contact' data-value='contact-nameError'>
                        El nombre debe tener de 2 a 20 caracteres y solo puede
                        contener letras
                      </p>
                      <label
                        htmlFor='nombre'
                        data-section='contact'
                        data-value='contact-name'
                      >
                        Nombre
                      </label>
                    </div>

                    <div className='inputBox'>
                      <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        placeholder=' '
                        pattern='[a-zA-ZÀ-ÿ]{2,20}'
                        maxLength={20}
                      />
                      <p
                        data-section='contact'
                        data-value='contact-lastnameError'
                      >
                        El apellido debe tener de 2 a 20 caracteres y solo puede
                        contener letras
                      </p>
                      <label
                        htmlFor='apellido'
                        data-section='contact'
                        data-value='contact-lastname'
                      >
                        Apellido
                      </label>
                    </div>
                  </div>

                  <div className='row50'>
                    <div className='inputBox'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        title='Campo obligatorio'
                        placeholder=' '
                        required
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                      />
                      <p data-section='contact' data-value='contact-emailError'>
                        El correo electrónico solo puede contener letras,
                        números, puntos, guiones y guiones bajos
                      </p>
                      <label
                        htmlFor='email'
                        data-section='contact'
                        data-value='contact-email'
                      >
                        Correo electrónico
                      </label>
                    </div>

                    <div className='inputBox'>
                      <input
                        type='tel'
                        name='phone'
                        id='phone'
                        placeholder=' '
                        pattern='[\d]{7,12}$'
                        maxLength={12}
                      />
                      <p data-section='contact' data-value='contact-emailError'>
                        El Teléfono debe tener de 7 a 12 caracteres y solo puede
                        contener numeros
                      </p>
                      <label
                        htmlFor='phone'
                        data-section='contact'
                        data-value='contact-phone'
                      >
                        Teléfono
                      </label>
                    </div>
                  </div>

                  <div className='row100'>
                    <div className='inputBox'>
                      <textarea
                        name='message'
                        id='message'
                        maxLength={255}
                        placeholder='mensaje...'
                      ></textarea>
                    </div>
                  </div>

                  <div className='row100'>
                    <div className='inputBox'>
                      <button
                        type='submit'
                        className='btn'
                        style={{
                          '--btn-bgc': '#050816',
                          '--btn-clr': '#e1148b',
                        }}
                      >
                        <span
                          data-section='contact'
                          data-value='contact-submit'
                        >
                          Enviar
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(Contact, 'contact');
