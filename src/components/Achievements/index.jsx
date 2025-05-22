import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0 100px 0;
  scroll-behavior: smooth;

  @media screen and (max-width: 960px) {
    padding: 30px 0 60px 0;
  }
`;

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
  padding: 0 20px;

  @media (max-width: 960px) {
    gap: 16px;
  }
`;

const Title = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 10px rgba(128, 76, 230, 0.3);

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
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const AchievementsContainer = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const AchievementCard = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 20px;
  transition: all 0.4s ease-in-out;
  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  background: rgba(25, 25, 36, 0.8);
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: 0px 0px 30px rgba(23, 92, 230, 0.5);
    transform: translateY(-7px);
    border-color: #854ce6;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #854ce6 0%, #306ee8 100%);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 12px;
    align-self: center !important;
    margin: 0 auto !important;
    width: 100%;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0 0 120px;
  height: 120px;
  width: 120px;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(133, 76, 230, 0.5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  ${AchievementCard}:hover & {
    border-color: #854ce6;
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
  }
`;

const AchievementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.5s ease;

  ${AchievementCard}:hover & {
    transform: scale(1.1);
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const AchievementTitle = styled(motion.div)`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  line-height: 1.3;

  ${AchievementCard}:hover & {
    transform: translateX(8px);
    color: #854ce6;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    ${AchievementCard}:hover & {
      transform: none;
    }
  }
`;

const AchievementOrganization = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  color: #854ce6;
  transition: all 0.3s ease;

  ${AchievementCard}:hover & {
    transform: translateX(8px);
    color: #306ee8;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    ${AchievementCard}:hover & {
      transform: none;
    }
  }
`;

const AchievementDescription = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + '99'};
  transition: all 0.3s ease;
  line-height: 1.6;

  ${AchievementCard}:hover & {
    transform: translateX(5px);
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    ${AchievementCard}:hover & {
      transform: none;
    }
  }
`;

const Badge = styled(motion.div)`
  position: absolute;
  top: -12px;
  right: 30px;
  background: linear-gradient(135deg, #854ce6 0%, #306ee8 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all 0.3s ease;
  z-index: 2;

  ${AchievementCard}:hover & {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    right: 20px;
  }
`;

const TimelineIndicator = styled(motion.div)`
  position: absolute;
  left: ${props => (props.index % 2 === 0 ? '-50px' : 'auto')};
  right: ${props => (props.index % 2 === 1 ? '-50px' : 'auto')};
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #854ce6 0%, #306ee8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(133, 76, 230, 0.6);
  z-index: 2;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #854ce6 0%, #306ee8 100%);
  transform: translateX(-50%);
  z-index: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const achievements = [
  {
    id: 1,
    title: 'Best Employee of the Quarter at EleFit',
    organization: "Awarded during EleFit's All-Hands Meet",
    description:
      'Honored as Best Employee of the Quarter for outstanding contributions to the company\'s mission to build a leading fitness ecosystem, recognizing my collaboration, support, and leadership within the team.',
    image:
      'https://theelefit.com/cdn/shop/files/freepik_br_3e6ca94d-018d-4329-8cd3-828c77c68075_1.svg?v=1737707946&width=700',
    badge: 'Top Performer',
  },
  {
    id: 2,
    title: 'Hall of Fame Recognition for Discovering Critical Bugs',
    organization: 'Issued by Inflectra Corporation',
    description:
      'Recognized for identifying and reporting critical vulnerabilities, significantly enhancing the security posture of the company\'s website.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQob0fOTKY6qXzBJqGrVi79AnnkOKz94VeQ7Q&s',
    badge: 'Security Expert',
  },
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Container
      id="achievements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <Wrapper variants={containerVariants}>
        <Title variants={titleVariants}>Achievements</Title>
        <Desc variants={titleVariants}>
          Recognition for my work and contributions in the professional field.
        </Desc>

        <AchievementsContainer variants={containerVariants}>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              variants={cardVariants}
              whileHover={{
                y: -7,
                boxShadow: '0px 10px 30px rgba(23, 92, 230, 0.5)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <Badge variants={badgeVariants}>{achievement.badge}</Badge>
              <ImageContainer variants={imageVariants}>
                <AchievementImage src={achievement.image} alt={achievement.title} />
              </ImageContainer>
              <TextContent>
                <AchievementTitle
                  variants={itemVariants}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  {achievement.title}
                </AchievementTitle>
                <AchievementOrganization
                  variants={itemVariants}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  {achievement.organization}
                </AchievementOrganization>
                <AchievementDescription
                  variants={itemVariants}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  {achievement.description}
                </AchievementDescription>
              </TextContent>
            </AchievementCard>
          ))}
        </AchievementsContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;