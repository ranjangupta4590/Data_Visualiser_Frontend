'use client'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'


const Singin = () => {

    const toast = useToast();

    const handleLogin = (event) => {
        toast({
            title: "Logged in",
            description: "You have been successfully logged in.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        // window.location.href = '/dashboard';  
    };
    
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address*</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your username"
                                value="admin@gmail.com"
                                borderColor="white"
                                disabled
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password*</FormLabel>
                            <Input
                                type="password"
                                value="admin"
                                disabled />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleLogin}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Singin;
