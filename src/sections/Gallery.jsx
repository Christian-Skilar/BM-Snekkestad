import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import images from '../assets/images';
import './Gallery.scss';

const Gallery = () => {
  return (
    <div id="gallery">
      <h2>Tidligere Prosjekter</h2>
      <div className='border-line' />
      <div className='img-container'>
        <img src={images.bm4} alt="gallery" />
        <img src={images.bm5} alt="gallery" />
        <img src={images.bm6} alt="gallery" />
        <img src={images.bm7} alt="gallery" />
        <img src={images.bm8} alt="gallery" />
        <img src={images.bm9} alt="gallery" />
        <img src={images.bm10} alt="gallery" />
        <img src={images.bm11} alt="gallery" />
        <img src={images.bm12} alt="gallery" />
        <img src={images.bm13} alt="gallery" />
        <img src={images.bm14} alt="gallery" />
        <img src={images.bm15} alt="gallery" />
      </div>
      <p>Vi oppdaterer jevnlig våre sosiale medier, så ta gjerne en titt for å se våre aktuelle oppdrag</p>
      <a href="https://www.instagram.com/bmsnekkestad/"><AiOutlineInstagram className='insta' /> Følg med på Instagram</a>
    </div>
  )
}

export default Gallery