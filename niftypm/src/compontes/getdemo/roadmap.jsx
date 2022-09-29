import {Heading,Text,Image,Box} from "@chakra-ui/react"

export default function Roadmaping({maps}){
    console.log(maps[0].heading)
return (
<Box>
<Heading textAlign="center" mt="50px" mb="25px">{maps[0].heading}</Heading>
<Text textAlign="center" margin="auto"   fontSize="20px" fontWeight="500" w="57%" mb="25px">{maps[0].cont}</Text>
<Image m="auto" mb="25px" w="80%" h="550px" borderRadius="15px" objectFit="content" src={maps[0].img} alt="screen"></Image>

</Box>
)
}