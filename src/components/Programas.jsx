import React from 'react'

function Programas() {
  return (
    <div className='row g-0'>
      <div className='col-12 col-md-6 p-4 text-center bg-3'>
        <header>
          <h3 className='krona-one-regular'>Programa para Médicos</h3>
        </header>
        <article>
          <p>¡Capacítate con la formación más completa, actualizada y científica de Latinoamérica! </p>
          <p>Amplia información, con bases científicas, que se transmiten en un lenguaje técnico y práctico.</p>
        </article>
        <button  className='bttn-2'><a href="https://drive.google.com/file/d/1e39p-99wYJ1gETqQPdNez1W78rIl52ZK/view?usp=drive_link" target='blanck'>Ver Programa completo</a></button>
      </div>
      <div className='col-12 col-md-6 p-4 text-center bg-2'>
        <header>
          <h3 className='krona-one-regular'>Programa para Nutricionistas</h3>
        </header>
        <article>
          <p>¡EL CURSO MÁS COMPLETO Y ACTUALIZADO DE LATINOAMÉRICA! </p>
          <p>Amplia información, con bases científicas, que se transmiten en un lenguaje accesible y práctico.</p>
        </article>
        <button  className='bttn-3'><a href="https://drive.google.com/file/d/1fIDL9iKWhtBwt_GgV89sWd35CeVSMB9T/view?usp=drive_link" target='blanck'>Ver Programa completo</a></button>
      </div>
    </div>
  )
}

export default Programas