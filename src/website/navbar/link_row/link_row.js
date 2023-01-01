import React from "react"
import { Box} from "@mui/material"
import { BsGithub, BsLinkedin, BsEnvelope, BsFileEarmarkText } from 'react-icons/bs'

function LinkRow(params) {
    return (
        <Box sx={{ 
                flexDirection: 'row',
                display: 'flex',
                justifyContent:'center',
            }}>
            
            <BsGithub 
            style={{
                padding:4,
                fontSize: 'x-large'
            }} 
            onClick={()=>{
                window.open("https://github.com/karundawadi")
            }}
            />
            
            <BsLinkedin 
            
            style={{
                padding:4,
                fontSize: 'x-large'
            }} 
            onClick={()=>{
                window.open("https://www.linkedin.com/in/karundawadi/")
            }}
            />
            
            <BsEnvelope 
            style={{
                padding:4,
                fontSize: 'x-large'
            }} 
            onClick={()=>{
                window.open("mailto:someone@yoursite.com?subject=In regards to")
            }}/>

            <BsFileEarmarkText  
            style={{
                padding:4,
                fontSize: 'x-large'
            }} 
            onClick={()=>{
                window.open("Resume.pdf")
            }}/>
        </Box>
    )
}

export default LinkRow 