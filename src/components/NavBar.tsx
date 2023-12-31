import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={ logo } alt='logo' boxSize='60px' padding='5px' />
            <ColorModeSwitch />
        </HStack>
  )
}

export default NavBar