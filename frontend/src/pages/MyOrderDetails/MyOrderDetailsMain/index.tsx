import { FC } from 'react'
import {Box, Button, Grid, Stack, Typography} from '@mui/material'
import StepperComponent from '../../../components/StepperComponent';
import OrderTab from '../../../components/OrderTab';
import OrderStepper from '../../../components/OrderStepper';

const MyOrderDetailsMain: FC = () => {
    
    return (
        <Box>
            <Box sx={{width:"100%", height:"84px", backgroundColor:"white", display:"flex", alignItems:"center", borderRadius:"0.8rem",  boxSizing:"border-box"}}><StepperComponent/></Box>
            <Box sx={{mt:"24px"}}>
                <Grid container spacing={2} gap={'16px'} sx={{m:"0px", p:"0px", boxSizing:"border-box"}}>
                    <Grid item md={6.9} sx={{backgroundColor:"white", borderRadius:"0.8rem"}}>  
                        <OrderTab/>
                    </Grid>
                    <Grid item md={4.9} sx={{backgroundColor:"white" , borderRadius:"0.8rem", p:"10px"}}>
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <Stack gap={0.3}>
                                <Stack color={'#adadb9'} gap={1} direction={'row'}>Order Created on: <Box color={'black'} fontWeight={'600'}>7/3/3 -10.30 am</Box></Stack >
                                <Stack color={'#adadb9'} gap={1} direction={'row'} >Tracking Id: <Box color={'black'} fontWeight={'600'}>LOOONHJHV7780GUG8B</Box></Stack >
                                <Stack color={'#adadb9'} gap={1} direction={'row'}>Last Updated: <Box color={'black'} fontWeight={'600'}>Today - 9.00am</Box></Stack >
                            </Stack>
                            <Box>
                                <Button variant="outlined" sx={{textTransform:"unset"}}>Cancel Order</Button>
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