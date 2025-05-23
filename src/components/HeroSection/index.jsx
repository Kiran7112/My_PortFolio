import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import TypeWriter from "typewriter-effect"
import HeroImg from '../../images/Hero.jpg'
import HeroBgAnimation from '../HeroBgAnimation'
import { motion } from 'framer-motion'

export const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 110px 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
export const HeroLeftContainer = styled(motion.div)`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const HeroRightContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

export const Img = styled(motion.img)`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};
    object-fit: cover;

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

export const Title = styled(motion.div)`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const TextLoop = styled(motion.div)`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

export const SubTitle = styled(motion.div)`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled(motion.a)`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    display: block;
    text-decoration: none;
    width: 100%;
    max-width: 520px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Hero = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
        }
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: { 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
        }
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                    >
                        <Title variants={slideInLeft}>
                            Hi, I am <br /> {Bio.name}
                        </Title>
                        <TextLoop variants={slideInLeft}>
                            I am a
                            <Span>
                                <TypeWriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle variants={slideInLeft}>{Bio.description}</SubTitle>
                        <ResumeButton 
                            href={Bio.resume} 
                            target='_blank'
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer
                        variants={slideInRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <Img 
                            src={HeroImg} 
                            alt="hero-image" 
                            animate={pulseAnimation}
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero