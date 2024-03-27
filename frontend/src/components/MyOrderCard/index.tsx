import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import ping from '../../assets/images/pingHigh.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

export default function MyOrderCard() {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: '100%', display:"flex" }}>
            <CardActionArea sx={{display:"flex"}}>
                {/* <CardMedia
                component="img"
                height="140"
                width="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                /> */}
                <img alt='image' src={ping} style={{width:"140px", height:"140px"}} />
                
                <CardContent sx={{width:"100%"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary" onClick={()=> navigate('/my_order/my_order_details')}>
          <NavigateNextIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}