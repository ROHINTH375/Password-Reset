import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

// Forgot Password API call
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Reset Password API call
export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
