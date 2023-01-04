
import React, { useEffect, useState } from "react";
import { BiMailSend, BiHomeSmile, BiImage } from 'react-icons/bi';
import { TbHammer } from 'react-icons/tb';
import { motion } from "framer-motion";
import images from '../assets/images';
import './Navbar.scss';

const Navbar = () => {

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension >= 600;
    

    return (
    <>
    {isMobile ? (
        <motion.nav className='navbar'>
            <div className="nav-conteiner">
            <img className='logo' src={images.logo} alt="logo" />
            <motion.ul className='nav-links'>
                <li><a className="link-text" href="#header">Hjem</a></li>
                <li><a className="link-text" href="#about">Om</a></li>
                <li><a className="link-text" href="#gallery">Galleri</a></li>
                <li><a className="link-text" href="#contact">Kontakt</a></li>
            </motion.ul>
            </div>
        </motion.nav>
        ) : (
        <motion.nav className='navbar'>
            <motion.ul className='nav-links'>
                <a href="#header" className='link-col link-text'><BiHomeSmile className="menu-logo" />Hjem</a>
                <a href="#about" className='link-col link-text'><TbHammer className="menu-logo" />Om</a>
                <a href="#header"><img src={images.logomobile} alt="logo" className="mobile-logo" /></a>
                <a href="#gallery" className='link-col link-text'><BiImage className="menu-logo" />Galleri</a>
                <a href="#contact" className='link-col link-text'><BiMailSend className="menu-logo" />Kontakt</a>
            </motion.ul>
        </motion.nav>
        )}
    </>
    )
}

export default Navbar