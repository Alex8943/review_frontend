import { Button, Stack } from '@chakra-ui/react'
import react from '@chakra-ui/react'

const LoginButton = () => {
    
    return (

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='outline'>
            Login
        </Button>
        </Stack>
    );
    
};

export default LoginButton