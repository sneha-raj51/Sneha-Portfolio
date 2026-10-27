// Service for handling portfolio contact message delivery.
// Supports:
// 1. Web3Forms (Recommended - Free, direct to Gmail, no backend server needed)
// 2. Formspree (Alternative form service)
// 3. Custom Backend / Serverless API endpoint
// 4. Graceful Fallback (Direct prefilled mailto if no service is configured or on failure)

import { personalData } from '../data/portfolioData';

export const getContactConfig = () => {
  const web3FormsKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();
  const formspreeId = (import.meta.env.VITE_FORMSPREE_ID || import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim();
  const customApiUrl = (import.meta.env.VITE_CONTACT_API_URL || '').trim();

  const isConfigured = Boolean(web3FormsKey || formspreeId || customApiUrl);
  let provider = null;
  if (web3FormsKey) provider = 'web3forms';
  else if (formspreeId) provider = 'formspree';
  else if (customApiUrl) provider = 'custom';

  return {
    isConfigured,
    provider,
    web3FormsKey,
    formspreeId,
    customApiUrl,
    recipientEmail: personalData.email
  };
};

export const createMailtoUrl = ({ name = '', email = '', subject = '', message = '' }) => {
  const recipient = personalData.email;
  const emailSubject = subject.trim() || `Portfolio Inquiry from ${name.trim() || 'Visitor'}`;
  const bodyText = [
    `Hi Sneha,`,
    ``,
    message.trim(),
    ``,
    `---`,
    `Sender: ${name.trim() || 'Not specified'}`,
    `Email: ${email.trim() || 'Not specified'}`
  ].join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(bodyText)}`;
};

export const validateContactForm = ({ name, email, message }) => {
  const errors = {};

  const trimmedName = (name || '').trim();
  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const trimmedEmail = (email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  const trimmedMessage = (message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter a message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const sendContactMessage = async ({ name, email, subject, message, botcheck }) => {
  // 1. Anti-spam honeypot verification
  if (botcheck) {
    return {
      success: false,
      error: 'Spam detected. Submission rejected.'
    };
  }

  // 2. Validate inputs
  const validation = validateContactForm({ name, email, message });
  if (!validation.isValid) {
    return {
      success: false,
      validationErrors: validation.errors,
      error: Object.values(validation.errors)[0]
    };
  }

  const config = getContactConfig();

  // 3. Check if an email delivery service is configured
  if (!config.isConfigured) {
    return {
      success: false,
      notConfigured: true,
      error: 'No email delivery service has been configured yet in environment variables.'
    };
  }

  try {
    // Option A: Web3Forms (https://web3forms.com)
    if (config.provider === 'web3forms') {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: config.web3FormsKey,
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || `Portfolio Inquiry from ${name.trim()}`,
          message: message.trim(),
          from_name: `${name.trim()} (Portfolio)`,
          botcheck: ''
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        return {
          success: true,
          message: data.message || 'Your message has been sent successfully to my inbox.'
        };
      }

      return {
        success: false,
        error: data?.message || `Web3Forms delivery failed with status ${response.status}.`
      };
    }

    // Option B: Formspree (https://formspree.io)
    if (config.provider === 'formspree') {
      const endpoint = config.formspreeId.startsWith('http')
        ? config.formspreeId
        : `https://formspree.io/f/${config.formspreeId}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: subject?.trim() || `Portfolio Inquiry from ${name.trim()}`,
          message: message.trim()
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        return {
          success: true,
          message: 'Your message has been sent successfully to my inbox.'
        };
      }

      const errMsg =
        data?.errors?.map((e) => e.message).join(', ') ||
        data?.error ||
        `Formspree submission failed with status ${response.status}.`;

      return {
        success: false,
        error: errMsg
      };
    }

    // Option C: Custom Backend API URL
    if (config.provider === 'custom') {
      const response = await fetch(config.customApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || `Portfolio Inquiry from ${name.trim()}`,
          message: message.trim()
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== false) {
        return {
          success: true,
          message: data?.message || 'Your message has been sent successfully to my inbox.'
        };
      }

      return {
        success: false,
        error: data?.message || `Endpoint returned status ${response.status}.`
      };
    }

    return {
      success: false,
      error: 'Unrecognized delivery provider configuration.'
    };
  } catch (err) {
    return {
      success: false,
      error: `Network error while sending message: ${err.message || 'Please check your internet connection.'}`
    };
  }
};
