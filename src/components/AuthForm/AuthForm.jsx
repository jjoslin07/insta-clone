import {
	Box,
	Button,
	Center,
	Flex,
	Image,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const AuthForm = () => {
	const [isLogin, setIslogin] = useState(true);
	return (
		<>
			<Box border={'1px solid gray'} borderRadius={4} padding={5}>
				<VStack spacing={4}>
					<Image src="/logo.png" h={24} cursor={'pointer'} alt="Instagram" />
					<Input placeholder="Email" fontSize={14} type="email" />
					<Input placeholder="Password" fontSize={14} type="password" />
					{!isLogin ? (
						<Input
							placeholder="Confirm Passoword"
							fontSize={14}
							type="password"
						/>
					) : null}
					<Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14}>
						{isLogin ? 'Log in' : 'Sign Up'}
					</Button>
					{/** ------------------ OR --------------------- */}

					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						my={4}
						gap={1}
						w={'full'}
					>
						<Box flex={2} h={'1px'} bg={'gray.400'} />
						<Text mx={1} color={'white'}>
							OR
						</Text>
						<Box flex={2} h={'1px'} bg={'gray.400'} />
					</Flex>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						cursor={'pointer'}
					>
						<Image src="/google.png" w={5} alt="Google logo" />
						<Text mx={2} color={'blue.500'}>
							Log in with Google
						</Text>
					</Flex>
				</VStack>
			</Box>

			{/**----------------------- Switch between Login and signup ---------------------- */}
			<Box border={'1px solid gray'} borderRadius={4} padding={5}>
				<Flex alignItems={'center'} justifyContent={'center'}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "Don't have an account?" : 'Already have an account?'}
					</Box>
					<Box
						onClick={() => setIslogin(!isLogin)}
						cursor={'pointer'}
						color={'blue.500'}
					>
						{isLogin ? 'Sign up' : 'Log in'}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;
