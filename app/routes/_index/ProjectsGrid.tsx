import * as React from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsGrid.module.scss';
import { NavLink } from '@remix-run/react';

interface Project {
  imageUrl: string;
  title: string;
  overlayColor: string;
  link: string;
  description: string;
  
}

export const ProjectsGrid: React.FC = () => {
  const projects: Project[] = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F65f741c6ba4043de912ef82d7fd885ec',
      title: 'Rush - Branding + Web Design',
      overlayColor: '#FF626C',
      description:"this is descripion",
      link: '/rush',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fa07433154c5d4835918d0321bbf453f8',
      title: 'Nura — Web Design Concept',
      description:"this is descripion",
      overlayColor: '#B9336D',
      link: '/nura',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fb9c3c70af511479fadadf155b22cb448',
      title: 'Luna Glow - Branding + Web Design',
      description:"this is descripion",
      overlayColor: '#d6e6e5',
      link: '/luna',
    },
    {
      imageUrl:
       'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F5bd07de4f912493ea59063c2e832e7c2',
      title: 'Yum — Web Design',
      overlayColor: '#6F427D', 
      description:"this is descripion",
      link: '/yum',
    },
  ];

  return (
    <div className={styles.ProjectsStyle}>
      {projects.map((project, index) => (
        <NavLink
          key={index}
          to={project.link}
          style={{ textDecoration: 'none' }}
        >
          <ProjectCard
  imageUrl={project.imageUrl}
  title={project.title}
  description={project.description}
  overlayColor={project.overlayColor}
/>


        </NavLink>
      ))}
    </div>
  );
};

