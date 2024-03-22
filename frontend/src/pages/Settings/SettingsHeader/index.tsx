import { Box, Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import TypographyText from '../../../components/TypographyText'

function SettingsHeader() {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack gap={1}>
                <Box sx={{ fontSize: '28px', fontWeight: '600', lineHeight:"42px", fontFamily:"poppins" }}>Settings</Box>
                <TypographyText text={'Manage your account settings'} fontSize={'14px'} fontWeight={'400'} />
            </Stack>
            <Stack direction={'row'} gap={3}>
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="contained" text="Save changes" />
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="outlined" text="Cancel" />
            </Stack>
        </Stack>
    )
}

export default SettingsHeader