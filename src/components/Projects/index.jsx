import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../Card/ProjectCard.jsx';
import { motion } from 'framer-motion';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
`;

export const Title = styled(motion.div)`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
`;

export const Desc = styled(motion.div)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
`;

export const CardContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    return (
        <Container id="projects">
            <Wrapper
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInUp}
            >
                <Title
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Projects
                </Title>
                <Desc
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </Desc>
                <CardContainer
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {projects
                        .filter(project => toggle === 'all' || project.category === toggle)
                        .map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                openModal={openModal} 
                                setOpenModal={setOpenModal}
                                variants={fadeInUp}
                                index={index}
                            />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;