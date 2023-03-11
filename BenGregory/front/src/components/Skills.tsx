import { Box, Modal, ModalClose, Sheet, Stack, Typography } from "@mui/joy"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const Skills = (props: { skills: any; }) => {

    
    //modal
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [modalDescription, setModalDescription] = useState("")


    const [circle, setCircle] = useState()
    const [ctx, setCtx] = useState()
    const [canvas, setCanvas] = useState()
    let size = 100;
    const [skills, setSkills] = useState(props.skills)

   

    useEffect(() => {
       
        document.title = "Ben Gregory - Skills"
        console.log(props.skills)
        const canvas = document.getElementById("canvasSkills") as HTMLCanvasElement
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
            const width = canvas.width = window.innerWidth
            const height = canvas.height = window.innerHeight
            
            const circle = new Path2D()
            circle.arc(width / 2, height / 2, 100, 0, 2 * Math.PI)
            ctx.fillStyle = "black"
            
            ctx.fill(circle)
            if(ctx === null) return
            if(canvas === null) return
            setCircle(circle)
            setCtx(ctx)
            setCanvas(canvas)
            growCircle();
        


    
    }, [canvas])

    const growCircle = () => {
        if(canvas === null || ctx === null) return
        console.log("grow")

        const width = canvas.width = window.innerWidth
        const height = canvas.height = window.innerHeight

       
        ctx.clearRect(0, 0, width, height)
        //make the circle bigger
        circle.arc((width / 2), (height / 2), size, 0, 2 * Math.PI)
        //draw the circle
        ctx.fill(circle)
       
        if(size > width){
            return
        }
        else size += 5
        requestAnimationFrame(growCircle)
    }
    
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',

        }}>
            <Box
                sx={{
                    display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            position: 'absolute',
            top: 0, 
            left: 0,
            right: 0,
            bottom: 0,
            color: 'white',
            zIndex: 1,
            width: '100vw',
           
                }}
            id="skills"
            >
                {/*
                <Typography level="display1" color="white">
                    Skills
                </Typography>
                */}
                
                    
                    <Stack direction={"column"}
                    spacing={4}
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        maxWidth: '1000px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {
                            props.skills.map((skill:any, index:any) => {
                                return (
                                        <Typography level="display1"
                                        key={index}
                                        onClick={() => {
                                            setModalTitle(skill.title)
                                            setModalDescription(skill.description)
                                            setOpen(true)
                                        }}
                                        sx={{
                                            p: 5,
                                            fontSize: skill.weight + "rem",
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                                color: 'primary',
                                            }
                                        }}
                                        >
                                            {skill.title}
                                        </Typography>
                                )
                            })

                        }
                    </Stack>
                    

                

                    
                
                
                <Stack direction={"row"} spacing={4} p={4}>
                <Link to={"/projects"} 
                    style={{
                        textDecorationColor: 'white',
                        cursor: 'pointer',
                    }}
                >
                    <Typography level="body1" 
                    sx={{
                        color: 'white',
                        textDecoration: 'none',
                    }}

                    >Previous</Typography>
                </Link>
                <Link to={"/"} style={{
                        textDecorationColor: 'white',
                        cursor: 'pointer',
                    }}>
                    <Typography level="body1" sx={{
                        color: 'white',
                        cursor: 'pointer',
                    }}>Next</Typography>
                </Link>
            </Stack>
                
            </Box>
            <canvas id="canvasSkills"></canvas>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
            <Sheet
                variant="outlined"
                sx={{
                    maxWidth: 500,
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                    outline: 'none',
                }}
            >
                
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        fontWeight="lg"
                        mb={1}
                        sx={{
                            color: 'black',
                        }}
                    >
                        {modalTitle}
                    </Typography>
                    <Typography id="modal-desc" textColor="inherit">
                        {modalDescription}
                    </Typography>
            </Sheet>
        </Modal>
            
        </Box>
    )
}

export default Skills