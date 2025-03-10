import { useState, useEffect } from "react";
import { Box, Card, Container, Flex, Title } from "@mantine/core";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios"; // Import Axios for API calls

function StudentChart() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://vidhyabhim-backend.onrender.com/students"); // Replace with your API URL
            const studentCount = response.data.length; // Assuming API returns { count: 120 }
            console.log(studentCount);


        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    useEffect(() => {

        fetchData(); // Fetch immediately
        // const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

        // return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <Container size="lg">
            <Box
                display='flex'
                justify="center"
                // align="center" 
                gap='15%' >
                <Box style={{ background: 'lightblue', padding: '10px' }}>
                    <Title align="center" order={2} mt="md">
                        Total Students
                    </Title>
                </Box>
                <Box style={{ background: 'lightgreen', padding: '10px' }}>
                    <Title align="center" order={2} mt="md">
                        Total Batches
                    </Title>

                </Box>
                <Box style={{ background: 'lightcoral', padding: '10px' }}>
                    <Title align="center" order={2} mt="md">
                        Total Courses
                    </Title>
                </Box>
                <Box style={{ background: 'lightgreen', padding: '10px' }}>

                    <Title align="center" order={2} mt="md">
                        Total Subjects
                    </Title>
                </Box>

            </Box>



        </Container>
    );
}

export default StudentChart;
