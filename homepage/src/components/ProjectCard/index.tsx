import React from 'react';
import { Card, CardHeader, CardBody, Button, Flex, Image, Text } from '@fluentui/react-northstar';
import { StarIcon, DownloadIcon, MoreIcon } from '@fluentui/react-icons-northstar'

interface ProjectCardProps {
  key: string;
  projectName: string;
  projectDescriptions: Array<string>;
}


const ProjectCard: React.FunctionComponent<any> = (props: ProjectCardProps) => {

  return (
    <Card
    horizontal
    size='large'
  >
    <Card.Preview horizontal>
      <Image
        style={{
          height: '115px',
          width: '115px',
        }}
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
      />
    </Card.Preview>
    <Card.Column>
      <Card.Header>
        <Text content={props.projectName} weight="bold" />
      </Card.Header>
      <Card.Body>
        {props.projectDescriptions.map((a, i)=>{
          return <Text key={i} content={a}></Text>  
        })}
      </Card.Body>
      <Card.Footer fitted>
        <Flex space="between" vAlign="center">
          <Text content="2.4k likes" />
          <Flex>
            <Button icon={<DownloadIcon />} iconOnly text title="Download" />
            <Button icon={<MoreIcon />} iconOnly text title="More" />
          </Flex>
        </Flex>
      </Card.Footer>
    </Card.Column>
  </Card>
  )
}

export default ProjectCard;