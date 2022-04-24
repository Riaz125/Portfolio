import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './About.scss'

const abouts =[
  {title: 'Back-end Development', description: 'Competant in back-end technologies such as Nodejs, Express, Mongodb, Python, and SQL', imgUrl: images.about01},
  {title: 'Front-end Development', description: 'Strong knowledge of Javascript, React, HTML, and CSS', imgUrl: images.about02},
  {title: 'Team Player', description: 'Experience working with a team and utilizing development methodoliges such as AGILE and SCRUM.', imgUrl: images.about03}
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
            >

            <img src={about.imgUrl} alt={about.title}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )}

export default AppWrap(About, 'about');
