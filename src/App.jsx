import './App.css'
import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from './utils/Themes';
import Navbar from "./components/Navbar/index"
import Hero from "./components/HeroSection/index"
import Skills from "./components/Skills/index"
import Education from "./components/Education/index.jsx"
import Certifications from "./components/Certifications/index.jsx"
import Achievements from "./components/Achievements/index.jsx"
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contact from './components/Contact/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProjectDetails from './components/ProjectDetails/index.jsx';
import { useState } from 'react';
import { motion } from "framer-motion";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled(motion.div)`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const StyledSection = styled(motion.div)`
  margin: 8px 0;
  display: block;
  width: 100%;
`;

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
      staggerChildren: 0.3
    }
  }
};

function App()
{
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <Hero />
            </motion.div>
            
            <Wrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Skills />
              </StyledSection>
              <br />
              <br />
            </Wrapper>
            
            <Wrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Experience />
              </StyledSection>
              <br />
            </Wrapper>
            
            <Wrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Certifications />
              </StyledSection>
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Achievements />
              </StyledSection>
              <br />
              <br />
            </Wrapper>
            
            <StyledSection
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </StyledSection>
            
            <Wrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Education />
              </StyledSection>
              <StyledSection
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Contact />
              </StyledSection>
            </Wrapper>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Footer />
            </motion.div>
          </motion.div>
          
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
