import { Box, Input, Button, Image } from "@chakra-ui/react";
function Login() {
  return (
    <>
      <Box
        w="100%"
        m="auto"
        borderRadius="15px"
        bgGradient="linear(to-r, blue.100, pink.200 ,yellow.100)"
      >
        <Image
          Src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
          alt="NiftyPm"
          w="120px"
          h="120px"
          m="auto"
        />
        <Box w="70%" h="600px" border="1px solid red" display="flex" m="auto">
          <Box w="50%"  border="1px solid #d2d4ea"></Box>
          <Box w="50%" bg="white" border="1px solid black"></Box>
        </Box>
      </Box>
    </>
  );
}
export default Login;
