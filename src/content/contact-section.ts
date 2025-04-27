import { ContactSectionContent } from './types';

export const contactSectionContent: ContactSectionContent = {
  title: "Contact Me",
  subtitle: "Get in touch for collaborations, questions, or just to say hello.",
  form: {
    title: "Send Me a Message",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message"
    },
    placeholders: {
      name: "Your name",
      email: "your@email.com",
      message: "Your message..."
    },
    button: {
      idle: "Send Message",
      submitting: "Sending..."
    },
    success: "Thank you for your message! I'll get back to you soon.",
    error: "Sorry, there was an error sending your message. Please try again."
  },
  contact: {
    title: "Contact Information",
    email: {
      label: "Email",
      ariaLabel: "Email"
    },
    location: {
      label: "Location",
      ariaLabel: "Location"
    },
    connect: {
      title: "Connect With Me",
      social: {
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile",
        email: "Email"
      }
    }
  }
};