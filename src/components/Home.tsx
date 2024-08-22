import React, { useEffect, useState } from "react";
import { getAllReviews } from "../service/apiclient";
import { Box, Text } from "@chakra-ui/react";
import Login from "./login_button";
import SearchBar from "./navigation/Searchbar";

const Home = () => {
  // State to hold the fetched reviews
  const [reviews, setReviews] = useState<any[]>([]);
  const [allReviews, setAllReviews] = useState<any[]>([]);  // Separate state to keep track of all reviews

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getAllReviews();
        
        // Log the fetched JSON object to the console
        console.log('Fetched Reviews JSON:', reviews);

        // Set both states with the fetched data
        setReviews(reviews);
        setAllReviews(reviews); // Store all reviews in a separate state
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSearchResult = (results) => {
    if (results.length > 0) {
      setReviews(results);  // If there are search results, display them
    } else {
      setReviews(allReviews);  // If no results, reset to show all reviews
    }
  };

  return (
    <>
      <Login />

      <SearchBar onSearchResult={handleSearchResult} />
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Text fontWeight="bold">{review.title}</Text>
            <Text>{review.description}</Text>
          </Box>
        ))
      ) : (
        <p>No reviews found.</p>  // This will rarely show up now since all reviews are displayed if no search result is found.
      )}
    </>
  );
};

export default Home;
