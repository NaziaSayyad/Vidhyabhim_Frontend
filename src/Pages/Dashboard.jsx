import { Button, Container, Text } from "@mantine/core"
import StudentChart from "../Components/Chart"

export const Dashboard = () =>{
    return(
        <>
       <Container>
       <Text size="xl" weight={700}>Welcome to Mantine</Text>
       <Button color="blue" mt="md">Click Me</Button>
       <StudentChart />
       </Container>
        </>
    )
}