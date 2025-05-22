import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Card/EducationCard';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 20px 0px 20px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 40px 10px 0px 10px;
    }
`;

const Title = styled(motion.div)`
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

const Desc = styled(motion.div)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled(motion.div)`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
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

const Education = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Container 
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <Wrapper variants={containerVariants}>
                <Title variants={itemVariants}>Education</Title>
                <Desc variants={itemVariants}>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection variants={containerVariants}>
                    <CustomTimeline>
                        {education.map((edu, index) => (
                            <TimelineItem 
                                key={index}
                                component={motion.div}
                                custom={index}
                                variants={itemVariants}
                            >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <motion.div 
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                        custom={index}
                                    >
                                        <EducationCard education={edu}/>
                                    </motion.div>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education