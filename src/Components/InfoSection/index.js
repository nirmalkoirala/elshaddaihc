import React from 'react';
import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    Heading, Subtitle,  ImgWrap, Img
} from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, lightText, headline,
darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description[0]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[1]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[2]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[3]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[4]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[5]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[6]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[7]}</Subtitle>
                            <Subtitle darkText={darkText}>{description[8]}</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
