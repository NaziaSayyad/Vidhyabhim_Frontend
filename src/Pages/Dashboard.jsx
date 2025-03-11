import { Box, Button, Container, Flex, Text } from "@mantine/core"
import StudentChart from "../Components/StudentData"
import { Sidebar } from "../Components/Sidebar"

export const Dashboard = () =>{
    return(
        <>
       <Container>
            <StudentChart />
       
       </Container>
        </>
    )
}