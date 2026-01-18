/**
 * Web3Forms API Integration
 * Handles form submissions to Web3Forms service
 */

const WEB3FORMS_ACCESS_KEY = "1d6c27e2-46f1-4a26-a1c0-47e643903274";
const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

/**
 * Submit form data to Web3Forms
 * @param {Object} formData - Form data object
 * @param {string} subject - Optional email subject
 * @returns {Promise<Object>} Response from Web3Forms API
 */
export const submitToWeb3Forms = async (formData, subject = null) => {
  try {
    // Create FormData object
    const formDataToSend = new FormData();
    
    // Add access key
    formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
    
    // Add subject if provided
    if (subject) {
      formDataToSend.append("subject", subject);
    }
    
    // Add all form fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined && formData[key] !== '') {
        formDataToSend.append(key, formData[key]);
      }
    });
    
    // Submit to Web3Forms
    const response = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      body: formDataToSend,
    });
    
    const data = await response.json();
    
    if (data.success) {
      return {
        success: true,
        message: data.message || "Form submitted successfully!",
        data: data,
      };
    } else {
      throw new Error(data.message || "Form submission failed");
    }
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    throw error;
  }
};

