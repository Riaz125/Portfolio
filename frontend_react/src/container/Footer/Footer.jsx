import React, { useState } from 'react'

import { images } from '../../constants';
import AppWrap  from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client } from '../../client';

import './Footer.scss'

const Footer = () => {

  return (
    <>
      <h2 className="head-text">My Contact Info</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:riazzzz@gmail.com" className="p-text">riazzzz@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tell: +1 (253) 579-6336" className="p-text">+1 (253) 579-6336</a>
        </div>
      </div>
</>
)}

export default AppWrap(Footer, 'contact')
