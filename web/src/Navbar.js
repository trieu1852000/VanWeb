import React from 'react';
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import {DownloadIcon} from '@chakra-ui/icons'
import LinkedInLogo from "./Logo/linkedin.png";
import Github from "./Logo/github.png";
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isSmallScreen = useBreakpointValue({ base: true, md: false });



  const Buttons = () => (
    <Box display="flex" flexDirection={isSmallScreen ? 'column':'row'} >
      <Button backgroundColor={'transparent'} mr="4" mb={isSmallScreen ? '4':'0'}>Home</Button>
      <Button backgroundColor={'transparent'} mr="4" mb={isSmallScreen ? '4':'0'}>Skill</Button>
      <Button backgroundColor={'transparent'} mr="4" mb={isSmallScreen ? '4':'0'}>Projects</Button>
      <Button backgroundColor={'transparent'} mr="4" mb={isSmallScreen ? '4':'0'}_hover={{backgroundColor:'transparent'}}>
        <Image src={Github} alt="Github" />
      </Button>
      <Button backgroundColor={'transparent'} mr="4" mb={isSmallScreen ? '4':'0'} _hover={{backgroundColor:'transparent'}}>
        <Image src={LinkedInLogo} alt="Linkedin" />    
    </Button>
      <Button 
        backgroundColor={'transparent'} 
        mr="4" mb={isSmallScreen ? '4':'0'} 
        border={'2px'} borderColor={'black'} 
        colorScheme='blackAlpha' 
        textColor={'black'} 
        rightIcon={<DownloadIcon/>}
        >Download Resume
        </Button>    
    </Box>
  );

  return (
    <Flex p="2" height={'90px'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} >
      {isSmallScreen && (
        <Button onClick={onOpen}><Box p="2">More</Box></Button>
      )}
      
      

      {isSmallScreen ? (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody>
                <Buttons />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      ) : (
        <Buttons />
      )}
    </Flex>
  );
}

export default Navbar;
