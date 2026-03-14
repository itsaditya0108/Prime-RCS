import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS service.
 * This runs entirely in the browser - no backend server required.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.emailjs.com/ and create a free account.
 * 2. Add a new Email Service (e.g., 'gmail') -> Get your SERVICE_ID.
 * 3. Add a new Email Template -> Get your TEMPLATE_ID.
 *    - In the template, use variables like {{name}}, {{email}}, {{company}}, {{service}}, {{message}}
 * 4. Go to Account > API Keys -> Get your PUBLIC_KEY.
 * 5. Update the constants below with your actual IDs.
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
    // Debugging: Check if keys are loaded
    console.log("EmailJS Config Status:", {
        ServiceId: SERVICE_ID ? `${SERVICE_ID.substring(0, 5)}...` : "Missing",
        TemplateId: TEMPLATE_ID ? `${TEMPLATE_ID.substring(0, 5)}...` : "Missing",
        PublicKey: PUBLIC_KEY ? `${PUBLIC_KEY.substring(0, 5)}...` : "Missing",
    });

    // Check if keys are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn("EmailJS is not fully configured. Missing environment variables.");
        console.warn("If you added variables to .env, PLEASE RESTART THE SERVER.");

        return {
            success: false,
            message: "Configuration Error: EmailJS keys missing. Check console for details."
        };
    }

    try {
        const result = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            formData,
            PUBLIC_KEY
        );
        console.log('Email successfully sent!', result.text);
        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            success: false,
            message: error.text || 'Failed to send message. Please check your config.'
        };
    }
};
