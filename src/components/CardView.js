import React from "react"
import '../App.css';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function CardView(props){
    return (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <Card sx={{ maxWidth: 312, backgroundColor: '#1B262C', color: "#FFF"}}>
                <CardActionArea onClick={props.func}>
                    <CardMedia
                        component="img"
                        height={312}
                        image={props.image}
                        alt="Card Image"
                    />
                    <CardContent>
                        <Typography>{props.name}</Typography>
                        <Typography>Type: {props.type}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        
    )
}

export default CardView;