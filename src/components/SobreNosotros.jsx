import React from 'react'
import PerfilDemo from '../assets/perfil.jpg'
import Cecilia from '../assets/cecilia.jpg'
import Graciela from '../assets/graciela.jpg'

function SobreNosotros() {
  return (
    <div className='bg-2 p-3 lead text-center'>
      <h2 className='text-center text-white krona-one-regular mb-2'>Sobre la Academia</h2>
      <p className='p-2 mx-4 text-white lead'>ABIAN Academia es un espacio dedicado a la formación de profesionales de la salud, terapeutas y padres en el área del autismo y el neurodesarrollo. Con un enfoque integral, esta academia está liderada por las Dras. Graciela Varela y Cecilia Fernández Aguirre, expertas en el área. Sus programas abarcan tratamientos biológicos, neuronutrición infantil y temas críticos como la intervención temprana en los primeros 1000 días de vida. ABIAN busca crear un ambiente cálido y profesional, ofreciendo no solo conocimientos teóricos, sino también apoyo continuo mediante materiales adicionales y grupos de WhatsApp. La academia fomenta un aprendizaje colaborativo y especializado, brindando herramientas para mejorar la calidad de vida de los niños y sus familias.</p>
      <button className='bttn-1 mb-5'><a href='https://academiabian.com/page/quienes-somos'>Conoce más sobre la academia</a></button>
      <h2 className='text-center text-white krona-one-regular'>Sobre las directoras</h2>
      <article className='row g-0 align-items-center p-3 mb-3 border rounded-pill bg-5-faded justify-content-center'>
        <img src={Cecilia} alt="" className='col-11 col-md-5 col-lg-3 img-fluid rounded-circle img-face'/>
        <div className='p-4 col text-md-start text-center'>
          <h3>Cecilia Fernández Aguirre</h3>
          <p className='p-4'>Bioquímica Nutricional con master en Suplementación Nutricional Funcional Avanzada, Master en Nutrigenómica Aplicada. Presidenta y co-fundadora de LINCA AC ( Liga de Intervención Nutrición Contra Autismo e Hiperactividad AC). Madre de un joven adulto con TEA.</p>
        </div>
      </article>
      <article className='row g-0 flex-wrap-reverse align-items-center p-3 border rounded-pill bg-5-faded justify-content-center'>
        <div className='p-4 col text-md-end text-center'>
          <h3>Graciela Estela Varela</h3>
          <p className='p-4'>Médica Funcional. Miembro del Comité Cientíco LINCA. Master en Microbiota Humana, Master en Fitoterapia aplicada. Miembro del Comité Cientíco LINCA. Directora de Espacio Vital, Argentina.</p>
        </div>
        <img src={Graciela} alt="" className='col-11 col-md-5 col-lg-3 img-fluid rounded-circle img-face'/>
      </article>
    </div>
  )
}

export default SobreNosotros