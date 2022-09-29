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
import { color, style } from "@mui/system";
import { useState,useEffect } from "react";
import { NavLink,link, useLoaderData } from "react-router-dom";
import Roadmaping from "./roadmap";
const Road=[
   {heading:"Set Goals & Timelines",
    cont:`Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed.Learn more `,
    img:"https://niftypm.com/_nuxt/img/small@1x.2ad5960.webp",
    id:1}
]
const Task=[
    {heading:"Collaborate on Tasks",
    cont:"Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views. Learn morechevron_right",
    img:"https://niftypm.com/_nuxt/img/large@1x.dd989ad.webp",
    id:1}
]
const discuss=[
    {heading:"Establish Knowledge Hub",
    cont:"Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. Learn morechevron_right",
    img:"https://niftypm.com/_nuxt/img/small@1x.af8c3a7.webp",
    id:1}
]
const docs=[
    {heading:"Create Docs & Wikis",
    cont:"Access automated progress reporting across all your projects and team activities to ensure operational clarity. Learn morechevron_righ",
    img:"https://niftypm.com/_nuxt/img/small@1x.3325511.webp",
    id:1}
]
const repo=[
   { heading:"Automate Reporting",
    cont:"Access automated progress reporting across all your projects and team activities to ensure operational clarity. Learn morechevron_righ",
    img:"https://niftypm.com/_nuxt/img/small@1x.ec6bb0c.webp",
    id:1}
]


export default function Roadmap() {
    const [map,setMap]=useState(Road);
    const [road,setRoad]=useState(true);
useEffect(()=>{
},[map])


    
        
  return (
    <Box>
      <Box w="100%">
        <Box
          w="90%"
          m="auto"
          borderRadius={"15px"}
          bgGradient="linear(to-r, blue.50, pink.50)"
        >
          <Box display="flex" justifyContent="center" alignItems={"cneter"} gap="20px" fontWeight="600" fontSize="20px">
            <Text onClick={()=>setMap(Road)}>Roadmaps</Text>
            <Text mt="-15px" fontWeight="1200" fontSize="28px">. . . .</Text>
            <Text onClick={()=>setMap(Task)}>Task</Text>
            <Text mt="-15px" fontWeight="1200" fontSize="28px">. . . .</Text>
            <Text onClick={()=>setMap(discuss)}>Discussions</Text>
            <Text mt="-15px" fontWeight="1200" fontSize="28px">. . . .</Text>
            <Text onClick={()=>setMap(docs)}>Docs</Text>
            <Text mt="-15px" fontWeight="1200" fontSize="28px">. . . .</Text>
            <Text onClick={()=>setMap(repo)}>Reporting</Text>
          </Box>
<Roadmaping maps={map}/>
        </Box>
      </Box>
    </Box>
  );
}
