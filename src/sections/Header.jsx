import React from 'react'
import images from '../assets/images';
import './Header.scss';

const Header = () => {
  return (
    <div id="header">
      <div className='header-row'>
        <div className='banner-container'>
          <h1 className='h1'>BM Snekkestad</h1>
          <h2 className='h2-1'>Hjelper deg på veien til å <span>Realisere</span></h2>
          <h2 className='h2-2'>Ditt neste byggprosjekt</h2>
          <a className='btn' href="#contact">Ta Kontakt</a>
          <img src={images.mesterw} alt="mesterbrev" />
        </div>
        <img className='banner-img' src={images.profilimg3} alt="snekkestad" />
      </div>
      <div className='illustrations-row'>
        <div>
        <img alt='bilde' src={images.tilbygg} className='illustrations'/>
        <p>Tilbygg</p>
        </div>
        <div>
        <img alt='bilde' src={images.fix} className='illustrations'/>
        <p>Rehabilitering</p>
        </div>
        <div>
        <img alt='bilde' src={images.nybygg} className='illustrations'/>
        <p>Nybygg</p>
        </div>
      </div>
    </div>
  )
}

export default Header