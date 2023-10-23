import { Card, CardActionArea, CardMedia } from "@mui/material";


export default function ModalContent({ image }) {
    return (
        <div className="main-popUP">

            <Card sx={{ maxWidth: 500 }}  className="popUp-card">
                <CardActionArea>
                    <CardMedia
                        className='main-popUP-card'
                        component="img"
                        height={"100%"}
                        image={image}
                        alt="Card Image"
                    />
                </CardActionArea>
            </Card>

        </div>
    );
}
