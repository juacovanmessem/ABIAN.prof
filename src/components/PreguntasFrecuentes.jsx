import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function PreguntasFrecuentes() {
  return (
    <section className='pb-5 pt-3 mb-4'>
      <div className='container-sm'>
        <div className='krona-one-regular my-4 fw-bold text-center'>
          <h2>Preguntas frecuentes</h2>
        </div>
        <Accordion defaultActiveKey="0">
          {/* Preguntas para Médicos */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>(Médicos) ¿Es un curso de formación médica?</Accordion.Header>
            <Accordion.Body>
              <p>¡Sí, es un curso virtual para Médicos y Terapeutas! 🩺📚</p>
              <p>🔬 Abian Academia te invita a un programa innovador de capacitación en síndrome autista y neurodesarrollo. Dirigido por las Dras. Graciela Varela y Cecilia Fernández Aguirre.</p>
              <p>🎓 Aprende con clases grabadas y materiales actualizados:</p>
              <p>5 módulos en video 📹</p>
              <p>Material PDF y bibliografía 📚</p>
              <p>Soporte en grupo de WhatsApp 💬</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>(Médicos) ¿Quiénes pueden participar en los cursos?</Accordion.Header>
            <Accordion.Body>
              <p>Médicos y estudiantes de último año de Medicina (deberán rendir examen luego de graduarse). Envía título, matrícula o constancia universitaria.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>(Médicos) ¿Se otorgan certificados al finalizar el curso?</Accordion.Header>
            <Accordion.Body>
              <p>El alumno que finalice el curso satisfactoriamente obtendrá:</p>
              <ul>
                <li>Diploma de ABIAN con aval de LINCA y ESPACIO VITAL.</li>
                <li>Será agregado al directorio de la página web de LINCA (linca.org).</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Preguntas para Nutricionistas, Terapeutas y personal de salud */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>(Nutricionistas) ¿Quiénes pueden participar en los cursos?</Accordion.Header>
            <Accordion.Body>
              <p>Si eres Terapeuta o Health Coach, puedes inscribirte al curso especializado para ti. De igual manera, deberán presentar certificación que avale los títulos.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>(Nutricionistas) ¿Se otorgan certificados al finalizar el curso?</Accordion.Header>
            <Accordion.Body>
              <p>Se enviará un diploma de ABIAN con aval de LINCA y de ESPACIO VITAL en versión digital.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Cuál es la duración de los cursos?</Accordion.Header>
            <Accordion.Body>
              <p>Duración de 3 meses. Las clases son enviadas cada 15 días.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>¿Cómo puedo inscribirme en un curso?</Accordion.Header>
            <Accordion.Body>
              <p>Para completar tu inscripción, por favor envía un correo electrónico a abi.autismo.neurodesarrollo@gmail.com adjuntando la siguiente documentación (escaneada):</p>
              <ul>
                <li>🔹 DNI (frente y dorso).</li>
                <li>🔹 Certificación que avale tu título.</li>
              </ul>
              <p>También puedes completar el formulario de inscripción y nosotros nos pondremos en contacto contigo.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>¿Qué sucede si no puedo asistir a una sesión programada?</Accordion.Header>
            <Accordion.Body>
              <p>Las clases son de manera asincrónica. Puedes realizarlas a tu propio ritmo.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>

  )
}

export default PreguntasFrecuentes