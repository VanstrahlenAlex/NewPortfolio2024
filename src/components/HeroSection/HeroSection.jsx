import {HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Title, TextLoop, SubTitle, ResumeButton, Span, Img } from "./HeroStyle";
import { Bio } from "../../data/constants.jsx";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Foto_Portafolio.jpg";
import HeroBgAnimation from "../HeroBgAnimation/index.jsx";



const HeroSection = () => {
  return (
    <div id="about">
        <HeroContainer>
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>

            <HeroInnerContainer>
                <HeroLeftContainer>
                    <Title>
                        Hi, I am <br />{Bio.name}
                    </Title>
                    <TextLoop>
                        I am a <Span> 
                            <Typewriter 
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <SubTitle>
                        {Bio.description}
                    </SubTitle>
                    <ResumeButton href={Bio.resume} target='display'>
                            Check Resume
                    </ResumeButton>
                </HeroLeftContainer>
                <HeroRightContainer>
                                <Img src={HeroImg} alt="Hero" />
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>
  )
}

export default HeroSection