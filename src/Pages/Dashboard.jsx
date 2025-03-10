import { Button, Container, Text } from "@mantine/core"
import RealTimeChart from "../Components/Chart"

export const Dashboard = () =>{
    return(
        <>
       <Container>
       <Text size="xl" weight={700}>Welcome to Mantine</Text>
       <Button color="blue" mt="md">Click Me</Button>
       <RealTimeChart />
       </Container>
        </>
    )
}