import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Card/ExperienceCard.jsx';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;

    @media screen and (max-width: 960px){
        padding: 0px;
    }
`

const Wrapper = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 0px 20px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        margin-bottom: 80px;
        padding: 0px 10px;
    }
`

export const Title = styled(motion.div)`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
    margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled(motion.div)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimeLineSection = styled(motion.div)`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const CustomTimeline = styled(Timeline)`
    .MuiTimelineItem-root {
        min-height: 100px;
    }

    .MuiTimelineConnector-root {
        min-height: 60px;
    }

    @media (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const Experience = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <Container 
            id='experience'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={containerVariants}
        >
            <Wrapper variants={containerVariants}>
                <Title variants={itemVariants}>Experience</Title>
                <Desc variants={itemVariants}>Here are some of the companies I've worked with.</Desc>
                <TimeLineSection variants={containerVariants}>
                    <CustomTimeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem 
                                key={index}
                                component={motion.div}
                                custom={index}
                                variants={itemVariants}
                            >
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' color='secondary' />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience