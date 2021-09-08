import React from 'react';
import './index.css'
import { Header, Flex, FlexItem, Text, Button, ArrowRightIcon, CompanionIcon, Image } from '@fluentui/react-northstar';
import { withRouter } from 'react-router-dom';
import image from '../../../files/project.png';


class ProjectBanner extends React.Component<any, any> {

    onClick = () => {
        const { history } = this.props;
        history.push('/projects');
    }

    render() {
        return (
            <div className='banner-card' style={{backgroundColor:"#ddd" }} >
                <Flex style={{ height: '100%' }}>
                    <FlexItem grow>
                        <div style={{ marginTop: '20px' }}>
                            <Text className='code' style={{ fontSize: '40px' }} content="{PROJECTS}"></Text>
                            <br />
                            <br />
                            <Text content=".NET / ASP.NET Core"></Text>
                            <br />
                            <Text content="WPF / React / Angular"></Text>
                            <br />
                            <Text content="Python"></Text>
                            <br />
                            <br />
                            <Button icon={<ArrowRightIcon />} text content="Find More" onClick={this.onClick} />
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <div style={{ padding: 10 }}>
                            <Image style={{maxHeight: '100%'}} src={image} />
                        </div>
                    </FlexItem>
                </Flex>

            </div>
        )
    }
}

export default withRouter(ProjectBanner)