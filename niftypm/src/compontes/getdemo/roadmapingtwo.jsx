import {Heading,Text,Image,Box} from "@chakra-ui/react"
import {CheckCircleIcon}from "@chakra-ui/icons"
import { fontWeight } from "@mui/system"
export default function Roadmaping({maps}){
    console.log(maps[0])
return (
<Box>
<Box w="100%" display="flex"  mt="100px" justifyContent="center">
    <Box w="43%" ml="129px" border="1px solide red">
    <Heading>{maps[0].heading}</Heading>
    <Text mb="30px" fontSize={20} w="90%" lineHeight={1.5} fontWeight="500" mt="15px">{maps[0].cont}</Text>
    <Box lineHeight={2.5}>
   <CheckCircleIcon color='green.500' fontSize={20}/> <span  style={{fontSize:"20px", fontWeight:"500"}}> {maps[0].one}</span>  <br />
   <CheckCircleIcon color='green.500' fontSize={20}/> <span  style={{fontSize:"20px", fontWeight:"500"}}> {maps[0].two}</span> <br />
   <CheckCircleIcon color='green.500' fontSize={20}/> <span  style={{fontSize:"20px", fontWeight:"500"}}> {maps[0].three}</span> <br />
    </Box>
    </Box>
    <Box w="55%" >
      <Image src={maps[0].img} w="100%" h="100%" alt="images"/>
    </Box>
</Box>
<Box boxShadow='base' display="flex" gap="20px" alignItems="center" justifyContent="center" p='6' rounded='md' bg='white' w="100%" h="60px" mb="60px" borderRadius="0px 0px 15px 15px">
    <Image src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="logo" w="30px" h="30px"/>
    <Text fontSize="20px" color="#00baab" fontWeight="600">{"Try Nifty now. Thank us later >"}</Text>
</Box>
</Box>
)
}