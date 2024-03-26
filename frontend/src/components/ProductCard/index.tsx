import { Box, IconButton, Menu, MenuItem, Stack } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function ProductCard() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Stack p={1} gap={1} width={'300px'} height={'300px'} sx={{ borderRadius: '15px', backgroundColor: 'white' }}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} gap={1}>
                    <Box sx={{ backgroundColor: 'lightgray', width: '100px', height: '100px', borderRadius: '10px' }}></Box>
                    <Stack gap={0.3} >
                        <Box sx={{ fontWeight: '700', color: 'rgb(78,78,76)' }}>Product Name</Box>
                        <Box sx={{ fontSize: '12px' }}>Category</Box>
                        <Box sx={{ fontSize: '14px', fontWeight: '600' }}>Amount</Box>
                    </Stack>
                </Stack>
                <IconButton onClick={handleMenu} sx={{ width: '30px', height: '30px', marginRight: '5px' }}><MoreHorizIcon /></IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
            </Stack>
            <Stack>
                <Box sx={{ fontSize: '14px', fontWeight: '600' }}>Description :</Box>
                <Box>Description</Box>
                <Box sx={{ fontSize: '14px', fontWeight: '600', paddingTop: '7px' }}> Remaining : 1</Box>
            </Stack>
        </Stack>
    )
}

export default ProductCard
