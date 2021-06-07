import Axios, { AxiosRequestConfig } from 'axios';
import ProjectModel from '../models/ProjectModel';
import data from '../data/openSourceProject.json';

export async function getProjects(): Promise<Array<ProjectModel>>{
  return new Promise((resolve, reject)=>{
    if(data as Array<ProjectModel>){
      resolve(data);
      console.log(data)
    }
    else{
      
    }
  })
}