import { Stack } from '@mui/material'
import React from 'react'
import HeaderBreadcrumb from '../../../components/HeaderBreadcrumb'

function DashboardHeader() {
    return (
        <Stack>
            <HeaderBreadcrumb text={'Dashboard'} textStyles={{ sx: {}, fontSize: "24px", fontWeight: "600", lineHeight: "28.44px" }} breadcrumb={[{ text: 'Home', link: '/' },]} />
        </Stack>
    )
}

export default DashboardHeader