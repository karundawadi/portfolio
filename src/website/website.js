import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./routes/about"
import Articles from "./routes/articles"
import Projects from "./routes/projects"
import TimeBasedMaintanence from "./bodyComponents/blogs/all_blogs/TimeBasedMaintanence";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

function WebSite() {
    const [darkMode,changeDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [value, setValue] = React.useState(0);

    return (
        <BrowserRouter>
            <ThemeProvider theme={
                createTheme({
                    palette: {
                        primary: {
                            main:'#647c2e', 
                            // For the color of buttons,
                        },
                        mode:darkMode?"dark":"light",
                    },
                })}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<About changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article" element={<Articles changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="project" element={<Projects changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article/timeBasedMaintanence" element={<TimeBasedMaintanence changeMode={changeDarkMode} dark={darkMode}/>} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default WebSite