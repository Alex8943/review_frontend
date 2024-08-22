import React, { useEffect, useState } from "react";
import { getAllReviews } from "../service/apiclient";
import { Box, Text, VStack } from "@chakra-ui/react";
import Login from "./login_button";
import SearchBar from "./navigation/Searchbar";
import Picture from "./Picture";

const Home = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [allReviews, setAllReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getAllReviews();
        console.log('Fetched Reviews JSON:', reviews);
        setReviews(reviews);
        setAllReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleSearchResult = (results) => {
    if (results.length > 0) {
      setReviews(results);
    } else {
      setReviews(allReviews);
    }
  };

  return (
    <>
      <Login />
      <Picture />
      
      <SearchBar onSearchResult={handleSearchResult} />
      <VStack
        align="start" 
        spacing={8}  
        ml={8}  
        mt={4}
      >
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              maxW="500px"  
              overflow="hidden"  
            >
              <Text
                fontWeight="bold"
                isTruncated  
                fontSize="lg"
                mb={2} 
              >
                {review.title}
              </Text>
              <Text
                noOfLines={3} 
                color="gray.600"
              >
                {review.description}
              </Text>
            </Box>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </VStack>
    </>
  );
};

export default Home;
