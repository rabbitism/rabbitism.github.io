import React from 'react';
import './index.css';
import {Text, Button, ArrowRightIcon, Image} from '@fluentui/react-northstar';
import image from '../../../files/podcast.png';
import xiaoyuzhou from '../../../files/xiaoyuzhou.png';

class PodcastCard extends React.Component {
    render() {
        return (
            <div className='banner-card' style={{backgroundColor:'#E9CFAE'}} >
                <div className='banner-card-title' style={{ marginTop: '10px' }}>
                    <Text className='code' style={{ fontSize: '40px', color: '#16225C' }} color='white' content="{PODCAST}"></Text>
                    <br />
                    <br />
                    <Text content="Subscribe on" style={{color:"#16225C"}}/>
                    <br/>
                    <br/>
                    <a href="https://www.xiaoyuzhoufm.com/podcast/614b7321001e3e1f8ff25aa9"  target="_blank" rel="noopener">
                    <Image style={{maxHeight:'24px'}} src={xiaoyuzhou}/>
                    </a>
                </div>
                <div className='banner-card-image' style={{ padding: 10 }}>
                    <Image style={{ maxHeight: '240px' }} src={image} />
                </div>

            </div>
        )

    }
}

export default PodcastCard;