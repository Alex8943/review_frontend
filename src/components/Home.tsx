import React, { useEffect, useState } from "react";
import { getAllReviews } from "../service/apiclient";
import { Box, Text, VStack } from "@chakra-ui/react";
import Login from "./login_button";

const Home = () => {
  // State to hold the fetched reviews
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getAllReviews();
        
        // Log the fetched JSON object to the console
        console.log('Fetched Reviews JSON:', reviews);

        // Set the reviews state with the fetched data
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    // Call the function to fetch reviews when the component mounts
    fetchReviews();
  }, []);

  return (
    <>
      <Login />
      {/* Display the reviews */}
      <VStack spacing={4} align="start" p={4}>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
              <Text fontWeight="bold">{review.title}</Text>
              <Text>{review.description}</Text>
            </Box>
          ))
        ) : (
          <Text>No reviews available.</Text>
        )}
      </VStack>
    </>
  );
};

export default Home;
