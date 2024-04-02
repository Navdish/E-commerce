import { Box, Divider, IconButton, Stack } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BestSellerDashboard from '../../../components/BestSellerDashboard';
import CustomButton from '../../../components/CustomButton';

function BestSellers() {
    return (
        <Stack width={'40%'} p={2} sx={{ backgroundColor: 'white', borderRadius: '10px',blockSize:'fit-content' }} gap={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontWeight={'600'}>Best Sellers</Box>
                <IconButton><MoreVertIcon /></IconButton>
            </Stack>
            <Divider />
            <BestSellerDashboard name={'Product 1'} price1={'Rs 999.00'} price2={'599'} sales={'40 in stock'} />
            <BestSellerDashboard name={'Product 2'} price1={'Rs 499.00'} price2={'299'} sales={'20 in stock'} />
            <BestSellerDashboard name={'Product 3'} price1={'Rs 199.00'} price2={'99'} sales={'10 in stock'} />
            <CustomButton onclick={() => { }} sxprops={{ sx: { width: '120px', height: '35px' } }} variant="contained" text="Report" />

        </Stack>
    )
}

export default BestSellers