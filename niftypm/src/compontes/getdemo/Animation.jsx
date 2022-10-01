import { Box, Heading, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import "./getDemo.css";
import { Radio, RadioGroup } from "@chakra-ui/react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
function Animation() {
  const [value, setValue] = React.useState("1");
  return (
    <Box
      w="90%"
      borderRadius="15px"
      m="auto"
      mt="50px"
      pt="50px"
      pb="80px"
      display="flex"
      bgGradient="linear(to-r, #fbfafa, blue.50, #f2fbfa)"
    >
      <Box border="1px solid red" pl="40px" w="50%">
        <Heading ml="16px">It’s so easy to be efficient</Heading>
        <Text ml="16px" mt="15px" mb="20px" fontSize={19} fontWeight="500">
          Team alignment, productivity, & smarter decisions <br />
          come naturally when your data is not fragmented <br />
          across multiple tools.
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Radio mr="40px" value="1">
                    {/* <RadioButtonCheckedIcon color="secondary"/> */}
                    <Box flex="1" textAlign="left">
                      <Text fontSize="22px" fontWeight="550">
                        Import into Nifty
                      </Text>
                    </Box>
                  </Radio>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                lineHeight="15px"
                fontSize="18px"
                fontWeight="500"
              >
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                Import from Asana, Basecamp, ClickUp,Jira, Trello, and <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                Wrike — or import your .CSV & Excel sheets to pick up <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                right where you left off.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Radio mr="40px" value="2">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="20px" fontWeight="500">
                        Native Integrations
                      </Text>
                    </Box>
                  </Radio>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                lineHeight="15px"
                fontSize="18px"
                fontWeight="500"
              >
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                We integrate with all of your favorite tools to make it <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                easy to push and sync data without disrupting your <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                workflow. Whether you’re in engineering, design, <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                management or sales — we have you covered. <br />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Radio mr="40px" value="3">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="20px" fontWeight="500">
                        {" "}
                        Workflow Automations
                      </Text>
                    </Box>
                  </Radio>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                fontSize="18px"
                lineHeight="15px"
                fontWeight="500"
              >
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>
                Let Nifty take care of your busy work with custom <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                if/then automations so you can save time & focus on <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                things that really matter. <br />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Radio mr="40px" value="4">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="20px" fontWeight="500">
                        {" "}
                        Custom Embeds
                      </Text>
                    </Box>
                  </Radio>
                </AccordionButton>
              </h2>

              <AccordionPanel
                pb={4}
                fontSize="18px"
                lineHeight="15px"
                fontWeight="500"
              >
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                across projects, tasks, and docs in Nifty to bring all <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                phases of a project's lifecycle in one place. <br />
                <span
                  style={{
                    fontSize: "40px",
                    color: "#48ccc2",
                    marginRight: "35px",
                  }}
                >
                  .
                </span>{" "}
                Embed thousands of third party apps and websites <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </RadioGroup>
      </Box>
      <Box border="1px solid red" w="50%">
        <div className="lol">
            <div className="circle1"> < GoogleIcon style={{color:"green",fontSize:45}}/> </div>
            <div className="circle2"> <AddToDriveOutlinedIcon style={{color:"red",fontSize:45}}/>  </div>
            <div className="circle3"> < GitHubIcon  style={{color:"black",fontSize:45}}/>  </div>
            <div className="circle4"> <YouTubeIcon style={{color:"red",fontSize:45}}/> </div>
            <div className="circle5"> < GoogleIcon style={{color:"red",fontSize:45}}/> </div>
            <div className="circle6"> < GoogleIcon style={{color:"red",fontSize:45}}/> </div>
            <div className="circle8"> < GoogleIcon style={{color:"red",fontSize:45}}/> </div>
            <div className="circle8"> < GoogleIcon style={{color:"red",fontSize:45}}/> </div>
          <div className="dot1">
            <div className="dot2">
              <div className="dot3">
                <img src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="tag1">
            <img src="https://niftypm.com/_nuxt/img/developer.c4e1e2e.png" alt="" srcset="" />
            <p>Developers</p>
        </div>
        <div className="tag2">
            <img src="https://niftypm.com/_nuxt/img/designer.197ec7b.png" alt="" srcset="" />
            <p>Designers</p>
        </div>
        <div className="tag3">
            <img src="https://niftypm.com/_nuxt/img/manager.349f23f.png" alt="" srcset="" />
            <p>Managers</p>
        </div>
        <div className="tag4">
            <img src="https://niftypm.com/_nuxt/img/sales.44a50d1.png" alt="" srcset="" />
            <p>Sales</p>
        </div>
        <div className="tag5">
            <img src="https://niftypm.com/_nuxt/img/marketing.3d9697e.png" alt="" srcset="" />
            <p>Marketing</p>
        </div>
      </Box>
    </Box>
  );
}
export default Animation;
