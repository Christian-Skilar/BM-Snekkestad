import React from 'react'
import images from '../assets/images';
import './About.scss';

const About = () => {
  return (
    <div id="about">
    <h2>BM Snekkestad</h2>
    <div className='border-line' />
      <div className='about-row'>
        <img className='about-image' src={images.bm2} alt="sample" />
        <div>
          <h3>Kunnskap og Erfaring</h3>
          <p>
          BM Snekkestad AS er et tømrerfirma etablert i Tønsberg som
          for det meste tar oppdrag i Tønsberg, 
          men tar også på store og små snekker oppdrag 
          i hele Vestfold og Telemark. Vi har lang erfaring og allsidig 
          kompetanse, deler raust av våre erfaringer og bistår gjerne med 
          ideer og forslag til gode løsninger.
          </p>
          <p>
          Her i BM Snekkestad er vi Opptatt av høy kvalitet. Dyktige og ansvarsbevisste 
          ansatte gir deg som kunde den trygghet og kvalitet du forventer.
          </p>
        </div>
      </div>

      <div className='about-row row-reverse'>
        <div className='second'>
          <h3>Bred Kompetanse</h3>
          <p>
          Her settes <span>kunden</span> i fokus og vi jobber aktivt for å imøtekomme 
          alle ønsker kunden måtte ha. Vi har en visjon om å være 
          innovative og kvalitetsbevisste samtidig som vi ønsker å 
          være konkurransedyktige på pris. Dette sikres gjennom god 
          planlegging og smarte løsninger, <span>ikke</span> på bakgrunn av dårlig 
          kvalitet.
          </p>
          <p>
            Med lang erefaring, godt utstyr og kjærlighet for faget,
            finnes det verken for små eller for store prosjekter for Snekkestad
          </p>
        </div>
        <img className='about-image' src={images.bm3} alt="sample" />
      </div>
    </div>
  )
}

export default About