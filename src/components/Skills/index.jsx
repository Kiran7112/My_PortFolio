import React from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaDatabase,
  FaDocker, FaAws, FaLinux, FaGit, FaGithub, FaNetworkWired,
  FaLaptopCode, FaServer, FaRobot, FaNode, FaShopify 
} from 'react-icons/fa';
import { 
  SiFirebase, SiPostman, SiKubernetes, SiAnsible, SiTerraform, SiJenkins, 
  SiNetlify, SiTensorflow, SiRedux, SiTypescript, SiDjango, SiFlask, 
  SiMongodb, SiFastapi, SiC, SiLangchain 
} from 'react-icons/si';
import { TbBrandVscode, TbCursorText, TbDatabaseSearch } from 'react-icons/tb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VscVscode } from "react-icons/vsc";
import { 
  faBrain, faCloud, faCogs, faCode, faDatabase, faServer, faRobot, faUsers 
} from '@fortawesome/free-solid-svg-icons';
import { FaBootstrap } from "react-icons/fa6";
import { motion } from 'framer-motion';

const skills = {
  languages: {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'C', icon: <SiC color="#A8B9CC" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    ],
  },
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 color="#E44D26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
      { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
    ],
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNode color="#339933" /> },
      { name: 'Spring Boot', icon: <FaJava color="#007396" /> },
      { name: 'Django', icon: <SiDjango color="#092E20" /> },
      { name: 'Flask', icon: <SiFlask color="#000000" /> },
      { name: 'Fast API', icon: <SiFastapi color="#009688" /> },
      { name: 'REST APIs', icon: <FontAwesomeIcon icon={faServer} color="#6E5494" /> },
      { name: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} color="#4479A1" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
      { name: 'Pinecone', icon: <TbDatabaseSearch color="#0000FF" /> },
    ],
  },
  devops: {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
      { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
      { name: 'Ansible', icon: <SiAnsible color="#EE0000" /> },
      { name: 'Terraform', icon: <SiTerraform color="#844FBA" /> },
      { name: 'CI/CD Jenkins', icon: <SiJenkins color="#D24939" /> },
      { name: 'AWS', icon: <FaAws color="#FF9900" /> },
      { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
    ],
  },
  ai_ml: {
    title: 'AI & ML',
    skills: [
      { name: 'AI Agents', icon: <FontAwesomeIcon icon={faRobot} color="#00BFFF" /> },
      { name: 'Generative AI', icon: <SiTensorflow color="#FF6F00" /> },
      { name: 'Machine Learning', icon: <FontAwesomeIcon icon={faBrain} color="#8E44AD" /> },
      { name: 'Deep Learning', icon: <FaRobot color="#3E8EDE" /> },
      { name: 'LLMs', icon: <FontAwesomeIcon icon={faCogs} color="#9B59B6" /> },
      { name: 'LangChain', icon: <SiLangchain color="#65C466" /> },
      { name: 'RAG', icon: <FontAwesomeIcon icon={faDatabase} color="#3498DB" /> },
    ],
  },
  other: {
    title: 'Other',
    skills: [
      { name: 'AEM', icon: <FontAwesomeIcon icon={faCode} color="#DA1F26" /> },
      { name: 'Cursor AI', icon: <TbCursorText color="#3E8EDE" /> },
      { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
      { name: 'Git', icon: <FaGit color="#F05032" /> },
      { name: 'GitHub', icon: <FaGithub color="#181717" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'OOP', icon: <FontAwesomeIcon icon={faCode} color="#6C5CE7" /> },
      { name: 'Agile', icon: <FontAwesomeIcon icon={faUsers} color="#00B894" /> },
      { name: 'Shopify', icon: <FaShopify color="#7AB55C" /> },
      { name: 'Alexa Skills', icon: <FontAwesomeIcon icon={faCogs} color="#00CAFF" /> },
      { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
    ],
  },
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  max-width: 500px;
  min-width: 300px;
  height: auto;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillTitle = styled(motion.h2)`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled(motion.div)`
  display: flex;
  height: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const skillCategoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 } }
  };

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <Container id="skills" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
      <SkillsContainer variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        {Object.values(skills).map((category, index) => (
          <Skill key={index} variants={skillCategoryVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <SkillTitle>{category.title}</SkillTitle>
            <SkillList variants={containerVariants}>
              {category.skills.map((skill, i) => (
                <SkillItem key={i} variants={skillItemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}>
                  {skill.icon} {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
