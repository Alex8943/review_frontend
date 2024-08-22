import axios from 'axios';

// Ensure that the correct API URL is being used
const API_URL = `${import.meta.env.VITE_BACKEND_URL}/reviews`;

export const getAllReviews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};


const getReviewTitle = `${import.meta.env.VITE_BACKEND_URL}/reviews/title`;

export const getReviewByTitle = async (title) => {
  try {
    const response = await axios.get(`${getReviewTitle}/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

