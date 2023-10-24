import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ModalContent( props ) {
    return (
        <div className="main-popUP">
            <div className="main-popUP-content">
                <Card sx={{ maxWidth: 500 }} >
                    <CardMedia
                        className='main-popUP-card'
                        component="img"
                        height={"100%"}
                        image={props.image}
                        alt="Card Image"
                    />
                </Card>
                <div className="content-card-popUp">
                    <Typography sx={{fontSize: 40}}>{props.set_name}</Typography>
                    <Typography sx={{fontSize: 40}}>{props.set_code}</Typography>
                    <Typography sx={{fontSize: 40}}>{props.set_rarity}</Typography>
                    <Typography sx={{fontSize: 40}}>{props.set_rarity_code}</Typography>
                    <Typography sx={{fontSize: 40}}>{props.set_price}</Typography>
                </div>
            </div>
        </div>
    );
}
