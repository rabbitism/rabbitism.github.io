import React from 'react';
import { Label, PrimaryButton, Text } from '@fluentui/react';
import data from '../../data/openSourceProject.json';
import {getProjects} from '../../services/ProjectService';


export const Homepage: React.FunctionComponent = ()=>{

  return (
    <div style={{margin:20}} >
      <Text variant='xLarge' block>Welcome to my homepage</Text>
      <PrimaryButton text='Check' onClick={()=>{
        getProjects().then(response=> 
          console.log(response)
          )
      }} ></PrimaryButton>
    </div>
  )
}