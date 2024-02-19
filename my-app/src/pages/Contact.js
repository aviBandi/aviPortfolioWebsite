// import Nav from "../components/Nav.js"
// import Footer from "../components/Footer.js"
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   { window.scrollTo(0, 0) }

//   const form = useRef();
//   const [formValues, setFormValues] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     message: "",
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_rafudgk', 'template_f2hhal8', form.current, {
//         publicKey: 'n5YYkV9LQ5tmkmY5U',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           // Clear form fields after successful submission
//           setFormValues({
//             first_name: "",
//             last_name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <div>
//       <Nav />
//       <div className="isolate bg-white px-6 lg:px-8">

//         <div className="mx-auto max-w-5xl text-center pt-40">
//           <div className='flex items-center'>
//             <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

//             <h2 className="text-3xl text-blue-600 font-bold font-palanquin tracking-tight sm:text-4xl">Contact Form</h2>
//             <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

//           </div>
//           <div className='max-w-lg mx-auto  mt-3'>
//             <p className="text-slate-gray mt-1 font-palanquin text-md text-center">
//               Use the form below to contact me for any business inquiries or questions. I look forward to hearing from you, and thank you for visiting my website!
//             </p>
//           </div>
//         </div>
//         <form ref={form} onSubmit={sendEmail} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="text"
//                   name="first_name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   value={formValues.first_name}
//                   onChange={(e) => setFormValues({...formValues, first_name: e.target.value})}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="text"
//                   name="last_name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   value={formValues.last_name}
//                   onChange={(e) => setFormValues({...formValues, last_name: e.target.value})}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="email"
//                   value={formValues.email}
//                   onChange={(e) => setFormValues({...formValues, email: e.target.value})}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Message
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={4}
//                   value={formValues.message}
//                   onChange={(e) => setFormValues({...formValues, message: e.target.value})}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//             </div>

//           </div>
//           <div className="mt-10">
//             <button className='text-white w-full text-sm font-semibold font-palanquin border-2 border-blue-600 bg-blue-600 rounded-md px-3 py-2 hover:text-blue-600 hover:bg-transparent transition-colors'>
//               Let's Talk
//             </button>
//           </div>
//         </form>
//       </div>
//       <br></br>
//       <Footer />
//     </div>
//   )
// }


import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  { window.scrollTo(0, 0) }

  const form = useRef();
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rafudgk', 'template_f2hhal8', form.current, {
        publicKey: 'n5YYkV9LQ5tmkmY5U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear form fields after successful submission
          setFormValues({
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          });
          // Show message sent confirmation
          setMessageSent(true);
          // Hide message after 3 seconds
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Nav />
      <div className="isolate bg-white px-6 lg:px-8">

        <div className="mx-auto max-w-5xl text-center pt-40">
          <div className='flex items-center'>
            <hr className="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

            <h2 className="text-3xl text-blue-600 font-bold font-palanquin tracking-tight sm:text-4xl">Contact Form</h2>
            <hr className="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mx-12"></hr>

          </div>
          <div className='max-w-lg mx-auto  mt-3'>
            <p className="text-slate-gray mt-1 font-palanquin text-md text-center">
              Use the form below to contact me for any business inquiries or questions. I look forward to hearing from you, and thank you for visiting my website!
            </p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  value={formValues.first_name}
                  onChange={(e) => setFormValues({...formValues, first_name: e.target.value})}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoComplete="family-name"
                  value={formValues.last_name}
                  onChange={(e) => setFormValues({...formValues, last_name: e.target.value})}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formValues.email}
                  onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formValues.message}
                  onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

          </div>
          <div className="mt-10 flex items-center justify-center">
            <button className='text-white w-full text-sm font-semibold font-palanquin border-2 border-blue-600 bg-blue-600 rounded-md px-3 py-2 hover:text-blue-600 hover:bg-transparent transition-colors'>
              Let's Talk
            </button>
            {isMessageSent && (
              <div className="ml-4 text-green-600 font-semibold">
                Message sent successfully!
              </div>
            )}
          </div>
        </form>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
