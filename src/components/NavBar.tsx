import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <HStack>
            <Image src={ logo } alt='logo' boxSize='60px' padding='5px' />
            <Text>NavBar</Text>
        </HStack>
  )
}

export default NavBar