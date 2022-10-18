/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Side_B from '../../assets/recentprojects/Side_B.png';
import ALW from '../../assets/recentprojects/ALW.gif';
import Algorithm from '../../assets/recentprojects/Algorithm.gif';
import WATER from '../../assets/recentprojects/WATER.gif';
import BeSaved from '../../assets/recentprojects/Be_Saved.gif';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Side B',
      description: `A multifacited album involving collaboration from artists Zayguap, Zateb, Ben Poole & Andrew Kelly.`,
      alter: 'React Portfolio',
      image: `${Side_B}`,
    },
    {
      id: 2,
      title: 'Art. Love. War.',
      description: `A project that involves the themes of Art Love War and how it effects all of our lives`,
      alter: 'VeriTru Project',
      image: `${ALW}`,
    },
    {
      id: 3,
      title: 'Algorithm Project',
      description: `A side project that is heavily integrated into side B and the art canvasas used behind the songs.`,
      alter: 'LoFo Project',
      image: `${Algorithm}`,
    },
    {
      id: 4,
      title: 'Water',
      description: `A blender project showing my capability as a 3D artist.`,
      alter: 'Startup Project',
      image: `${WATER}`,
    },
    {
      id: 5,
      title: 'Be Saved',
      description: `A Music video created by me and Finn Elsmo as a startup in my music career.`,
      alter: 'Startup Project',
      image: `${BeSaved}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
