import {
    Box,Text,
  } from "@chakra-ui/react";
  import "./getDemo.css"
  import "./roadmap.css"
  import { useState,useEffect } from "react";
  import Roadmaping from "./roadmapingtwo";
  const Eng=[
     {heading:"Engineering",
      cont:`Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.`,
      img:"https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp",
      one:"Real-time progress reporting with Milestones",
      two:"Custom development workflows with if/then rules",
      three:"Manage issues, bugs, and changes directly in one place",
      id:1}
  ]
  const s=[
    {heading:"Sales",
     cont:`Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.`,
     img:"https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp",
     one:"Track lead status and values for pipeline visibility",
     two:"Create & store sales collateral for streamlined access",
     three:"Automate the creation of projects upon closing of leads",
     id:1}
 ]
 const m=[
    {heading:"Marketing",
     cont:`Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.`,
     img:"https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp",
     one:"Expedite approval for creatives with Proofing",
     two:"Create & track marketing campaigns as Milestones",
     three:"Align content schedules using Calendar View for Tasks",
     id:1}
 ]
 const p=[
    {heading:"Product",
     cont:`Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.`,
     three:"Prioritize & track feature sprints as Milestones",
     one:"Build spec documents using Nifty or Google Docs",
     two:"Improve decision-making with custom Project Embeds",
     img:"https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp",
     id:1}
 ]
 const c=[
    {heading:"Client Management",
     cont:`Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.`,
     img:"https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp",
     one:"Instant messaging & one-click video meetings",
     two:"Centralize files & expedite approvals with Proofing",
     three:"Sharable project boards for real-time progress reporting",
     id:1}
 ]
 const i=[
    {heading:"IT",
     cont:`Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.`,
     img:"https://niftypm.com/_nuxt/img/large@1x.37d8320.webp",
     one:"Gather tickets using forms & prioritize resolutions",
     two:"Automate ticket assignments with status assignees",
     three:"Plan project timelines & deployments using Roadmaps",
     id:1}
 ]
  
  export default function Roadmap() {
      const [map,setMap]=useState(Eng);
      const [road,setRoad]=useState(true);
  useEffect(()=>{
  },[map])
  
  
      
          
    return (
      <Box>
        <Box w="100%" >
            <br />
          <Box
            w="90%"
            m="auto"
            pt="55px"
            borderRadius={"15px"}
            bgGradient="linear(to-r, blue.100, pink.100)"
          >
            <Box display="flex" w="80%" m="auto"  alignItems={"cneter"} gap="20px" fontWeight="600" fontSize="20px">
              <Text className="temp" cursor="pointer" onClick={()=>{setMap(Eng)}}>Engineering</Text>
              <Text mt="-15px" fontWeight="1200" fontSize="28px"className="temp">. . . .</Text>
              <Text cursor="pointer" onClick={()=>setMap(s)} className="temp">Sales</Text>
              <Text mt="-15px" fontWeight="1200" fontSize="28px" className="temp">. . . .</Text>
              <Text cursor="pointer" onClick={()=>setMap(m)} className="temp">Marketing</Text>
              <Text mt="-15px" fontWeight="1200" fontSize="28px" className="temp">. . . .</Text>
              <Text cursor="pointer" onClick={()=>setMap(p)} className="temp">Product</Text>
              <Text mt="-15px" fontWeight="1200" fontSize="28px" className="temp">. . . .</Text>
              <Text cursor="pointer" onClick={()=>setMap(c)} className="temp">Clint Management</Text>
              <Text mt="-15px" fontWeight="1200" fontSize="28px" className="temp">. . . .</Text>
              <Text cursor="pointer" onClick={()=>setMap(i)} className="temp">IT</Text>
            </Box>
            <Roadmaping maps={map}/>
          </Box>
        </Box>
      </Box>
    );
  }
  