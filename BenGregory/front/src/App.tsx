

import { CssVarsProvider, Typography, Box, Stack, Button } from '@mui/joy'
import { useEffect, useState } from 'react'
import { Route, Router, Routes, useActionData } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch("https://portfolio-ben-gregory.herokuapp.com/api/projects").then(res => res.json()).then(data => {
      setProjects(data)
      
    }).catch(err => {
      console.log(err)
    })

    fetch("http://localhost:3000/api/skills").then(res => res.json()).then(data => {
      setSkills(data)
    }).catch(err => {
      console.log(err)
    })

  }, [])

  


  return (
    <CssVarsProvider>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects projects={projects}/>} />
          <Route path="/skills" element={<Skills skills={skills}/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Box>
    </CssVarsProvider>
    
  )
}

export default App
