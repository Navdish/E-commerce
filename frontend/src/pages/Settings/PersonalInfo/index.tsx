import { Avatar, Box, Divider, Stack, TextField } from '@mui/material'
import React from 'react'
import TypographyText from '../../../components/TypographyText'
import CustomButton from '../../../components/CustomButton'

function PersonalInfo() {
    return (
        <Stack p={3} width={'100%'} ml={'20px'}>
            <Stack my={1}>
                <TypographyText text={'General Information'} fontSize={'24px'} fontWeight={'600'} />
                <TypographyText text={'This is my information'} fontSize={'14px'} fontWeight={''} />
            </Stack>
            <Divider />
            <Stack gap={1} my={2}>
                <TypographyText text={'Profile Picture'} fontSize={'20px'} fontWeight={'600'} />
                <Stack direction='row' alignItems={'flex-end'} gap={3} >
                    <Stack direction='row' alignItems={'center'} gap={1}>
                        <Avatar sx={{ width: '64px', height: '64px' }} />
                        <Stack>
                            <TypographyText text={'Navdish'} fontSize={'14px'} fontWeight={'600'} />
                            <TypographyText text={'Role/Title'} fontSize={'12px'} fontWeight={''} />
                            <TypographyText text={'Location'} fontSize={'12px'} fontWeight={''} />
                        </Stack>
                    </Stack>
                    <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'contained'} text={'Change'} />
                    <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'outlined'} text={'Delete'} />
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                <Box>
                    <Box my={1}>
                        <TypographyText text={'UserName'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <TypographyText text={'Phone Number'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <TypographyText text={'Address'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <TypographyText text={'City'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
                <Box>
                    <Box my={1}>
                        <TypographyText text={'Email Address'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <TypographyText text={'Fax'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1} >
                        <TypographyText text={'Country'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <TypographyText text={'State'} fontSize={'16px'} fontWeight={'600'} />
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default PersonalInfo