import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


  export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_fayk1hj', 'template_5e9osht', form.current, {
          publicKey: 'ATNa9hCpUCnemBxjE',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };

  return (

<div className="w-full">
    <div className=" h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">Contacto</p>
            <form onSubmit={sendEmail} ref={form}  action="">
                <div className="md:flex items-center mt-12">
                    <fieldset className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none">Nombre</label>
                        <input id='name' name='user_name' required type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </fieldset>
                    <fieldset class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Asunto</label>
                        <input id='phone' name='subject'  type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </fieldset>
                </div>
                <div class="md:flex items-center mt-8">
                    <fieldset className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Correo</label>
                        <input name='user_email' required type="email" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </fieldset>
                    
                </div>
                <div>
                    <fieldset className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Mensaje</label>
                        <textarea name='message' maxLength={500} required id='message' className="h-40 text-base leading-none text-black p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </fieldset>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button type='submit' className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  );
};
export default ContactUs;