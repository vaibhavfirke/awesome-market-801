import {Box ,Button} from "@chakra-ui/react"

export const Buttons =()=>{
return (
    <Box display="flex" gap="20px" fw="large">
            <Button br="10px" w="90px">Login</Button>
            <Button br="10px" w="90px" bg="#00baab" color="white">SignUp</Button>
          </Box>
)
}