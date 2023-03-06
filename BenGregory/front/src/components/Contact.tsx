import { Box, Button, Link, Stack, Tooltip, Typography } from "@mui/joy"


const Contact = () => {
    const mail = "bengregorygbr@gmail.com"

 

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
        >
           
            <Typography level="display2">
                Thanks for checking out my portfolio!
            </Typography>
            <Stack p={10}>
                <Stack direction={"row"} spacing={4} justifyContent={"center"}>
                    <Link>
                        <Typography level="display1">GitHub</Typography>
                    </Link>
                   <Typography level="display1">LinkedIn</Typography>
                    
                    <Typography level="display1">Mail</Typography>
                   
                </Stack>
            </Stack>
        </Box>
    )
}

export default Contact