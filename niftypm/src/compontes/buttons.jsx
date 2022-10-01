import { useDisclosure } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
export const Buttons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isOpens, onOpens, onCloses } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box display="flex" gap="20px" fw="large">
      <Link to="/login"><Button br="10px" w="90px">
        Login
      </Button></Link>
      
      <Button onClick={onOpen} br="10px" w="90px" bg="#00baab" color="white">
        SignUp
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <Image
            Src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
            alt="NiftyPm"
            w="100px"
            h="100px"
            m="auto"
          />
          <ModalHeader
            mt={-5}
            textAlign="center"
            lineHeight={1}
            fontWeight="500"
            fontSize={48}
          >
            Get started in less than 1 minute!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                h="50px"
                type="email"
                mb={5}
                ref={initialRef}
                placeholder="Name@company.com"
              />
              <Input
                h="50px"
                type="text"
                ref={initialRef}
                placeholder="Full Name"
              />
              <Input h="50px" type="password" mt={5} placeholder="Password" />
            </FormControl>
            <Box mt={5} textAlign="center" fontWeight={600}>
              OR
            </Box>
            <Box
              boxShadow="md"
              m="auto"
              w="100%"
              h="55px"
              borderRadius="7px"
              display="flex"
              mt="20px"
              justifyContent="center"
              cursor="pointer"
            >
              <Image
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
              />
              <Text fontSize="lg" ml="20px" mt="13px" fontWeight="600">
                Signup With Google
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button m="auto" w="100%" colorScheme="blue">
              Get Started
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const ButtonL = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isOpens, onOpens, onCloses } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box display="flex" gap="20px" fw="large">
      <Button  onClick={onOpen}  br="10px" w="90px">
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
       
      >
        <ModalOverlay />
        
        <ModalContent >
          <Image
            Src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
            alt="NiftyPm"
            w="100px"
            h="100px"
            m="auto"
          />
          <ModalHeader
            mt={-5}
            textAlign="center"
            lineHeight={1}
            fontWeight="500"
            fontSize={48}
          >
            Get started in less than 1 minute!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                h="50px"
                type="email"
                mb={5}
                ref={initialRef}
                placeholder="Name@company.com"
              />
              <Input
                h="50px"
                type="text"
                ref={initialRef}
                placeholder="Full Name"
              />
              <Input h="50px" type="password" mt={5} placeholder="Password" />
            </FormControl>
            <Box mt={5} textAlign="center" fontWeight={600}>
              OR
            </Box>
            <Box
              boxShadow="md"
              m="auto"
              w="100%"
              h="55px"
              borderRadius="7px"
              display="flex"
              mt="20px"
              justifyContent="center"
              cursor="pointer"
            >
              <Image
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
              />
              <Text fontSize="lg" ml="20px" mt="13px" fontWeight="600">
                Signup With Google
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button m="auto" w="100%" colorScheme="blue">
              Get Started
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};