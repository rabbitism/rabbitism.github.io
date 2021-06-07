import React from 'react';
import { Text } from '@fluentui/react';
import  ProjectCard from '../../components/ProjectCard';

class Projects extends React.Component{
  render(){
    return (
      <ProjectCard projectName='Ant Design Blazor' projectDescriptions={['Hello', 'This is blazor']}>

      </ProjectCard>
    )
  }
}

export default Projects;