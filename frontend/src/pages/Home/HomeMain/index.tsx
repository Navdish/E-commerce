import { FC } from 'react'
import {Box, Button, Paper} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import carousel3 from '../../../assets/images/carousel3.png'
import carousel1 from '../../../assets/images/carousel1.png'
import CategoryComponent from '../../../components/CategoryComponent'

function Item(props: any)
{
    
    return (
        <Paper sx={{height:"144px", borderRadius:"0.8rem"}}>
            <img src={props.item.car_img} alt='carousel' style={{height:"100%", width:"100%", borderRadius:"0.8rem"}}/>
        </Paper>
    )
}

const HomeMain: FC = () => {
    var items = [
        {
            car_img: carousel3
        },
        
        {
            car_img: carousel1
        }
    ]
    return (
        <Box sx={{p:"24px"}}>
            <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Box >
                <CategoryComponent/>
            </Box>
        </Box>
    )
}

export default HomeMain;