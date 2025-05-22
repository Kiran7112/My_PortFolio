import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  gap: 12px;
`;

const Title = styled(motion.h2)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 12px;
  width: 100%;
`;

const ContactInput = styled(motion.input)`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  background-color: black;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled(motion.textarea)`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  background-color:black;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled(motion.button)`
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  color: #f44336;
  font-size: 14px;
  margin: 4px 0;
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // EmailJS configuration with actual values
    const serviceId = 'service_146q528';
    const notificationTemplateId = 'template_ig9xa0p'; // Template for owner notifications
    const confirmationTemplateId = 'template_9iix3pw'; // Template for user confirmations
    const publicKey = 'hTP1iwCvM6lAODRbi';

    // First, send notification email TO THE OWNER
    emailjs.send(
      serviceId,
      notificationTemplateId,
      {
        from_name: form.name,
        email: 'maddireddykirankumar2117@gmail.com', // Owner's email as recipient
        from_email: form.email, // Add user's email to display in the Email field
        subject: form.subject,
        message: form.message,
        reply_to: form.email, // User's email for reply-to
      },
      publicKey
    )
      .then(() => {
        // Then, send confirmation email TO THE USER
        return emailjs.send(
          serviceId,
          confirmationTemplateId,
          {
            email: form.email, // Send to user's email
            from_name: 'Kiran Maddireddy',
            subject: `Re: ${form.subject}`,
            message: form.message,
            reply_to: 'maddireddykirankumar2117@gmail.com',
            to_name: form.name,
          },
          publicKey
        );
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setSnackbarMessage('Message sent successfully!');
        setOpen(true);

        // Reset form
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong. Please try again later.');
        setSnackbarMessage('Failed to send message. Please try again.');
        setOpen(true);
        console.error(error);
      });
  };

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

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  if (success) {
    return (
      <Container 
        id='contact'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <Wrapper variants={containerVariants}>
          <Title variants={itemVariants}>Contact</Title>
          <Desc variants={itemVariants}>Thanks for reaching out! I'll get back to you soon.</Desc>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container 
      id='contact'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <Wrapper variants={containerVariants}>
        <Title variants={itemVariants}>Contact🚀</Title>
        <Desc variants={itemVariants}>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm 
          ref={formRef}
          onSubmit={handleSubmit}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <ContactInput 
            type="email" 
            placeholder="Your Email" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            required 
            variants={formFieldVariants}
            whileFocus={{ 
              borderColor: "#854CE6", 
              boxShadow: "0 0 0 2px rgba(133, 76, 230, 0.25)" 
            }}
          />
          
          <ContactInput 
            type="text" 
            placeholder="Your Name" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            required 
            variants={formFieldVariants}
            whileFocus={{ 
              borderColor: "#854CE6", 
              boxShadow: "0 0 0 2px rgba(133, 76, 230, 0.25)" 
            }}
          />
          
          <ContactInput 
            type="text" 
            placeholder="Subject" 
            name="subject" 
            value={form.subject}
            onChange={handleChange}
            required 
            variants={formFieldVariants}
            whileFocus={{ 
              borderColor: "#854CE6", 
              boxShadow: "0 0 0 2px rgba(133, 76, 230, 0.25)" 
            }}
          />
          
          <ContactInputMessage 
            placeholder="Message" 
            rows="4" 
            name="message" 
            value={form.message}
            onChange={handleChange}
            required 
            variants={formFieldVariants}
            whileFocus={{ 
              borderColor: "#854CE6", 
              boxShadow: "0 0 0 2px rgba(133, 76, 230, 0.25)" 
            }}
          />
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <ContactButton 
            type="submit" 
            disabled={loading}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(133, 76, 230, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={snackbarMessage}
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;