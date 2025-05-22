import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Document = styled(motion.img)`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #fff;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled(motion.div)`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled(motion.div)`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled(motion.img)`
    height: 70px;
    width: 70px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;
    object-fit: contain;
    @media only screen and (max-width: 768px){
        height: 40px;
        width: 40px;
    }
`

const Body = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled(motion.div)`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled(motion.div)`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled(motion.div)`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
`

const ItemWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled(motion.div)`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ExperienceCard = ({ experience }) => {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <Card
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
                y: -5, 
                boxShadow: "0px 10px 25px rgba(23, 92, 230, 0.3)"
            }}
        >
            <Top variants={itemVariants}>
                <Image 
                    src={experience.img} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                />
                <Body variants={itemVariants}>
                    <Role variants={itemVariants}>{experience.role}</Role>
                    <Company variants={itemVariants}>{experience.company}</Company>
                    <Date variants={itemVariants}>{experience.date}</Date>
                </Body>
            </Top>
            <Description variants={itemVariants}>
                {experience.desc}
                {experience?.skills &&
                    <>
                        <br />
                        <Skills variants={itemVariants}>
                            <b>Skills:</b>
                            <ItemWrapper variants={itemVariants}>
                                {experience.skills.map((skill, index) => (
                                    <Skill 
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            color: "#854CE6",
                                            scale: 1.05
                                        }}
                                    >
                                        • {skill}
                                    </Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc && (
                <a href={experience.doc} target='new'>
                    <Document 
                        src={experience.doc}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    />
                </a>
            )}
        </Card>
    )
}

export default ExperienceCard