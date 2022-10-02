import {
  Box,
  Input,
  Button,
  Image,
  Text,
  Heading,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = JSON.parse(localStorage.getItem("userData"));
  
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleInputChangeP = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  console.log(email, password);
  const isError = email === "";
  const isErrorP = password === "";
const [alt,setalt]=useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
   


    if (data.email === email && data.password === password) {
      alert("Login Successfull ...");
      setalt(true)
      navigate("/main");
    }else{
      alert("Enter correct Details")
    }
  };
  return (
    <>
   
      <Box
        w="100%"
        m="auto"
        pt="80px"
        borderRadius="15px"
        bgGradient="linear(to-r, blue.50, pink.50 ,yellow.50)"
      >
        <Image
          src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
          alt="NiftyPm"
          w="120px"
          h="120px"
          m="auto"
        />
        <Box
          className="parent"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
        >
          <Box className="Leftsection">
            <Box className="hed1">
              <Button bg="red" color="white" zIndex={0} borderRadius={30}>
                COMING SOON
              </Button>
              <Text fontSize="22px" mt="-10px" fontWeight="800">
                Reporting Dashboard
              </Text>
            </Box>
            <Text lineHeight={1.5} mb="30px">
              Powerful reporting to keep you on top of your business <br />
              and workload. Customize your dashboard to gain <br />
              insights and make informed decisions.
            </Text>
            <Image
              src="https://nifty.pm/static/media/main.9818dcc508e7ef1f7d96.png"
              alt="reportingImg"
              w="100%"
            ></Image>
          </Box>
          <Box className="Rightsection">
            <Heading fontSize={28} mb="25px">
              {" "}
              Log in to your account
            </Heading>
            <Box>
              <FormControl isRequired isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  placeholder="name@company.com"
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email which you use for login.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage mb="20px">
                    Email is required.
                  </FormErrorMessage>
                )}
                {/* //--------------password---------------// */}
                <FormLabel color="lightblue">Password</FormLabel>
                <Input
                  type="email"
                  value={password}
                  placeholder="Password"
                  onChange={handleInputChangeP}
                />
                {!isErrorP ? (
                  <FormHelperText>
                    Enter the Password which you set .
                  </FormHelperText>
                ) : (
                  <FormErrorMessage mb="20px">
                    Password is required.
                  </FormErrorMessage>
                )}
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  mb="25px"
                  disabled={!email && !password}
                  w="100%"
                  mt="20px"
                  bg="#00baab"
                >
                  {" "}
                  Log in
                </Button>
              </FormControl>
              <Box
                display="flex"
                justifyContent="center"
                gap="10px"
                alineItem="center"
              >
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google"
                  w="25px"
                  h="25px"
                ></Image>
                <Text mt="-15px" color="orange">
                  Sign in With Google{" "}
                </Text>{" "}
              </Box>
              <Text
                textAlign="center"
                mt="10px"
                fontSize="18px"
                fontWeight="300"
              >
                Sign in With SSO
              </Text>
              <Text
                textAlign="center"
                mt="10px"
                fontSize="18px"
                fontWeight="300"
              >
                OR
              </Text>
              <Text textAlign="center">Dont't have an account ?</Text>
              <Button
                m="auto"
                display="block"
                mt="10px"
                color="orange"
                bg="white"
              >
                Sign up for free
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Login;
