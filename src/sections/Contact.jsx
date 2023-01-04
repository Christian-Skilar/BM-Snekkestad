import React, { useRef, useState } from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsPinMap } from 'react-icons/bs';
import { BiBuilding } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import images from '../assets/images';



const Success = () => {
  const [showElement, setShowElement] = useState(true);

  const handleClick = () => {
    setShowElement(false);
  };
  
  return (
    showElement? <div className='popup' id='popup'>
      <img src={images.check} alt="success check" />
      <h2>Takk</h2>
      <p>Din melding er sendt. Vi kommer tilbake til deg så fort som mulig</p>
      <button onClick={handleClick}>OK</button>
    </div>: null
  )
}



const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false);
  const style = { color: "#115099", fontSize: "22px" }

  const { errors, touched, handleBlur, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '', 
      telefon: '',
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Mangler Navn'),
      email: Yup.string().email('Mangler epost').required('Mangler epost'),
      telefon: Yup.string().required('Mangler telefon nummer'),
      message: Yup.string().min(10).required("message to short, min 10 characters")
    }),
    onSubmit: (values, {resetForm}) => {
      resetForm({ values: '' })
       emailjs.sendForm(
        'service_gdtnfmu', 
        'template_3tt4iot', 
        form.current, 
        'fhMC_ZVTG0ctP8k6q'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sendt")
        }, 
        (error) => {
            console.log(error.text);
        }
        );
        showResult(true);

          // Hide success message after some time
        setTimeout(() => {
        showResult(false);
      }, 15000);
   },
});

  return (
  <div>
    <div id='contact' className='contact'>
      <h2>Ta Kontakt</h2>
      <h3>For en uforpliktende befaring <br/> og en hyggelig prat om ditt neste prosjekt</h3>
      <div className='border-top'/>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input 
              placeholder='Navn' 
              type="text" 
              name="name" 
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
              onChange={handleChange}
              value={values.name}
              />
              {errors.name && touched.name && <p className='error-message'>{errors.name}</p>}

              <input 
              placeholder='Tlf' 
              type="number" 
              name="telefon" 
              onBlur={handleBlur}
              className={errors.telefon && touched.telefon ? "input-error" : ""}
              onChange={handleChange}
              value={values.telefon}
              />
              {errors.telefon && touched.telefon && <p className='error-message'>{errors.telefon}</p>}
              
              <input 
              placeholder='Epost' 
              type="email" 
              name="email" 
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
              onChange={handleChange}
              value={values.email}
              />
              {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}

              <textarea 
              placeholder='Melding' 
              name="message" 
              onBlur={handleBlur}
              className={errors.message && touched.message ? "input-error" : ""}
              onChange={handleChange}
              value={values.message}
              />
              {errors.message && touched.message && <p className='error-message'>{errors.message}</p>}
              
            <input type="submit" value="Send" className="button" />
          </form>
          {result ? <Success/> : null}
    </div>

    <div className='footer'>
      <div className='footer-col'>
        <div className='footer-row'>
          <AiOutlineMobile style={style} />
          <p>993 99 938</p>
        </div>
        <div className='footer-row'>
          <BsPinMap style={style} />
          <p>Marienborgveien 6. Nøtterøy</p>
        </div>
        <div className='footer-row'>
          <FiMail style={style} />
          <a className='mail-link' href="mailto:post@bmsnekkestad.no">post@bmsnekkestad.no</a>
        </div>
        <div className='footer-row'>
          <BiBuilding style={style} />
          <p>BM Snekkestad AS</p>
        </div>
      </div>
      <iframe title="location" className='google-maps' frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Marienborgveien%206,%20N%C3%B8tter%C3%B8y,%20Norway%20+(BM%20Snekkestad)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>

    <p className='copyright'>© {(new Date().getFullYear())} <a href="https://larsenweb3.com/">Larsen-Web</a></p>
  </div>
  );
};

export default Contact;