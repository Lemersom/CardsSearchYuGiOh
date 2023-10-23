import { Card, CardActionArea, CardMedia } from "@mui/material";


export default function ModalContent({ onClose, image }) {
    return (
        <div className="main-popUP">

            <button onClick={onClose} className="button-close">X</button>
            <Card sx={{ maxWidth: 500 }}  className="popUp-card">
                <CardActionArea>
                    <CardMedia
                        className='main-popUP-card'
                        component="img"
                        height={500}
                        image={image}
                        alt="Card Image"
                    />
                </CardActionArea>
            </Card>

        </div>
    );
}
