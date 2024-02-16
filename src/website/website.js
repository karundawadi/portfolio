import React from "react"
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./routes/about"
import Articles from "./routes/articles"
import Projects from "./routes/projects"
import { 
    ThemeProvider, 
    createTheme 
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import TaskManager from "../projects/taskManager/src/taskManager";
import BlogRenderer from "./bodyComponents/blogs/BlogRenderer";
import { AllBlogs } from "./bodyComponents/blogs/AllBlogs";

function WebSite() {
    const [darkMode,changeDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
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
                    {AllBlogs.map(article => (
                        <Route key={article.path} 
                            path={`article/${article.path}`} 
                            element={<BlogRenderer articleData={article.data} changeMode={changeDarkMode} dark={darkMode}/>} />
                    ))}
                    <Route path="taskManager" element={<TaskManager title={"Task Manager"} changeMode={changeDarkMode} dark={darkMode}/>} />
                </Routes>
            </ThemeProvider>
        </HashRouter>
    )
}

export default WebSite