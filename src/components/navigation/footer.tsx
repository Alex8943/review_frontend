import { Flex, Box, Link, Text, Icon, HStack, VStack } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

  const footer = () => {
    
    return (

          <Box as="footer" py={4} bg="teal.500" color="white">
            <HStack justifyContent="center" spacing={4}>
              <Text>Connect with me:</Text>
              <Link href="https://www.linkedin.com/in/your-profile" isExternal>
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
            </HStack>
            <Text textAlign="center" mt={2}>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Text>
          </Box>
    )
  }

export default footer
