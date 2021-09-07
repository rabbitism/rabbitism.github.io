import React from 'react';
import { Button, Header, Text, Divider } from '@fluentui/react-northstar';
import './index.css';
import ProjectBanner from './ProjectCard';


export const Homepage: React.FunctionComponent = () => {

  return (
    <div >
      <Text style={{fontFamily:'consolas'}} content="> Hello, I'm Dong Bin, aka Rabbitism/兔基."></Text>
      <br/>
      <Text style={{fontFamily:'consolas'}} content='> I am a software engineer at NOMURA, base Shanghai. '></Text>
      <br/>
      <Text style={{fontFamily:'consolas'}} content='> I am also an English-Chinese translator. '></Text>
      <br/>
      <Text style={{fontFamily:'consolas'}} content="> Don't hesitate to explore more about me."></Text>
      <br/>
      <Divider className='homepage-divider'/>
      <ProjectBanner></ProjectBanner>

    </div>
  )
}