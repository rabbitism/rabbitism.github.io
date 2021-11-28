import { Divider, Header } from '@fluentui/react-northstar';
import React from 'react';
import CareerPeriod from '../../components/CareerPeriod';

class Resume extends React.Component{
  render(){
    return (
      <div>
        <Header>About Me</Header>
        <Divider content='CAREER' size={7} ></Divider>
        <CareerPeriod location='Nomura Information Technology' position='Senior SDE' startDate={new Date(2020,7)} descriptions={['Risk Engine, Adjustment System']}/>
        <Divider/>
        <CareerPeriod location='SpaceOK Aerospace Technology' position='Software Engineer' startDate={new Date(2019,6)} endDate={new Date(2020,6)} descriptions={['XiangYun Constellation Control & Operating system design and development']}/>
        <Divider/>
        <CareerPeriod location='Schlumberger Oilfield Service' position='Sustaining Engineer' startDate={new Date(2015,7)} endDate={new Date(2018,7)} descriptions={['Safety Valve Design and Commercialization']}/>
        <Divider content='EDUCATION' size={7} ></Divider>
        <CareerPeriod location='University of Illinois at Urbana Champaign' position='Data Science' startDate={new Date(2018,1)} endDate={new Date(2020,1)}/>
        <Divider/>
        <CareerPeriod location='Illinois Institute of Technology' position='Aerospace Engineering' startDate={new Date(2013,1)} endDate={new Date(2014,12)}/>
        <Divider/>
        <CareerPeriod location='Shanghai Jiao Tong University' position='Mechanical Engineering' startDate={new Date(2008,7)} endDate={new Date(2012,6)} />
        <Divider content='SKILLS' size={7} ></Divider>
      </div>
    )
  }
}

export default Resume;