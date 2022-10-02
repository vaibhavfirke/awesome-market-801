import{Box,Image,Text,Heading,InputGroup,Input,InputRightElement,Button} from "@chakra-ui/react"
function GetStarted(){
    return (
      <Box>
      <Box w="60%" m="auto" mt="100px" mb="100px" p="30px" border="1px solid #00baab" borderRadius="15px" boxShadow=" 0px 8px 16px 0px rgba(59, 59, 59, 0.4)">
<Image m="auto" w="50px" h="50px" src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="niftylogo"></Image>
<Heading textAlign="center" fontSize={45} mt="15px" fontWeight="700" mb="15px">Get Started Now</Heading>
<Text textAlign="center" fontSize={18} fontWeight="500">It takes less than 2 mins to sign up and create your first project <br /> or import your data from anywhere.</Text>
<InputGroup size="lg" w="80%"  m="auto" mt="15px" mb="15px">
          <Input pr="4.5rem" h="55px" placeholder="name@company.com" />
          <InputRightElement width="25%">
            <Button bg="#00baab" mt="6px" size="lg">
              Get Started
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box
          boxShadow=" 0px 8px 16px 0px rgba(59, 59, 59, 0.4)"
          m="auto"
          w="80%"
          h="55px"
          borderRadius="7px"
          display="flex"
          mt="30px"
          justifyContent="center"
        cursor="pointer"
         
        >
         <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google"/>
          <Text fontSize="lg" ml="20px" mt="10px" fontWeight="600" >
            Signup With Google
          </Text>{" "}
        </Box>
 <Text textAlign="center" color="#7c81a7" mt="30px">Free forever. No credit card required.</Text>
      </Box>
<Box display="flex" m="auto" width="50%" mb="35px" mt="35px">
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg"alt="tag"></Image>
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg"alt="tag"></Image>
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg"alt="tag"></Image>
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg"alt="tag"></Image>
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg"alt="tag"></Image>
    <Image  w="160px" h="110px" src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg"alt="tag"></Image>
</Box>
      </Box>
    )
}
export default GetStarted;
