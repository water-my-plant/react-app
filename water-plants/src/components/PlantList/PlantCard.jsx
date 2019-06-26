import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import exampleImage from '../../assets/images/example_plant.jfif';
import { ClockIcon, CupIcon, HeightIcon } from '../Vectors/InfoIcons';
const Card = styled.li`
    font-family: 'Roboto', sans-serif;
    width: 90vw;
    height: 20vw;
    background: ${Colors.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;

    ${props => {
        if(!props.closed) {
            return(`
                height: 70vw;
                flex-direction: column;
            `)
        }
    }}
`;

const PlantProfile = styled.div`
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => {
        if(!props.closed) {
            return(`
                height: 75%;
                width: 100%;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
            `)
        } else {
            return (`
                &::after {
                    content: '';
                    height:85%;
                    width:1px;
                    border-right: 1px solid black;
                    opacity: 0.1;
                }
            `)
        }
    }}
`;
const LearnMore = styled.button`
    background: none;
    border: none;
    color: ${Colors.Tertiary};
    font-size: 1.4em;
    width: 100%;
`;
const InfoBox = styled.div`
    width: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${props => {
        if(props.closed) {
            return(`
                > div{
                    display: none;
                }

                div:last-child{
                    display: flex;
                }
            `)
        } else {
            return(`
                height: 25%;
                width: 100%;
                position: relative;
                > div{
                    &::after {
                        content: '';
                        height:70%;
                        width:1px;
                        border-right: 1px solid black;
                        opacity: 0.1;
                        position: absolute;
                        right: 0;
                    }
                }

                div:last-child{
                    &::after {
                        display: none;
                    }
                }
            `)
        }
    }}
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    
    span{
        font-size: 1.2em;
    }
`;

const PlantName = styled.header`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    line-height: 1.6;
    h3{
        font-style: italic;
        opacity: 0.5;
        font-size: 1.2em;
    }
    h2{
        font-size: 1.4em;
    }
`;

const PlantImage = styled.div`
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-color: transparent;
    width: 20vw;
    height: 20vw;
    ${props => {
        if(!props.closed) {
            return(`
                height: 75%;
                width: 100%;
            `)
        }
    }}
`;
export default function PlantCard(props) {
    return(
        <Card>
            <PlantProfile>
                <PlantImage imgUrl={exampleImage}/>
                <PlantName>
                    <h2>Plant Name</h2>
                    <h3>Species Name</h3>
                </PlantName>
            </PlantProfile>

            <InfoBox>
                <LearnMore>Learn more...</LearnMore>
                <InfoItem>
                    <HeightIcon svgHeight='50%' svgWidth='60%' strokeWidth='0px' color={Colors.Tertiary}/>
                    <span>12 cm</span>
                </InfoItem>
                <InfoItem>
                    <CupIcon svgHeight='60%' svgWidth='60%' strokeWidth='12px' color={Colors.Tertiary}/>
                    <span>60%</span>
                </InfoItem>
                <InfoItem>
                    <ClockIcon svgHeight='60%' svgWidth='60%' strokeWidth='12px' color={Colors.Tertiary}/>
                    <span>5 days</span>
                </InfoItem>
            </InfoBox>
        </Card>
    )
}