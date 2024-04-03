import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import { LineChart } from '@mui/x-charts/LineChart';

function SideGraph() {
    return (
        <Stack width={'60%'} p={2} sx={{ backgroundColor: 'white', borderRadius: '10px', boxSizing:"border-box" }} gap={1}>
            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <Box fontWeight={'600'}>Sale Graph</Box>
                <Stack direction={'row'} gap={1}>
                    <CustomButton onclick={() => { }} sxprops={{ sx: { width: '120px', height: '35px' } }} variant="outlined" text="Weekly" />
                    <CustomButton onclick={() => { }} sxprops={{ sx: { width: '120px', height: '35px' } }} variant="contained" text="Monthly" />
                    <CustomButton onclick={() => { }} sxprops={{ sx: { width: '120px', height: '35px' } }} variant="outlined" text="Yearly" />
                </Stack>
            </Stack>
            <Divider />
            <LineChart
                xAxis={[{ data: [1, 2, 3,4, 5,6, 7, 8,9, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5, 1, 6, 7, 8],
                        area: true,
                    },
                ]}
                sx={{ width: '100%' }}
                height={300}
            />
        </Stack>
    )
}

export default SideGraph