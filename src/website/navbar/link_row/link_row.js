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
            
            <BsGithub style={{
                padding:4,
                fontSize: 'x-large'
            }} />
            
            <BsLinkedin style={{
                padding:4,
                fontSize: 'x-large'
            }} onClick={()=>{
                window.open("https://www.google.com/")
            }}/>
            
            <BsEnvelope style={{
                padding:4,
                fontSize: 'x-large'
            }} onClick={()=>{
                window.open("https://www.google.com/")
            }}/>

            <BsFileEarmarkText  style={{
                padding:4,
                fontSize: 'x-large'
            }} onClick={()=>{
                window.open("https://www.google.com/")
            }}/>
        </Box>
    )
}

export default LinkRow 