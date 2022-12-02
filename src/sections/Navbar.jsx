
import React, { useEffect, useState } from "react";
import { BiMailSend, BiHomeSmile, BiImage } from 'react-icons/bi';
import { TbHammer } from 'react-icons/tb';
import { motion } from "framer-motion";
import images from '../assets/images';
import './Navbar.scss';

const Navbar = () => {

    const [windowDimension, setWindowDimension] = useState(null);
    const style = { color: "#353439", fontSize: "20px" }

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
                <li><a className="link-text" href="#header">Home</a></li>
                <li><a className="link-text" href="#about">About</a></li>
                <li><a className="link-text" href="#gallery">Galleri</a></li>
                <li><a className="link-text" href="#contact">Contact</a></li>
            </motion.ul>
            </div>
        </motion.nav>
        ) : (
        <motion.nav className='navbar'>
            <motion.ul className='nav-links'>
                <a href="#header" className='link-col link-text'><BiHomeSmile style={style}/>Home</a>
                <a href="#about" className='link-col link-text'><TbHammer style={style}/>About</a>
                <a href="#gallery" className='link-col link-text'><BiImage style={style}/>Galleri</a>
                <a href="#contact" className='link-col link-text'><BiMailSend style={style}/>Contact</a>
            </motion.ul>
        </motion.nav>
        )}
    </>
    )
}

export default Navbar