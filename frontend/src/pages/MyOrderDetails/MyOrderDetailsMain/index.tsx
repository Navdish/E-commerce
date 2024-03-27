import { FC } from 'react'
import {Box, Button, Grid, Typography} from '@mui/material'
import StepperComponent from '../../../components/StepperComponent';
import OrderTab from '../../../components/OrderTab';
import OrderStepper from '../../../components/OrderStepper';

const MyOrderDetailsMain: FC = () => {
    
    return (
        <Box>
            <Box sx={{width:"100%", height:"84px", backgroundColor:"white", display:"flex", alignItems:"center", borderRadius:"0.8rem",  boxSizing:"border-box"}}><StepperComponent/></Box>
            <Box sx={{mt:"24px"}}>
                <Grid container gap={"24px"} sx={{m:"0px", p:"0px", boxSizing:"border-box"}}>
                    <Grid item xs={7.9} sx={{backgroundColor:"white", borderRadius:"0.8rem"}}>  
                        <OrderTab/>
                    </Grid>
                    <Grid item xs={3.9} sx={{backgroundColor:"white" , borderRadius:"0.8rem", p:"10px"}}>
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <Box>
                                <Box>
                                    <Typography display="inline">Order Created on </Typography> <Typography  display="inline">7/3/2023 -10:30am</Typography>
                                </Box>
                                <Box>
                                    <Typography display="inline">Tracking ID </Typography> <Typography display="inline">LOGOMOCHO1234NN</Typography>
                                </Box>
                                <Box>
                                    <Typography display="inline">Last Updated</Typography> <Typography display="inline">Today - 9:30am</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Button variant="outlined">Cancel Order</Button>
                            </Box>
                        </Box>
                        <Box>
                            <OrderStepper/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MyOrderDetailsMain;