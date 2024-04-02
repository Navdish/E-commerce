import { Box, Stack } from '@mui/material'
import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardTopCard from '../../components/DashboardTopCard'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideGraph from './SideGraph';
import BestSellers from './BestSellers';

function Dashboard() {
    return (
        <Stack p={4} gap={2} sx={{}} >
            <DashboardHeader />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Total Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Active Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Complete Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Return Orders'} line1={''} line2={''} line3={''} />
            </Box>
            <Stack direction={'row'} gap={2}>
                <SideGraph />
                <BestSellers />
            </Stack>
        </Stack>
    )
}

export default Dashboard