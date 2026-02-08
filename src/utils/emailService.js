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

const SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_gmail"
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., "template_contact_form"
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "user_xyz123"

export const sendEmail = async (formData) => {
    // Check if keys are configured
    if (SERVICE_ID === "YOUR_SERVICE_ID" || PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        console.warn("EmailJS is not configured yet. Simulating success for demo.");
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Form Data Submitted:", formData);
                resolve({ success: true, message: "Demo Mode: Email simulated. Configure EmailJS to send real emails." });
            }, 1000);
        });
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
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
};
