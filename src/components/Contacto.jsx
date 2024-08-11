import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactFormReact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          process.env.service_fayk1hj,
          process.env.template_5e9osht,
          form.current,
          process.env.ATNa9hCpUCnemBxjE
        )
        .then(
          (result) => {
            document.getElementById('result').innerHTML = 'Mensaje enviado con exito!';
            console.log(result.text);
          },
          (error) => {
            document.getElementById('result').innerHTML = 'Error al enviar su mensaje.';
            console.log(error.text);
          }
        );
    };
  

  return (

    <form class="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12" ref={form}>
    <h1 class="text-3xl font-bold mb-4">Contactanos</h1>
    <label class="block mb-2">
      <span class="text-gray-700">Nombre:</span>
      <input type="text" name="user_name" class="block w-full p-2 pl-10 text-sm text-gray-700" required />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Asunto:</span>
      <input type="text" name="subject" class="block w-full p-2 pl-10 text-sm text-gray-700" required />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Email:</span>
      <input type="email" name="user_email" class="block w-full p-2 pl-10 text-sm text-gray-700" required />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Mensaje:</span>
      <textarea name="message" class="block w-full p-2 pl-10 text-sm text-gray-700" required></textarea>
    </label>
    <button class="bg-blue-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={sendEmail}>Enviar</button>
    <div class="text-sm text-gray-600 mt-2" id="result"></div>
  </form>
  );
};
export default ContactFormReact;