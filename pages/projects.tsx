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
import runnie from '../assets/images/runnie.png'

gsap.registerPlugin(ScrollTrigger);

const Projects: NextPageWithLayout = () => {

  const title = useRef(null);

  const revealRefs = useRef<any[]>([]);
  revealRefs.current = [];

  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const projects = [
    {
      index: 1,
      technologies: ['react', 'tailwind', 'nextjs'],
      title: 'Personal portfolio',
      description: "A fast and responsive personal website built with React, Tailwind CSS, and Next.js, designed to present my work and background clearly.",
      linkCode: 'https://github.com/bogdanc64/personal_website_v3',
      image: personal_website,
      privateRepository: false,
    },
    {
      index: 2,
      technologies: ['vue', 'nestjs', 'aws'],
      title: 'Runnie',
      description: 'An app that helps you run end-to-end (E2E) tests for websites by automating user actions and checking that everything works as expected from start to finish. It makes sure your site behaves correctly in real-world scenarios.',
      linkCode: 'https://github.com/bogdanc64/runnie',
      image: runnie,
      privateRepository: true,
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
          y: 20,
          autoAlpha: 0
        }, {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `project-${index + 1}`,
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
        projects.map(({ index, title, description, technologies, linkCode, image, privateRepository }) => (
          <div key={index} ref={addToRefs} className="py-8">
            <Project
              index={index}
              title={title}
              description={description}
              technologies={technologies}
              linkCode={linkCode}
              image={image}
              privateRepository={privateRepository}
            />
          </div>
        ))
      }
    </motion.div>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
