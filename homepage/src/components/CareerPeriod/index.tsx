import { Flex, Text } from '@fluentui/react-northstar';
import React from 'react';

interface CareerPeriodProps{
    location: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    descriptions?: Array<string>
}

interface CareerPeriodStates{


}

class CareerPeriod extends React.Component<CareerPeriodProps, CareerPeriodStates>{
    render(){
        return(
            <div>
                <Flex>
                    <Flex.Item grow>
                        <Text weight='bold'>{this.props.location}</Text>
                    </Flex.Item>
                    <Text>{this.props.startDate.getFullYear()}.{this.props.startDate.getMonth()} - {this.props.endDate==null?('Now'):(this.props.endDate.getFullYear()+'.'+this.props.endDate.getMonth())}</Text>
                </Flex>
                <div>
                <Text>{this.props.position}</Text>
                </div>
                <div>

                {this.props.descriptions?.map(a=>{
                    return <li>{a}</li>
                })}

                </div>

            </div>
        )
    }
}

export default CareerPeriod;