import { Box } from "@chakra-ui/react";

import {useState} from "react"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

let product=[
    "Discussions",
    "Milestones",
    "Tasks",
    "Docs & Files",
    "Time Tracking",
    "Reporting",
    "Project Home",
    "Project Portfolios"]
    let resorcess=[
        "Blog",
        "Change Log",
        "Integrations",
        "Apps",
        "Pricing",
        "Affiliates",]
        let made=["Agile Development",
            "Client Management",
            "Digital Agencies",
            "Legal Case Management",
            "Marketing Teams",
            "Product Teams",];
        let trust=["Help Center",
           "Privacy",
            "Terms of Use",
            "Security",
            "Status",];
        let COMPARISIONS=["Airtable Alternative",
            "Asana Alternative",
            "Basecamp Alternative",
            "Clarizen Alternative",
            "ClickUp Alternative",
            "Confluence Alternative",
            "Flow Alternative",
            "Hive Alternative",
            "JIRA Alternative",
            "Monday.com Alternative"];
        let blog=["Why project management is broken (& how to fix it!)",
            "Why Remote Collaboration is more than just Communication",
           "Staying on top of your workloads with time tracking",
            "Best Legal Case Management Software for Law Firms"]

function Footer(){
    const [prod,setProd]=useState(product);
    const [reso]=useState(resorcess);
    const [madeFor]=useState(made);
    const [trustFor]=useState(trust);
    const [comp]=useState(COMPARISIONS);
    const [Blog]=useState(blog);
    return (
        <Box>
        <Box w='95%' p={4} m="auto" display="flex" alignItems="start" justifyContent="space-between">
<Box align="start" display="flex" flexDirection="column" gap="15px">
    <h6 style={{color:"#00baab", fontSize:"16px"}}>PRODUCT</h6>
    {prod.map((el)=>{
        return <p>{el}</p>
    })}
</Box>
<Box align="start" display="flex" flexDirection="column" gap="15px" >
    <h6 style={{color:"#00baab", fontSize:"16px"}}>RESOURCES</h6>
    {reso.map((el)=>{
        return <p>{el}</p>
    })}
</Box>
<Box align="start" display="flex" flexDirection="column" gap="15px">
    <h6 style={{color:"#00baab", fontSize:"16px"}}>MADE FOR</h6>
    {madeFor.map((el)=>{
        return <p>{el}</p>
    })}
</Box>
<Box align="start" display="flex" flexDirection="column" gap="15px">
    <h6 style={{color:"#00baab", fontSize:"16px"}}>TRUST FOR</h6>
    {trustFor.map((el)=>{
        return <p>{el}</p>
    })}
</Box>
<Box align="start"display="flex" flexDirection="column" gap="15px">
    <h6 style={{color:"#00baab", fontSize:"16px"}}>COMPARISIONS</h6>
    {comp.map((el)=>{
        return <p>{el}</p>
    })}
</Box>
<Box align="start" display="flex" flexDirection="column" gap="15px" w="20%">
    <h6 style={{color:"#00baab", fontSize:"16px"}}>BLOG</h6>
    {Blog.map((el)=>{
        return <p>{el}</p>
    })}
</Box>

        </Box>
        <Box  display="flex" justifyContent="space-between" w='95%' p={4} m="auto" mt="20px">
        <Box display="flex" gap="25px">
             <img src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="niftypm" width="100px" heigth="100px"  />
             <p style={{color:"#929fb2"}}> 2022 © Nifty Technologies, Inc. All rights reserved.</p>
        </Box>
               <Box display="flex" justifyContent="space-between" gap="15px">
              <LinkedInIcon/>
              <FacebookIcon/>
              <TwitterIcon/>
               </Box>
        </Box>
        </Box>
    )
}
export default Footer;