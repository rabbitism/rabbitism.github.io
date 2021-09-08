import React from 'react';
import '../ProjectCard/index.css'
import { Header, Flex, FlexItem, Text, Button, ArrowRightIcon, CompanionIcon, Image } from '@fluentui/react-northstar';
import { withRouter } from 'react-router-dom';
import image from '../../../files/media.png';


class ProfolioBanner extends React.Component<any, any> {

    onClick = () => {
        const { history } = this.props;
        history.push('/portfolio');
    }

    render() {
        return (
            <div className='banner-card' style={{ backgroundColor: "#D00A4C" }} >
                <div className='banner-card-title' style={{ marginTop: '10px' }}>
                    <Text className='code' style={{ fontSize: '40px', color: 'white' }} color='white' content="{PROTFOLIO}"></Text>
                    <br />
                    <br />
                    <Button icon={<ArrowRightIcon color='white' />} style={{ color: 'white' }} text content="Find More" onClick={this.onClick} />
                </div>
                <div className='banner-card-image' style={{ padding: 10 }}>
                    <Image style={{ maxHeight: '240px' }} src={image} />
                </div>

            </div>

        )
    }
}

export default withRouter(ProfolioBanner)