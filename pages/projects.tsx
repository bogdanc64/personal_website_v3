import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import Project from '../components/Project'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import personal_website from '../assets/images/personal_website.png'

gsap.registerPlugin(ScrollTrigger);
 
const Projects: NextPageWithLayout  = () => {

  const title = useRef(null);

  const revealRefs = useRef<any[]>([]);
  revealRefs.current = [];

  const addToRefs = (el:any) => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  const projects = [
    {
      index: 1,
      tags: 'React Tailwind Next.JS Typescript', 
      title: 'Portfolio Website',
      description: "I've designed my personal website and coded it in React, using Tailwind CSS and Next.JS Framework.",
      linkCode: 'https://github.com/bogdanc64/personal_website_v3',
      image: personal_website,
    },
    {
      index: 2,
      tags: 'React Next.JS Typescript', 
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid voluptatem debitis hic possimus delectus ducimus pariatur neque? Esse quos ipsam id sunt tenetur amet saepe expedita ipsa pariatur eos.',
      linkCode: 'http://google.ro/',
      image: 'https://placekitten.com/640/360'
    },
    {
      index: 3,
      tags: 'React Next.JS Typescript', 
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid voluptatem debitis hic possimus delectus ducimus pariatur neque? Esse quos ipsam id sunt tenetur amet saepe expedita ipsa pariatur eos.',
      linkCode: 'http://google.ro/',
      image: 'https://placekitten.com/640/360'
    },
    {
      index: 4,
      tags: 'React Next.JS Typescript', 
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid voluptatem debitis hic possimus delectus ducimus pariatur neque? Esse quos ipsam id sunt tenetur amet saepe expedita ipsa pariatur eos.',
      linkCode: 'http://google.ro/',
      image: 'https://placekitten.com/640/360'
    },
  ];

  useIsomorphicLayoutEffect(() => {
    stagger(
      [title.current],
      { y: 20 },
      { y: 0 },
      0.5
    );
    revealRefs.current.forEach((el, index) => {
      // if(index>1)
      {
        gsap.fromTo(el, {
          y:20,
          autoAlpha: 0
        }, {
            duration: 0.5,
            y:0,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                id: `project-${index+1}`,
                trigger: el,
                start: 'top center+=100',
                toggleActions: 'play none none none'
            }
        });
      }

  });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
        <div ref={title}>
          <Title value='Projects' />
        </div>
      {
        projects.map(({index, title, description, tags, linkCode, image}) => (
          <div key={index} ref={addToRefs}>
            <Project index={index} title={title} description={description} tags={tags} linkCode={linkCode} image={image}/>
          </div>
        ))
      }
    </motion.div>
  )
}

Projects.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Projects
