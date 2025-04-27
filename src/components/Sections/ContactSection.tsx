import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { contactInfo, openPosition } from '../../content/contact';
import { contactSectionContent } from '../../content/contact-section';

// Load environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nameInputRef.current?.focus();
        }
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };
  
  const { title, subtitle, form, contact } = contactSectionContent;
  
  return (
    <Section 
      id="contact" 
      title={title}
      subtitle={subtitle}
      className="bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <h3 className="text-xl font-bold mb-6">{form.title}</h3>
            
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg">
                {form.success}
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg">
                {form.error}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {form.labels.name}
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow ${
                    formErrors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder={form.placeholders.name}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {form.labels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow ${
                    formErrors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder={form.placeholders.email}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {form.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow resize-none ${
                    formErrors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder={form.placeholders.message}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="w-full py-3 text-base"
                disabled={formStatus === 'submitting'}
                icon={formStatus === 'submitting' ? undefined : <Send size={18} />}
              >
                {formStatus === 'submitting' ? form.button.submitting : form.button.idle}
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-8">{contact.title}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">{contact.email.label}</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-text-secondary hover:text-secondary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">{contact.location.label}</p>
                  <p className="text-text-secondary">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-medium text-lg mb-4">{contact.connect.title}</h4>
              <div className="flex gap-4">
                <a 
                  href={contactInfo.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label={contact.connect.social.github}
                >
                  <Github size={24} />
                </a>
                <a 
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label={contact.connect.social.linkedin}
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="p-4 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label={contact.connect.social.email}
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Send size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{openPosition.title}</h3>
                <p className="text-text-secondary">
                  {openPosition.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
