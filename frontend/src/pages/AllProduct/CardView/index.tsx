import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import ProductCard from '../../../components/ProductCard'

export default function CardView() {
    return (
        <Stack gap={1}>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gap={1}>
                <ProductCard />
            </Box>
            <Pagination count={10} shape="rounded" />
        </Stack>

    )
}