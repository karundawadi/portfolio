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
import BlogRenderer from "./bodyComponents/blogs/BlogRenderer";
import StockSnapshot from "../projects/stockSnapshot/src/stockSnapshot";
import { AllBlogs } from "./bodyComponents/blogs/AllBlogs";
import TaskManagerComponent from "../projects/taskManager/app/app";
import MortgageCalculatorComponent from "../projects/mortgageCalculation/app/app";
import GistArticlePage from "../projects/newsfromaroundtheworld/gistarticlepage";
import NewsFromAroundTheWorld from "../projects/newsfromaroundtheworld/newsfromaroundtheworld";
import { Provider } from "react-redux";
import { store } from "./store/store";

function WebSite() {
    const [darkMode,changeDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    return (
        <Provider store={store}>
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
                        <Route path="stocksnapshot" element={<StockSnapshot title={"Stock Snapshot"} changeMode={changeDarkMode} dark={darkMode}/>} />
                        <Route path="taskmanager" element={<TaskManagerComponent title={"Task Manager"} changeMode={changeDarkMode} dark={darkMode}/>} />
                        <Route path="mortgagepayoff" element={<MortgageCalculatorComponent title={"Mortgage Payoff"} changeMode={changeDarkMode} dark={darkMode}/>} />
                        <Route path="newsfromaroundtheworld" element={<NewsFromAroundTheWorld title={"News From Around The World"} changeMode={changeDarkMode} dark={darkMode}/>} />
                        <Route path="newsfromaroundtheworld/:gistId" element={<GistArticlePage changeMode={changeDarkMode} dark={darkMode}/>} />
                    </Routes>
                </ThemeProvider>
            </HashRouter>
        </Provider>
    )
}

export default WebSite