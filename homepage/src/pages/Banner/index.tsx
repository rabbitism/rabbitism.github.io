import React from 'react';
import { Button, Flex, Image, Text, FlexItem } from '@fluentui/react-northstar';
import avatar from '../../files/avatar.jpg';
import './index.css';


export const Banner: React.FunctionComponent = () => {

    return (
        <Flex >
            <FlexItem>
                <div>
                    <Image
                        className='avatar'
                        circular
                        src={avatar}
                    />
                </div>
            </FlexItem>

            <FlexItem>
                <div className='header-banner'>
                    <Text className='banner-header' content="Dong Bin"></Text>
                    <br/>
                    <Text className='banner-content' content="Wander in Galaxy"></Text>
                </div>
            </FlexItem>
        </Flex>
    )
}