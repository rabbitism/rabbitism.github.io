import React from 'react';
import { Card, CardItem, ICardStyles } from '@fluentui/react-cards'
import { FontIcon, IconButton, Image, initializeIcons, Text } from '@fluentui/react';

interface IProjectCardProps {
  projectName?: string,
  projectUrl?: string,
  projectDescriptions?: Array<string>,
  participationType?: 'lead' | 'participate',
  projectThumbnail?: string,
}

const cardStyle: ICardStyles = {
  root: {
    margin: 8,
    padding: 16,
    width: '100%'
  }
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = (props: IProjectCardProps) => {

  initializeIcons();

  return (
    <Card styles={cardStyle}>
      <CardItem>
        <Text variant='large'>{props.projectName}</Text>
      </CardItem>
      <CardItem>
        <Image src={props.projectThumbnail}></Image>
      </CardItem>
      <CardItem>
        {props.projectDescriptions?.map((v, i, a) => {
          return (
            <Text block variant='small' key={i}>{v}</Text>
          )
        })}
      </CardItem>
      <CardItem>
        <IconButton iconProps={{iconName: 'Dictionary'}}></IconButton>
      </CardItem>

    </Card>
  )
}

export default ProjectCard;