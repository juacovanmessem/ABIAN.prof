import './App.css'
import Hero from './components/Hero'
import SobreNosotros from './components/SobreNosotros'
import Contactos from './components/Contactos'
import Programas from './components/Programas'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import Slider from './components/Slider'
import Pagos from './components/Pagos'
import WP from './components/Wp';


function App() {

  return (
    <>
      <div className='text-center lead'>
        <Hero/>
      </div>
      <section className='p-4 bg-1 text-white'>
        <div className='container-lg text-center my-2 p-4'>
          <h1 className='krona-one-regular'>CAPACITACIÓN EN BASES BIOLOGICAS DEL NEURODESARROLLO
          </h1>
          <h5 className='krona-one-regular'>Para Profesionales de la Salud </h5>
          <p className='lead'>
          Conoce cómo los sistemas biológicos influyen en el neurodesarrollo, desde un enfoque único y transformador, basado en evidencia científica integrada a una visión holística de la salud, con herramientas comprensibles y aplicables a los tratamientos de tus pacientes. 
          </p>
          <p className='lead'>
          Este curso está diseñado para brindarte conocimiento teórico y práctico, basado en la experiencia de los capacitadores, con resultados comprobados.
          </p>
          <p className='lead'>
            <strong>¡Inscribete hoy y potencia tu práctica profesional con información y herramientas clave para el manejo de los TEA desde un enfoque integral!</strong>
          </p>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <button className='bttn-1 mx-4 my-2'><a href='#AboutUs'>Conoce a la academia</a></button>
          <button className='bttn-1 mx-4 my-2'><a href='#Pagos'>Inscribirme</a></button>
          <button className='bttn-1 mx-4 my-2'><a href="https://drive.google.com/drive/u/0/folders/1t6sLKdE-7q92FXNnLrJHHx0HVC5r0_T4">Ver mas cursos disponibles</a></button>
        </div>
      </section>
      <div>
        <Programas/>
      </div>
      <div className='container p-4 mt-4'>
        <div>
          <h2 className='krona-one-regular text-center my-3'>
            ¿Qué opinaron nuestros estudiantes?
          </h2>
        </div>
        <Slider />
      </div>
      <div id='Pagos'>
        <Pagos/>
      </div>
      <div id='AboutUs'>
        <SobreNosotros/>
      </div>
      <div>
        <PreguntasFrecuentes/>
      </div>
      <div className='container'>
        <Contactos/>
      </div>

      <div className='fixed-bottom-right'>
        <WP/>
      </div>
    </>
  )
}

export default App
