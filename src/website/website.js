import React from "react"
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./routes/about"
import Articles from "./routes/articles"
import Projects from "./routes/projects"
import TimeBasedMaintanence from "./bodyComponents/blogs/all_blogs/TimeBasedMaintanence";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import InsideOutReview from "./bodyComponents/blogs/all_blogs/insidethemindof11yearold";
import ProblemsWithPlastic from "./bodyComponents/blogs/all_blogs/problemswithplastic";
import CanSpam from "./bodyComponents/blogs/all_blogs/canSPAM";

function WebSite() {
    const [darkMode,changeDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [value, setValue] = React.useState(0);

    return (
        <HashRouter>
            <ThemeProvider theme={
                createTheme({
                    palette: {
                        mode:darkMode?"dark":"light",
                    },
                })}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<About changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article" element={<Articles changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="project" element={<Projects changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article/timeBasedMaintanence" element={<TimeBasedMaintanence changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article/insideOut" element={<InsideOutReview changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article/problemsWithPlastic" element={<ProblemsWithPlastic changeMode={changeDarkMode} dark={darkMode}/>} />
                    <Route path="article/canSpam" element={<CanSpam changeMode={changeDarkMode} dark={darkMode}/>} />
                </Routes>
            </ThemeProvider>
        </HashRouter>
    )
}

export default WebSite