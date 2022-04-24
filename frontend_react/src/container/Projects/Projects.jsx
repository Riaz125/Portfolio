import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Projects.scss'

const projects =[
  {title: 'Book Database', description: 'Book database is a book database app where you can add books, search and filter books according to genre, release date, etc.', imgUrl: images.bookdatabase, link: 'https://ultimatebookdatabase.herokuapp.com/'},
  {title: 'What To Watch', description: 'What to Watch Now is a movie database app built with MERN where you can add movies and check what movies have come out recently sorted by there imdb score.', imgUrl: images.whattowatch, link: 'https://whattowatchnow.herokuapp.com/'},
];

const Projects = () => {
  return (
    <>
      <h2 className="head-text">Projects</h2>
      <div className="app__profiles">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={project.title + index}
            >

            <img src={project.imgUrl} alt={project.title}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{project.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
            <a href={project.link} rel="noreferrer">
                Link To Project
            </a>

          </motion.div>
        ))}
      </div>
    </>
  )}

export default AppWrap(Projects, 'projects');
