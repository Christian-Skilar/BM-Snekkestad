import React from 'react'
import images from '../assets/images';
import './Header.scss';

const Header = () => {
  return (
    <div id="header">
      <div className='header-row'>
        <div className='banner-container'>
          <h1 className='h1'>BM Snekkestad</h1>
          <h2 className='h2-1'>Hjelper deg med å Realisere</h2>
          <h2 className='h2-2'>ditt neste byggprosjekt</h2>
          <div>
            <a className='btn' href="#contact">Ta Kontakt</a>
            <img src={images.mesterw} alt="mesterbrev" />
          </div>
        </div>
        <img className='banner-img' src={images.profilimg3} alt="snekkestad" />
      </div>

      <div className='work-bg'>
        <div className='work-bg-content-container'>
          <div>
            <img src={images.tilbygg1} alt="illustrasjon" />
            <p>Tilbygg</p>
          </div>
          <div>
            <img src={images.nybygg1} alt="illustrasjon" />
            <p>Nybygg</p>
          </div>
          <div>
            <img src={images.fix1} alt="illustrasjon" />
            <p>Restaurering</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header