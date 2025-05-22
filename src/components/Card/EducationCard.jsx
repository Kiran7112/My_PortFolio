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
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
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
    border: 0.1px solid #854CE6;
`

const Top = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled(motion.img)`
    height: 70px;
    width: 70px;
    background-color: #000;
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

const Name = styled(motion.div)`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled(motion.div)`
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

const Grade = styled(motion.div)`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
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
                boxShadow: "0px 10px 25px rgba(133, 76, 230, 0.3)"
            }}
        >
            <Top variants={itemVariants}>
                <Image 
                    src={education.img} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                />
                <Body variants={itemVariants}>
                    <Name variants={itemVariants}>{education.school}</Name>
                    <Degree variants={itemVariants}>{education.degree}</Degree>
                    <Date variants={itemVariants}>{education.date}</Date>
                </Body>
            </Top>
            <Grade 
                variants={itemVariants}
                whileHover={{ color: "#854CE6" }}
            >
                <b>Grade: </b>{education.grade}
            </Grade>
            <Description variants={itemVariants}>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard