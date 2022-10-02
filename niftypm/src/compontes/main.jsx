import { Box, Heading, Button, Input, Text, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const data = JSON.parse(localStorage.getItem("userData"));
function Main() {
  return (
    <>
      <Box w="100%" bg="white"  position="absolute">
        <Box
          calssName="nav"
          position="absolute"
          display="flex"
          justifyContent="space-between"
          bg="#111631"
          w="100%"
          h="40px"
        >
          <Box
            display="flex"
            w="auto"
            alignItems="center"
            ml="15px"
            justifyContent="space-between"
          >
            <Button w="30px" h="30px" bg="orange" color="white" fontSize="20px">
              {data ? data.name[0] : "user"}
            </Button>
            <Text
              color="white"
              ml="10px"
              zIndex=""
              fontSize="23px"
              fontWeight={600}
            >
              {data ? data.name : "user name"}
            </Text>
          </Box>
          <Box display="flex" alignItems="center" ml="-100px">
            <CircleNotificationsIcon
              style={{ fontSize: "30px", color: "white", marginRight: "35px" }}
            />
            <Button
              w="20px"
              fontSize="19px"
              h="20px"
              color="white"
              bg="#363c5b"
              mr="2px"
            >
              {"<"}
            </Button>
            <Button
              w="20px"
              fontSize="19px"
              h="20px"
              color="white"
              bg="#363c5b"
            >
              {">"}
            </Button>
          </Box>
          <Box ml="-200px" display="flex" alignItems="center">
            <Input
              type="tel"
              bg="#363c5b"
              border="none"
              w="500px"
              h="20px"
              placeholder="Search anyting..."
            />
          </Box>
          <Box mr="30px">
            <Button
              bg="#01b7a7"
              h="30px"
              mr="20px"
              color="white"
              w="100px"
              fontSize={19}
              borderRadius="8px"
            >
              {" "}
              + Create
            </Button>
            <Button w="30px" h="30px" bg="orange" color="white" fontSize="20px">
              {data ? data.name[0] : "user"}
            </Button>
          </Box>
        </Box>

        <Box
          className="mainSection"
          color="#1e2648"
          mt="40px"
          display="flex"
          w="100%"
        >
          <Box
            className="leftsection"
            bg="#1e2648"
            w="22%"
            h="660px"
            pt="10px"
            alignItems="center"
            textAlign="center"
          >
            <Box
              display="flex"
              color="white"
              ml="15px"
              cursor="pointer"
              mt="15px"
            >
              {" "}
              <JoinInnerIcon style={{ bg: "#717794", color: "#717794" }} />{" "}
              <Text ml="10px">Overview</Text>
            </Box>
            <Box
              display="flex"
              color="white"
              ml="15px"
              cursor="pointer"
              mt="15px"
            >
              <AssessmentIcon style={{ bg: "#717794", color: "#717794" }} />{" "}
              <Text ml="10px">Workloads</Text>
            </Box>
            <Box
              display="flex"
              color="white"
              ml="15px"
              cursor="pointer"
              mt="15px"
            >
              {" "}
              <CalendarMonthIcon
                style={{ bg: "#717794", color: "#717794" }}
              />{" "}
              <Text ml="10px">Calender</Text>
            </Box>
            <Box
              display="flex"
              color="white"
              ml="15px"
              cursor="pointer"
              mt="15px"
            >
              {" "}
              <FormatListBulletedIcon
                style={{ bg: "#717794", color: "#717794" }}
              />{" "}
              <Text ml="10px">All Task</Text>
            </Box>
            <Box
              display="flex"
              color="white"
              ml="15px"
              cursor="pointer"
              mt="15px"
            >
              <PlaylistAddCheckIcon
                style={{ bg: "#717794", color: "#717794" }}
              />{" "}
              <Text ml="10px">My Work</Text>
            </Box>
            <Text mt="35px" ml="-200px" fontSize="15px" color="white">
              FAVORITES {">"}
            </Text>
            <Box display="flex" w="100%" m="auto" justifyContent="center">
              <Button w="120px" color="white" mt="35px" bg="#2e365d">
                PROJECTS
              </Button>
              <Button w="120px" color="white" mt="35px" bg="#1e2648">
                CHAT
              </Button>
            </Box>
            <Box display="flex" mt="10px">
              <Input
                border="none"
                h="35px"
                bg="#1e2648"
                w="80%"
                ml="15px"
                placeholder="Go to project"
              />
              <AddIcon
                style={{
                  background: "#2e365d",
                  color: "white",
                  height: "35px",
                  width: "35px",
                  marginLeft: "3px",
                }}
              />
            </Box>
            <Box color="white" mt="30px" cursor="pointer" border="none">
              <Accordion allowMultiple>
                <AccordionItem border="none">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            GENERAL
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box display="flex" justifyContent="space-around">
                          <Button
                            w="10px"
                            h="25px"
                            bg="orange"
                            color="white"
                            fontSize="20px"
                          >
                            {data ? data.name[0] : "user"}
                          </Button>
                          <Text fontSize={15}> + Invite People</Text>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alineItems="center"
                        >
                          <Button
                            w="30px"
                            h="30px"
                            bg="orange"
                            mt="20px"
                            color="white"
                            fontSize="20px"
                          >
                            DP
                          </Button>{" "}
                          <Text mt="20px" ml="10px" fontWeight={500}>
                            {" "}
                            Demo Project
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
          <Box
            className="rightsection"
            position="absolute"
            ml="22%"
            h="660px"
            w="78%"
          >
            <Box
              className="nav2"
              boxShadow="sm"
              p="6"
              rounded="md"
              bg="white"
              h="70px"
              w="100%"
              diaplay="flex"
            >
              <Box display="flex" w="40%" alineItems="center">
                <Accordion allowMultiple>
                  <AccordionItem border="none" w="150px">
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box
                              flex="1"
                              mt="-10px"
                              fontSize={20}
                              fontWeight={700}
                              textAlign="left"
                            >
                              GENERAL
                            </Box>
                            <AccordionIcon
                              style={{
                                fontWeight: "700",
                                fontSize: "20px",
                                marginTop: "-10px",
                              }}
                            />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Text
                            boxShadow="sm"
                            p="6"
                            rounded="md"
                            bg="white"
                            w="500px"
                            color="balck"
                          >
                            Manage Protfolio
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
                <Button
                  w="30px"
                  h="30px"
                  bg="orange"
                  color="white"
                  fontSize="20px"
                >
                  {data ? data.name[0] : "user"}
                </Button>
                <Text ml="10px" fontWeight={500}>
                  {" "}
                  + Invite People
                </Text>
              </Box>

              <Box w="20%" mt="-10px" position="absolute" top="30px" left="80%">
                <CloudUploadIcon style={{ fontSize: "22px", width: "50px" }} />
                <Button bg="#02bbab" color="white">
                  {" "}
                  + Create Project
                </Button>
              </Box>
            </Box>
            <Box mt="20px" mb="20px" display="flex" gap="20px" ml="25px">
              <Box
                boxShadow="base"
                p="6"
                rounded="md"
                w="390px"
                h="220px"
                bg="white"
              >
                <AddIcon
                  style={{
                    color: "white",
                    marginTop: "35px",
                    background: "#01b9aa",
                    display: "block",
                    margin: "auto",
                    fontWeight: "800",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
                <Text
                  fontSize={19}
                  fontWeight="800px"
                  textAlign="center"
                  mt="35px"
                >
                  Create New Project
                </Text>
              </Box>
              <Box
                boxShadow="base"
                p="6"
                rounded="md"
                w="390px"
                h="220px"
                bg="white"
              >
                <Box display="flex" justifyContent="center" alineItems="center">
                  <Button
                    w="30px"
                    h="30px"
                    bg="orange"
                    mt="20px"
                    color="white"
                    fontSize="20px"
                    mb="35px"
                  >
                    DP
                  </Button>{" "}
                  <Text mt="20px" ml="10px" fontWeight={500}>
                    {" "}
                    Demo Project
                  </Text>
                </Box>
                <Text fontSize={14} textAlign="center">
                  In Progress...
                </Text>
                <Progress colorScheme="orange" size="sm" value={70} />
                <Button
                  w="25px"
                  h="35px"
                  bg="orange"
                  color="white"
                  fontSize="20px"
                  display="block"
                  margin="auto"
                  mt="35px"
                >
                  {data ? data.name[0] : "user"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Main;
