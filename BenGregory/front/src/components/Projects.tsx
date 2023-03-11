import { Box, Button, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Projects = (props: {projects:any}) => {
    const [projects, setProjects] = useState(props.projects);
    const [displayedProject, setDisplayedProject] = useState({
        title: "",
        description: "",
        link: null
    });

    

    useEffect(() => {
        console.log(props)
        setProjects(props.projects)

        document.title = "Ben Gregory - Projects"
        if(projects.length === 0) return
        setDisplayedProject(projects[0])
        
        
    }, [props.projects])

    const nextProject = () => {
        if(displayedProject === null) return
        const currentIndex = projects.indexOf(displayedProject)
        if (currentIndex === projects.length - 1) {
            setDisplayedProject(projects[0])
        } else {
            setDisplayedProject(projects[currentIndex + 1])
        }
    }

    const previousProject = () => {
        if(displayedProject === null) return
        const currentIndex = projects.indexOf(displayedProject)
        if (currentIndex === 0) {
            setDisplayedProject(projects[projects.length - 1])
        } else {
            setDisplayedProject(projects[currentIndex - 1])
        }
    }



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <Typography level="display1">Projects</Typography>
            <Stack direction={"row"}
                spacing={4}
                sx={{
                    width: '100%',
                    minHeight: '400px',
                    maxWidth: '700px',
                    textAlign: 'center',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button onClick={previousProject}
                    variant="plain"
                    color="neutral"
                    sx={{
                        height: 'fit-content',
                        width: 'fit-content',
                    }}

                >
                    <ChevronLeftIcon />
                </Button>
                
                    {
                        displayedProject !== null ?
                        <Stack sx={{
                            width: '100%',
                              maxWidth: '600px',
                              textAlign: 'center',
                              p: 2,
                              
  
                          }}
                          spacing={2}
                     >
                              <Typography level="h1">{displayedProject.title}</Typography>
                              <Typography level="body1">{displayedProject.description}</Typography>
                              {
                                  displayedProject.link !== null && displayedProject.link !== undefined ?
                                      <Link to={displayedProject.link} target="_blank">
                                          <Button variant="soft" color="success">View</Button>
                                      </Link>
                                  : null
                              }
  
                    </Stack>

                        : null
                    }
                
                   
                   
              
                <Button onClick={nextProject}
                    variant="plain"
                    color="neutral"
                    sx={{
                        height: 'fit-content',
                        width: 'fit-content',
                    }}
                >
                    <ChevronRightIcon />
                </Button>
                

            </Stack>
            <Stack direction={"row"} spacing={4}>
                <Link to={"/"}>
                    <Typography level="body1">Previous</Typography>
                </Link>
                <Link to={"/skills"}>
                    <Typography level="body1">Next</Typography>
                </Link>
            </Stack>
        </Box>
    )
}

export default Projects