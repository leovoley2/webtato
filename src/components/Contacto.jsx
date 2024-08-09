import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    
     const serviceId =  'service_fayk1hj';
      const templateID = 'template_5e9osht';
      const publicKey = 'ATNa9hCpUCnemBxjE'

      emailjs.sendForm(serviceId, templateID, refForm.current, publicKey)
        .then( result => console.log(result.text))
        .catch( error => console.log(error))
      
   
  };

  return (

<div class="w-full color3">
    <div class=" h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center">Contacto</p>
            <form onSubmit={handleSubmit} ref={refForm}  action="">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none">Nombre</label>
                        <input id='name' name='name' required type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none">telefono</label>
                        <input id='phone' name='phone'  type="numeric" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Correo</label>
                        <input id='email' name='email' required type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none">Mensaje</label>
                        <textarea name='message' maxLength={500} required id='message' class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
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