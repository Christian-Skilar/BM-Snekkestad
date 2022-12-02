import React from 'react'
import { BiBuildingHouse } from 'react-icons/bi';
import { GiFamilyHouse, GiWoodBeam } from 'react-icons/gi';
import './Header.scss';

const Header = () => {
  return (
    <div id="header">
      <div className='banner-container'>
        <h2 className='h2-1'>Gjør om ditt byggprosjekt til mer</h2>
        <h2 className='h2-2'>Enn bare en tanke</h2>
        <a className='btn' href="#contact">Ta Kontakt</a>
      </div>
      <div className='illustrations-row'>
        <div>
        <BiBuildingHouse className='illustrations'/>
        <p>Tilbygg</p>
        </div>
        <div>
        <GiWoodBeam className='illustrations'/>
        <p>Rehabilitering</p>
        </div>
        <div>
        <GiFamilyHouse className='illustrations'/>
        <p>Nybygg</p>
        </div>
      </div>
    </div>
  )
}

export default Header