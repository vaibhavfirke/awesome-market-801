import { Box, Heading, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image
} from "@chakra-ui/react";
import React from "react";
import "./getDemo.css";
import "./roadmap.css";
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
      h="800px"
      borderRadius="15px"
      m="auto"
      position="sticky"
      mt="50px"
      pt="50px"
      pb="80px"
      display="flex"

      left="5%"
      bgGradient="linear(to-r, #fbfafa, blue.50, #f2fbfa)"
    >
      <Box pl="40px" w="50%">
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
                <AccordionButton className="temp">
                  <Radio mr="40px" value="1">
                    {/* <RadioButtonCheckedIcon color="secondary"/> */}
                    <Box flex="1" textAlign="left" >
                      <Text fontSize="22px" fontWeight="550" >
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
                <AccordionButton className="temp">
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
                <AccordionButton className="temp">
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
                <AccordionButton className="temp">
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
      <Box w="50%">
        <div className="lol">
            <div className="circle1"> <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google"></Image> </div>
            <div className="circle2"> <Image src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-128.png" alt="Github"></Image>  </div>
            <div className="circle3"> <Image src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png" alt=""></Image>   </div>
            <div className="circle4"> <Image src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google_Drive-128.png" alt="googlge drive"></Image> </div>
            <div className="circle5"> <Image src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-128.png" alt="yotube"></Image> </div>
            <div className="circle6"> <Image src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-128.png" alt="slack"></Image> </div>
            <div className="circle7"> <Image src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Invision-128.png" alt="Invision"></Image> </div>
            <div className="circle8"> <Image src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/216_Microsoft_logo_logos-128.png" alt="Microsoft"></Image> </div>
          <div className="dot1">
            <div className="dot2">
              <div className="dot3">
                <img src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="niftypm" />
              </div>
            </div>
          </div>
        </div>
        <div className="tag1">
            <img src="https://niftypm.com/_nuxt/img/developer.c4e1e2e.png" alt="developer"  />
            <p>Developers</p>
        </div>
        <div className="tag2">
            <img src="https://niftypm.com/_nuxt/img/designer.197ec7b.png" alt="Disigner"  />
            <p>Designers</p>
        </div>
        <div className="tag3">
            <img src="https://niftypm.com/_nuxt/img/manager.349f23f.png" alt="manager" />
            <p>Managers</p>
        </div>
        <div className="tag4">
            <img src="https://niftypm.com/_nuxt/img/sales.44a50d1.png" alt="sales"  />
            <p>Sales</p>
        </div>
        <div className="tag5">
            <img src="https://niftypm.com/_nuxt/img/marketing.3d9697e.png" alt="marketing"  />
            <p>Marketing</p>
        </div>
      </Box>
    </Box>
  );
}
export default Animation;
