import {Heading,Text,Image,Box} from "@chakra-ui/react"

export default function Roadmaping({maps}){
    console.log(maps[0].heading)
return (
<Box>
<Heading textAlign="center" mt="50px" mb="25px">{maps[0].heading}</Heading>
<Text textAlign="center" margin="auto"   fontSize="20px" fontWeight="500" w="57%" mb="25px">{maps[0].cont}</Text>
<Image m="auto" mb="25px" w="80%" h="550px" borderRadius="15px" objectFit="content" src={maps[0].img} alt="screen"></Image>
<Box boxShadow='base' display="flex" gap="20px" alignItems="center" justifyContent="center" p='6' rounded='md' bg='white' w="100%" h="60px" mb="60px" borderRadius="0px 0px 15px 15px">
    <Image src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="logo" w="30px" h="30px"/>
    <Text fontSize="20px" color="#00baab" fontWeight="600">{"Try Nifty now. Thank us later >"}</Text>
</Box>
</Box>
)
}