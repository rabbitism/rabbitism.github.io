import React from 'react';
import { Button, Header, Text, Divider } from '@fluentui/react-northstar';
import './index.css';
import ProjectBanner from './ProjectCard';
import ProfolioBanner from './ProtfolioCard';


export const Homepage: React.FunctionComponent = () => {

  return (
    <div >
      <Text className='code' content="> Hello, I'm Dong Bin, aka Rabbitism/兔基."></Text>
      <br />
      <Text className='code' content='> I am a software engineer at NOMURA, base Shanghai. '></Text>
      <br />
      <Text className='code' content='> I am also an English-Chinese translator. '></Text>
      <br />
      <Text className='code' content="> Don't hesitate to explore more about me."></Text>
      <br />
      <Divider className='homepage-divider' />
      <ProjectBanner></ProjectBanner>
      <div style={{ marginTop: '20px' }}>
        <ProfolioBanner></ProfolioBanner>
      </div>
    </div>
  )
}