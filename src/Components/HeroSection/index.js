import React, {useState} from 'react';
import Background from '../../images/bg.jpg';
import Background1 from '../../images/ndis.png'
import { Button } from '../ButtonElements';
import { 
    HeroContainer, HeroBg, HeroContent, HeroH1, HeroH2, HeroP, 
    HeroBtnWrapper, ArrowForward, ArrowRight, NavLogoo
 } from './HeroElements';
// import { MdStoreMallDirectory } from 'react-icons/md';
 
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

        
    return (
        <HeroContainer id='home'>
           <HeroBg>
                <img src={ Background }/>
               {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
           </HeroBg>
           <HeroContent>
               <HeroH1>Together We Can</HeroH1>
               <HeroP>
               Elshaddai health care is a Nicholls owned and operated organisation providing a unique combination of Home care supports and nursing services in Australia. 
                </HeroP>
                <HeroH2>AIM</HeroH2>
                <HeroP>
                To provide quality and unique support services.
                </HeroP>
                <HeroH2>MISSION</HeroH2>
                <HeroP>
                To improve quality in the lives of our Participants.
                </HeroP>
                <HeroP>
                As a small local Service Provider, we are able to provide a quick response for your needs.
                </HeroP>
                <HeroP>
                Call us today and get  quality care.
                </HeroP>
            <HeroBtnWrapper>
            <NavLogoo>
                    <img src={ Background1 }/>
                    </NavLogoo>
                <Button onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                href="tel:0406789009"
                >
                    Call Us now {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
