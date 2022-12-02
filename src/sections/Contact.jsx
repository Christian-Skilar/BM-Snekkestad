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



const Result = () => {
  return (
    <div className='success-message'>
      <p>Din melding er sendt</p>
    </div>
  )
}


const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false);
  const style = { color: "#115099", fontSize: "22px" }

  const formik = useFormik({
    initialValues: {
      name: '', 
      telefon: '',
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string()
	    .required('Mangler Navn'),
      email: Yup.string()
	    .required('Mangler epost'),
      telefon: Yup.string()
	    .required('Mangler nummer'),
      message: Yup.string()
      .required('Melding er for kort')
    }),
    onSubmit: (values, {resetForm}) => {
      resetForm({ values: '' })
       emailjs.sendForm(
        'service_re4pbq9', 
        'template_7kt7iq8', 
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
      }, 5000);
   },
});

  return (
    <div>
    <div id='contact' className='contact'>
      <h2>Ta Kontakt</h2>
      <h3>For en uforpliktende befaring <br/> og en hyggelig prat om ditt neste prosjekt</h3>
      <div className='border-top'/>
      <div className='form-section'>
        <img className='profilbilde' src={images.profilimg} alt="snekkestad" />
        <img className='profilbilde-mobile' src={images.profilimg2} alt="snekkestad" />
        <form ref={form} onSubmit={formik.handleSubmit} className="contact-form">
            <input 
              placeholder='Navn' 
              type="text" 
              name="name" 
              className="p-text"
              onChange={formik.handleChange}
              value={formik.values.name}
              />
                <div className={`error-text ${formik.touched.name && formik.errors.name ? 'show' : ''}`}>
                        {formik.errors.name}
                </div>

              <input 
              placeholder='Tlf' 
              type="number" 
              name="telefon" 
              className="p-text"
              onChange={formik.handleChange}
              value={formik.values.telefon}
              />
                <div className={`error-text ${formik.touched.telefon && formik.errors.telefon ? 'show' : ''}`}>
                        {formik.errors.telefon}
                </div>
              
              <input 
              placeholder='Epost' 
              type="email" 
              name="email" 
              className="p-text"
              onChange={formik.handleChange}
              value={formik.values.email}
              />
                <div className={`error-text ${formik.touched.email && formik.errors.email ? 'show' : ''}`}>
                        {formik.errors.email}
                </div>

              <textarea 
              placeholder='Melding' 
              name="message" 
              className="p-text"
              onChange={formik.handleChange}
              value={formik.values.message}
              />
                <div className={`error-text ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                        {formik.errors.message}
                </div>
              
            <input type="submit" value="Send" className="button" />
            <div>{result ? <Result/> : null}</div>
          </form>
        </div>
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

    <p className='copyright'>© {(new Date().getFullYear())} <a href="https://larsen-portfolio.netlify.app/">Larsen-Web</a></p>
    </div>
  );
};

export default Contact;