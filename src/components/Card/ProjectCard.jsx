import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ButtonGroup = styled(motion.div)`
    display: none;
    width: 100%;
    gap: 10px;
    
    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

const ProjectButton = styled(motion.button)`
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    flex: 1;
    
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

const LiveDemoButton = styled(motion.a)`
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    text-decoration: none;
    flex: 1;
    
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const Card = styled(motion.div)`
    width: 330px;
    height: 480px;
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${ButtonGroup} {
        display: flex;
    }
`

const Image = styled(motion.img)`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled(motion.span)`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled(motion.div)`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled(motion.div)`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, setOpenModal, variants, index }) => {
    // Animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
            } 
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.4, delay: index * 0.1 + 0.2 } 
        }
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.4, delay: index * 0.1 + 0.3 } 
        }
    };

    const buttonHoverVariants = {
        hover: {
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    };

    // Get the link URL (prefer link, then webapp, then github)
    const liveLink = project.link || project.webapp || project.github;

    return (
        <Card
            variants={cardVariants}
            whileHover={{ 
                y: -15,
                boxShadow: "0 0 30px 5px rgba(132, 76, 230, 0.5)",
                transition: { duration: 0.3 }
            }}
        >
            <Image 
                src={project.image}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <Tags variants={fadeInVariants}>
                {project.tags?.map((tag, index) => (
                    <Tag 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.2 }}
                        whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "#854CE6", 
                            color: "#FFFFFF" 
                        }}
                    >
                        {tag}
                    </Tag>
                ))}
            </Tags>
            <Details variants={fadeInVariants}>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>
            <ButtonGroup
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
            >
                <ProjectButton 
                    onClick={() => setOpenModal({ state: true, project: project })}
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    View Project
                </ProjectButton>
              
            </ButtonGroup>
        </Card>
    )
}

export default ProjectCards