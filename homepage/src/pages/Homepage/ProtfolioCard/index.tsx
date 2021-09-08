import React from 'react';
import '../ProjectCard/index.css'
import { Header, Flex, FlexItem, Text, Button, ArrowRightIcon, CompanionIcon, Image } from '@fluentui/react-northstar';
import { withRouter } from 'react-router-dom';
import image from '../../../files/media.png';


class ProfolioBanner extends React.Component<any, any> {

    onClick = () => {
        const { history } = this.props;
        history.push('/protfolio');
    }

    render() {
        return (
            <div className='banner-card' style={{ backgroundColor: "#D00A4C" }}  >
                <Flex style={{ height: '100%' }}>
                    <FlexItem grow>
                        <div style={{ marginTop: '20px' }}>
                            <Text className='code' style={{ fontSize: '40px', color: 'white' }} color='white' content="{PROTFOLIO}"></Text>
                            <br />
                            <br />
                            <Button icon={<ArrowRightIcon color='white' />} style={{ color: 'white' }} text content="Find More" onClick={this.onClick} />
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <div style={{ padding: 10 }}>
                            <Image style={{ maxHeight: '100%' }} src={image} />
                        </div>
                    </FlexItem>
                </Flex>

            </div>
        )
    }
}

export default withRouter(ProfolioBanner)