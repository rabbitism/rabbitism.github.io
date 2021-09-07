import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import ProjectModel from '../../models/ProjectModel';
import { getProjects } from '../../services/ProjectService';

interface ProjectsProps{

}

interface ProjectsStats{
  projects: Array<ProjectModel>;
}

class Projects extends React.Component<ProjectsProps, ProjectsStats> {

  constructor(props: ProjectsProps) {
    super(props);
    this.state = {
      projects: new Array<ProjectModel>(),
    }
  }

  componentDidMount(){
    getProjects().then(data => {
      this.setState({
        projects: data
      });
    });
  }

  render() {

    return (
      <div>
        {this.state.projects.map((a,i) => {
          return <ProjectCard key={i} projectName={a.projectName} projectDescriptions={a.projectDescription}>

          </ProjectCard>
        })}
      </div>

    )
  }
}

export default Projects;