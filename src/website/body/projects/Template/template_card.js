import React from "react"
import { Box, Container, Card, Modal, CardContent, Typography, CardActions, Button  } from "@mui/material"
import {BsGithub} from 'react-icons/bs'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    boxShadow: 24,
    p: 4,
};

function TemplateCard(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <React.Fragment>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{
                        flexDirection: 'row',
                        display: 'flex',
                    }}>
                        <Box sx={{paddingRight:1}}>
                            <Typography 

                            onClick={()=>{
                                window.open(props.gitHubLink)
                            }} 

                            variant="h6" 
                            component="h1">
                                {props.projectTitle}
                            </Typography>
                        </Box>
                
                        <Box>
                            <BsGithub style={{
                                fontSize:'large',
                            }} onClick={()=>{
                                window.open(props.gitHubLink)
                            }}/>
                        </Box>
                    </Box>
                    <Box sx={{
                        pt:2,
                        paddingBottom:2,
                        maxHeight:600,
                        overflow:'hidden',
                        overflowY:'auto'
                    }}>
                        {props.modalDescription}
                    </Box>

                    <Box style={{
                        textAlign:'center',
                        paddingTop:8
                    }}>
                        <Button variant="outlined" color="error" onClick={()=>{
                            handleClose()
                        }}> Close</Button>
                    </Box>
                </Box>
            </Modal>

        <Box sx={{width:'50%',padding:1,overflow:'hidden'}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.LanguagesUsed}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.projectTitle}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.shortDescription}
                    </Typography>
                    <Typography variant="body2">
                        {props.actualDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="error" onClick={()=>{
                        handleOpen()
                    }}>More Details</Button>
                </CardActions>
            </Card>
        </Box>
        </React.Fragment>
    )
}
export default TemplateCard