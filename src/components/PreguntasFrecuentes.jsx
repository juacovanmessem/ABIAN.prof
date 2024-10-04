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
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Es un curso de formación médica?</Accordion.Header>
            <Accordion.Body>
             <p>¡Si, es un curso virtual para Médicos y Terapeutas! 🩺📚</p>
             <p>🔬 Abian Academia te invita a un programa innovador de capacitación en síndrome autista y neurodesarrollo. Dirigido por las Dras. Graciela Varela y Cecilia Fernández Aguirre.</p>
             <p>🎓 Aprende con clases grabadas y materiales actualizados:</p>
             <p>5 módulos en video 📹</p>
             <p>Material PDF y bibliografía 📚</p>
             <p>Soporte en grupo de WhatsApp 💬</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Quiénes pueden participar en los cursos?</Accordion.Header>
            <Accordion.Body>
              <p>Médicos y estudiantes de último año de Medicina (deberán rendir examen luego de graduarse). Envía título, matrícula o constancia universitaria.</p>
              <p>Si eres Terapeuta o Health Coach, puedes inscribirte al curso especializado para ti. De igual manera deberan presentar certificación que avale los titulos.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Cómo puedo inscribirme en un curso?</Accordion.Header>
            <Accordion.Body>
              <p>Para completar tu inscripción, por favor envía un correo electrónico a abi.autismo.neurodesarrollo@gmail.com adjuntando la siguiente documentación (escaneada):🔹 DNI (frente y dorso).🔹 Título médico.</p>
              <p>Tambien puedes completar el formulario de inscripción y nosotros nos pondremos en contacto contigo.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Cuál es la duración de los cursos?</Accordion.Header>
            <Accordion.Body>
              Duración de 3 meses. La clases son enviadas cada 15 días.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>¿Se otorgan certificados al finalizar el curso?</Accordion.Header>
            <Accordion.Body>
              <p><strong>Formación para Médicos</strong></p>
              <p>El alumno que nalice el curso satisfactoriamente obtendrá: Diploma de ABIAN con aval de LINCA y ESPACIO VITAL. Y será agregado al directorio de la página web de LINCA (linca.org)</p>
              <p><strong>Formación para Nutricionistas, Terapeutas y personal de la Salud</strong></p>
              <p>Se enviará un diploma de ABIAN con aval de LINCA y de Espacio Vital en versión digital.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>¿Qué sucede si no puedo asistir a una sesión programada?</Accordion.Header>
            <Accordion.Body>
              <p>Las clases son de manera asincrónica. Puedes realizarlo a tu propio ritmo.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  )
}

export default PreguntasFrecuentes