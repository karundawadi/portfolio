import React from "react"
import { Box, CardMedia, Card, CardContent, Typography, CardActions, Button, useTheme  } from "@mui/material"

function TemplateCard(props){
    const theme = useTheme()
    return (
        <Box sx={
            {
                [theme.breakpoints.down('sm')]: {
                    width:'100%'
                },
                padding:1,
                overflow:'hidden',
                width:'100%'
            }}>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    height="200"
                    image={props.imageLink}
                    alt={props.imagealt}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.projectTitle}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.LanguagesUsed}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.shortDescription}
                    </Typography>
                    <Typography variant="body2">
                        {props.actualDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>{
                        window.open(props.gitHubLink)
                    }}>More Details</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
export default TemplateCard