import { CssVarsProvider, Typography, Box, Stack, Button } from '@mui/joy'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [titleGradient, setTitleGradient] = useState({
        background: 'linear-gradient(90deg, #FF008C 0%, #FF8C00 50%, #FF008C 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '400% 400%',
        animation: 'gradient 25s ease infinite',
        '@keyframes gradient': {
            '0%': {
                backgroundPosition: '0% 50%'
            },
            '50%': {
                backgroundPosition: '100% 50%'
            },
            '100%': {
                backgroundPosition: '0% 50%'
            }
        },
    })

    const [opacitySubtitle, setOpacitySubtitle] = useState(0)
    const [opacityBody, setOpacityBody] = useState(0)

    useEffect(() => {
        document.title = "Ben Gregory"
        setTimeout(() => {
            setOpacitySubtitle(1)
        }, 400)

        setTimeout(() => {
            setOpacityBody(1)
        }, 1000)



    }, [])

 





    return (
        <CssVarsProvider>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <Stack
                direction="column"
                spacing={2}
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: '0 20px',
                    textAlign: 'center',
                }}>
                    <Stack>
                        <Box sx={{
                            animation: 'fadeInTop 500ms ease-in-out',
                            '@keyframes fadeInTop': {
                                '0%': {
                                    opacity: 0,
                                    transform: 'translateY(-100px)'
                                },
                                '100%': {
                                    opacity: 1,
                                    transform: 'translateY(0px)'
                                }
                            }
                        }}>
                        <Typography level="display1" 
                        sx={titleGradient}
                        >Ben Gregory</Typography>
                        </Box>
                     
                        <Typography level="h2" sx={{
                            opacity: opacitySubtitle,
                            animation: 'fadeIn 500ms ease-in-out',
                            animationDelay: '0.4s',
                            '@keyframes fadeIn': {
                                '0%': {
                                    opacity: 0,
                                    transform: 'translateX(-100px)'
                                },
                                '100%': {
                                    opacity: 1,
                                    transform: 'translateX(0px)' 
                                }
                            },
                            

                        }} fontWeight={200} >Software developer</Typography>
                    </Stack>
    

                    <Typography level="body1" 
                    sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'center',
                        opacity: opacityBody ? 1 : 0,
                        animation: 'fadeInSide 500ms ease-in-out',
                        animationDelay: '1s',
                        '@keyframes fadeInSide': {
                            '0%': {
                                opacity: 0,
                                transform: 'translateY(100px)'
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'translateY(0px)'
                            }
                        },

                    }}
                    >
                        Hello! My name is Ben, I'm a 21-year-old dev. I have a strong passion for technology and web development, and I'm currently working at a startup called WeMed. Over the years, I have gained experience working on various projects and technologies, and I love to take on new challenges. <br/><br/> On this website, you can explore some of my recent projects and learn more about my skills and interests. Feel free to contact me to discuss your projects or to learn more about me. Thank you for visiting my portfolio!
                   
                    </Typography>

                 
                        <Link to="/projects">

                            <Typography level="body1" >
                            Next
                            </Typography>
                            
                        </Link>
                  
                </Stack>
        </Box>
        </CssVarsProvider>

    )

}

export default Home