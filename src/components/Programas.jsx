import React from 'react'

function Programas() {
  return (
    <div className='row g-0'>
      <div className='col-12 col-md-6 p-4 text-center bg-3'>
        <header>
          <h3 className='krona-one-regular'>Programa para médicos</h3>
        </header>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet ducimus, dolorem excepturi, natus totam hic ex quasi cumque exercitationem maxime fugiat pariatur, vel non itaque ab saepe aliquam quia?</p>
        </article>
        <button  className='bttn-2'><a href="https://drive.google.com/file/d/1Pm5UR9eEXzFRypC2CyQJJGgBuYuHQTF1/view?usp=drive_link" target='blanck'>Ver Programa completo</a></button>
      </div>
      <div className='col-12 col-md-6 p-4 text-center bg-2'>
        <header>
          <h3 className='krona-one-regular'>Programa para terapeutas</h3>
        </header>
        <article>
          <p>¡EL CURSO MÁS COMPLETO Y ACTUALIZADO DE LATINOAMÉRICA! </p>
          <p>Amplia información, con bases científicas, que se transmiten en un lenguaje accesible y práctico.</p>
        </article>
        <button  className='bttn-3'><a href="https://drive.google.com/file/d/1Pm5UR9eEXzFRypC2CyQJJGgBuYuHQTF1/view?usp=drive_link" target='blanck'>Ver Programa completo</a></button>
      </div>
    </div>
  )
}

export default Programas