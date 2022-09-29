import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
export default function GetDemo() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <Box
        w="100%"
        bgGradient="linear(#f3f6fa,#ececee, #fbf8f9)"
        m="auto"
        pt="30px"
      >
        <Box position="absolute" top="80px" left="47%">
          <Button
            bg="#EDF2F7"
            w="100px"
            h="100px"
            background="white"
            borderRadius="50%"
          >
            {" "}
            <PlayArrowIcon fontSize="large" color="primary" />
          </Button>
        </Box>
        <Image
          src="https://niftypm.com/_nuxt/img/large@1x.8a3e5ad.webp"
          alt="Home Screen"
          m="auto"
          h="210px"
          w="53%"
          objectFit="cover"
          border="10px solid #e5ecf6"
          borderRadius="15px"
        />
        <Heading
          display="flex"
          m="auto"
          justifyContent="center"
          alignItems="center"
        >
          The ultimate project management{" "}
          <Image
            src="https://niftypm.com/_nuxt/img/large@1x.639e4a2.webp"
            alt="Home Screen"
            w="40px"
            h="27px"
            ml="15px"
          />{" "}
        </Heading>

        <Text fontSize="lg" textAlign="center" mt="12px">
          {" "}
          Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.{" "}
          <br />
          Nifty is one app to unite teams, goals, and actions in one place.
        </Text>
        <InputGroup size="lg" w="40%" m="auto" mt="15px" mb="15px">
          <Input pr="4.5rem" placeholder="name@company.com" />
          <InputRightElement width="25%">
            <Button bg="#00baab" size="lg">
              Get Started
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box
          boxShadow=" 0px 8px 16px 0px rgba(59, 59, 59, 0.4)"
          m="auto"
          w="40%"
          h="55px"
          borderRadius="7px"
          display="flex"
          mt="20px"
          justifyContent="center"
        cursor="pointer"
         
        >
         <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google"/>
          <Text fontSize="lg" ml="20px" mt="10px" fontWeight="600" >
            Signup With Google
          </Text>{" "}
        </Box>
        <Text textAlign="center" mt="20px" mb="30px">Free forever. No credit card required.</Text>
        <br />
        
      </Box>
<Box className="2">
    <Text textAlign="center" color="#acbad0" mt="35px" mb="20px">JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</Text>
    <Box className="images" display="flex" justifyContent="center" gap="25px">
        <Image objectFit="contain" width="110px" height="50px" src="https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg" alt=""></Image>
        <Image objectFit="contain" width="110px" height="50px" src="https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg" alt=""></Image>
        <Image objectFit="contain" width="110px" height="50px" src="https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg" alt=""></Image>
        <Image objectFit="contain" width="110px" height="50px" src="https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg" alt=""></Image>
        <Image objectFit="contain" width="110px" height="50px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K" alt="ibm"></Image>
        <Image objectFit="contain" width="110px" height="50px" src="https://niftypm.com/_nuxt/img/logo-loreal.8cc4fed.svg" alt="loral"></Image>
        <Image objectFit="contain" width="110px" height="50px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==" alt="nyu"></Image>
    </Box>
    <br/>
    <br/>
    <br/>
    <br/>
    <Text textAlign="center" fontSize="18px" fontWeight="700" color="#acbad0" mt="35px" mb="20px">SAY GOODBYE TO STATUS MEETINGS</Text>
<br />
 
</Box>

    </Box>
  );
}
